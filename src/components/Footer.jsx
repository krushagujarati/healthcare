import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">About</h3>
          <p>
            HealthCare is dedicated to connecting patients with the best
            healthcare professionals and services in their area.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Contact</h3>
          <p>Email: support@healthcare.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Address: 123 Health St., Wellness City</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Legal</h3>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
          </ul>
          <div className="mt-4 flex space-x-4">
            <a href="#" aria-label="Facebook" className="hover:text-white">
              👍
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-white">
              🐦
            // eslint-disable-next-line react/jsx-no-comment-textnodes
            </a>
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a href="#" aria-label="Instagram" className="hover:text-white">
              📸
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} HealthCare. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
