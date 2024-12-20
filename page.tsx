'use client'; // This marks the component as client-side rendered.

import React, { useState } from 'react';
import SevenSegmentCounter from './components/SevenSegmentCounter'; // Adjust the import path

const Page = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      {/* Header Section with Dark Mode Toggle */}
      <header className="bg-[#333] text-white p-5 shadow-md fixed top-0 left-0 right-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">LearnXplore</h1>
          <button
            onClick={toggleDarkMode}
            className="text-white bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600"
          >
            Toggle Dark Mode
          </button>
        </div>
      </header>

      {/* Seven Segment Counter at the Top-Right Corner */}
      <div className="absolute top-5 right-5 w-20 h-10">
        <SevenSegmentCounter />
      </div>

      {/* Home Section */}
      <section
        id="home"
        className="text-center p-10 bg-yellow-50 shadow-lg rounded-lg my-20 mx-auto max-w-4xl"
      >
        <p className="text-xl mb-5">
          Discover top-tier educational resources, AI tools, and community-driven learning
          platforms.
        </p>
        <p className="text-xl">
          Our mission is to provide easy access to the best learning tools and platforms so you can
          reach your full potential.
        </p>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="p-10 bg-blue-50 rounded-lg shadow-lg my-5 mx-auto max-w-4xl"
      >
        <h2 className="text-2xl mb-5">About Us</h2>
        <p className="text-lg mb-5">
          We are a platform dedicated to empowering learners with free resources, interactive tools,
          and AI assistance.
        </p>
        <h3 className="text-xl mb-3">Our Values</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Open Access to Education</li>
          <li>Innovative Learning Tools</li>
          <li>Inclusive and Supportive Community</li>
          <li>Continuous Improvement</li>
        </ul>
      </section>

      {/* Resources Section */}
      <section
        id="resources"
        className="p-10 bg-teal-50 dark:bg-teal-700 rounded-lg shadow-lg my-5 mx-auto max-w-4xl"
      >
        <h2 className="text-2xl mb-5">Free Learning Resources</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {/* Resource Card 1 */}
          <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md hover:shadow-xl transition-all">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Codecademy</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Learn programming skills at your own pace with interactive lessons.
            </p>
            <a
              href="https://www.codecademy.com/"
              className="inline-block mt-3 text-white bg-[#333] px-4 py-2 rounded-lg hover:bg-[#555]"
            >
              Access Resource
            </a>
          </div>
          {/* Resource Card 2 */}
          <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md hover:shadow-xl transition-all">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">FreeCodeCamp</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Interactive coding challenges to help you become a full stack developer.
            </p>
            <a
              href="https://www.freecodecamp.org/"
              className="inline-block mt-3 text-white bg-[#333] px-4 py-2 rounded-lg hover:bg-[#555]"
            >
              Access Resource
            </a>
          </div>
          {/* Resource Card 3 */}
          <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md hover:shadow-xl transition-all">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Khan Academy</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Access free courses and educational content across a variety of subjects.
            </p>
            <a
              href="https://www.khanacademy.org/"
              className="inline-block mt-3 text-white bg-[#333] px-4 py-2 rounded-lg hover:bg-[#555]"
            >
              Access Resource
            </a>
          </div>
          {/* Resource Card 4 */}
          <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md hover:shadow-xl transition-all">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Coursera</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Access courses from top universities and organizations for free or a certificate.
            </p>
            <a
              href="https://www.coursera.org/"
              className="inline-block mt-3 text-white bg-[#333] px-4 py-2 rounded-lg hover:bg-[#555]"
            >
              Access Resource
            </a>
          </div>
          {/* Resource Card 5 */}
          <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md hover:shadow-xl transition-all">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">edX</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Learn from top universities and institutions with free courses.
            </p>
            <a
              href="https://www.edx.org/"
              className="inline-block mt-3 text-white bg-[#333] px-4 py-2 rounded-lg hover:bg-[#555]"
            >
              Access Resource
            </a>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section
        id="support"
        className="p-10 bg-pink-50 rounded-lg shadow-lg my-5 mx-auto max-w-4xl"
      >
        <h2 className="text-2xl mb-5">Support</h2>
        <div className="flex flex-col space-y-4">
          <button
            onClick={() => window.location.href = 'mailto:5861abhigyan@kvsonline.org'}
            className="bg-yellow-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-yellow-700"
          >
            Email Support
          </button>
          <button
            onClick={() => window.open('https://www.google.com/maps?q=20.158843785327967,85.71148613352551', '_blank')}
            className="bg-yellow-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-yellow-700"
          >
            Show DEV Location
          </button>
        </div>
      </section>

      {/* AI Tutor Section */}
      <section
        id="ai"
        className="p-10 bg-gray-50 rounded-lg shadow-lg my-5 mx-auto max-w-4xl"
      >
        <h2 className="text-2xl mb-5">LearnBud - AI Tutor</h2>
        <iframe
          src="https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2024/11/21/10/20241121100530-5OVZ5S1V.json"
          width="100%"
          height="500px"
          title="AI Tutor"
          className="rounded-lg shadow-lg"
        ></iframe>
      </section>

      {/* Footer */}
      <footer className="bg-yellow-600 text-white p-6 text-center shadow-lg mt-10 rounded-lg">
        <p>&copy; 2024 LearnXplore. All rights reserved.</p>
        <ul className="flex justify-center space-x-4 mt-4">
          <li>
            <a href="#" className="hover:text-yellow-200">Privacy Policy</a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-200">Terms of Service</a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Page;
