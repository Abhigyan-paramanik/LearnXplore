import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

// MongoDB Configurations
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const DATABASE_NAME = 'userTracking';
const COLLECTION_NAME = 'visits';
const INACTIVITY_TIMEOUT = parseInt(process.env.INACTIVITY_TIMEOUT || '5', 10) * 60 * 1000; // 5 minutes

let cachedClient: MongoClient | null = null;

async function connectToDatabase() {
  if (cachedClient) {
    return cachedClient;
  }

  const client = new MongoClient(MONGODB_URI);
  await client.connect();
  console.log('MongoDB connected.');
  cachedClient = client;
  return cachedClient;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  try {
    const client = await connectToDatabase();
    const db = client.db(DATABASE_NAME);
    const collection = db.collection(COLLECTION_NAME);

    // Get user IP
    const ip = Array.isArray(req.headers['x-forwarded-for'])
      ? req.headers['x-forwarded-for'][0]
      : req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';

    if (!ip || ip === 'unknown') {
      console.warn('Unable to identify user IP. Skipping tracking.');
      return res.status(400).json({ message: 'Unable to identify user.' });
    }

    const currentTime = new Date();
    console.log(`Tracking user: IP=${ip} at ${currentTime}`);

    // Update user's last activity
    const updateResult = await collection.updateOne(
      { ip },
      { $set: { lastActive: currentTime } },
      { upsert: true }
    );
    console.log(`Update result: matched ${updateResult.matchedCount}, upserted ${updateResult.upsertedCount}`);

    // Remove users inactive for longer than the inactivity timeout
    const thresholdTime = new Date(Date.now() - INACTIVITY_TIMEOUT);
    const deleteResult = await collection.deleteMany({ lastActive: { $lt: thresholdTime } });
    console.log(`Removed inactive users: ${deleteResult.deletedCount}`);

    // Count active users
    const activeUsers = await collection.countDocuments();
    console.log(`Active users count: ${activeUsers}`);

    return res.status(200).json({ activeUsers });
  } catch (err) {
    console.error('Error in API handler:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
