import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 mt-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Rainbow Aroma</h2>
          <p className="text-sm">Baking happiness since 1999. Fresh cakes, pastries & love in every bite.</p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:text-orange-600">Home</a></li>
            <li><a href="#" className="hover:text-orange-600">Menu</a></li>
            <li><a href="#" className="hover:text-orange-600">About Us</a></li>
            <li><a href="#" className="hover:text-orange-600">Contact</a></li>
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h3 className="font-semibold mb-2">Contact Us</h3>
          <p className="text-sm">📍 123 Sweet Street, Delhi</p>
          <p className="text-sm">📞 +91 98765 43210</p>
          <p className="text-sm">📧 hello@rainbowbakery.in</p>
          <div className="flex space-x-3 mt-3">
            <FaFacebookF className="hover:text-orange-600 cursor-pointer" />
            <FaInstagram className="hover:text-orange-600 cursor-pointer" />
            <FaTwitter className="hover:text-orange-600 cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="text-center mt-6 text-sm text-orange-600">
        © 2025 Rainbow Bakery. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
