import React, { useState } from "react";
import { Link } from "react-router-dom";
import { subscribeNewsletter } from "../services/newsletterService";

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await subscribeNewsletter(email);
      setMessage('Subscription successful! Check your email for confirmation.');
      setEmail('');
    } catch (error) {
      setMessage('An error occurred while subscribing. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="h-auto w-full bg-gradient-to-r from-green-900 via-green-500 to-teal-600 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        
        {/* Newsletter Section */}
        <div className="w-full md:w-1/3">
          <p className="text-xl font-bold mb-4">Subscribe to our Newsletter</p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="px-4 py-2 mb-3 sm:mb-0 rounded-l-md border-2 border-green-500 text-black w-full sm:w-80"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="bg-green-950 hover:bg-rose-700 text-white font-bold py-2 px-6 rounded-r-md transition-colors duration-300"
              disabled={loading}
            >
              {loading ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
          {message && <p className="mt-4 text-sm text-green-200">{message}</p>}
        </div>

        {/* Links Section - Centered */}
        <div className="w-full md:w-1/3 text-center">
          <ul className="space-y-3 text-sm font-semibold">
            <li>
              <Link to="/about" className="transition-colors duration-300">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="transition-colors duration-300">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="transition-colors duration-300">
                Privacy & Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="transition-colors duration-300">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media Icons Section */}
        <div className="flex justify-center w-full md:w-1/3 space-x-10">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-300"
            aria-label="Facebook"
          >
            <img width="40" height="40" src="https://img.icons8.com/fluency/48/facebook-new.png" alt="Facebook" />
          </a>
          <a
            href="https://www.github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-300"
            aria-label="GitHub"
          >
            <img width="40" height="40" src="https://img.icons8.com/sf-black/64/github.png" alt="GitHub" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-300"
            aria-label="Twitter"
          >
            <img width="40" height="40" src="https://img.icons8.com/ios-filled/50/twitterx--v1.png" alt="Twitter" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-300"
            aria-label="LinkedIn"
          >
            <img width="40" height="40" src="https://img.icons8.com/fluency/48/linkedin.png" alt="LinkedIn" />
          </a>
        </div>
      </div>

      <div className="bg-gray-800 text-center py-4">
        <p className="text-sm text-gray-300">
          Copyright 2024-2025 Suretrust. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
