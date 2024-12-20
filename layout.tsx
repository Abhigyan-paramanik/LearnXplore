'use client';
import React, { useState } from 'react';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <html lang="en" className={darkMode ? 'dark' : ''}>
      <body className="bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-white min-h-screen flex flex-col">
        {/* Header */}
        <header className="bg-[#333] text-white p-5 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">LearnXplore</h1>
            <nav>
              <ul className="flex space-x-4">
                <li><a href="#home" className="hover:text-[#fce97e] transition">Home</a></li>
                <li><a href="#about" className="hover:text-[#fce97e] transition">About Us</a></li>
                <li><a href="#resources" className="hover:text-[#fce97e] transition">Resources</a></li>
                <li><a href="#support" className="hover:text-[#fce97e] transition">Support</a></li>
              </ul>
            </nav>
            <button
              onClick={toggleDarkMode}
              className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600 transition"
            >
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </header>

        {/* Main content */}
        <main className="container mx-auto p-5 flex-grow">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-[#333] text-white p-5 text-center">
          <p>&copy; 2024 LearnXplore. All rights reserved.</p>
          <ul className="flex justify-center space-x-4 mt-3">
            <li><a href="#" className="hover:text-[#fce97e] transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-[#fce97e] transition">Terms of Service</a></li>
          </ul>
        </footer>
      </body>
    </html>
  );
}
