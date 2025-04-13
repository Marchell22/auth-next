import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 pt-10 pb-6">
        <div className="flex flex-wrap">
          {/* Company Info */}
          <div className="w-full md:w-1/4 text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Link</h3>
            <p className="mb-4">
              Providing reliable tech solutions since 2023. Quality, Innovation, and Customer Satisfaction.
            </p>
            <div className="flex items-center justify-center md:justify-start mb-2">
              <MdLocationOn className="mr-2 text-lg" />
              <span>123 Street, City, Country</span>
            </div>
            <div className="flex items-center justify-center md:justify-start mb-2">
              <MdPhone className="mr-2 text-lg" />
              <span>+1 234 567 8900</span>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <MdEmail className="mr-2 text-lg" />
              <span>info@example.com</span>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="w-full md:w-1/4 text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <Link href="/" className="hover:text-gray-400 transition-colors">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/about" className="hover:text-gray-400 transition-colors">
                  About
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/services" className="hover:text-gray-400 transition-colors">
                  Services
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/portfolio" className="hover:text-gray-400 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div className="w-full md:w-1/4 text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul>
              <li className="mb-2">
                <Link href="/services/web-development" className="hover:text-gray-400 transition-colors">
                  Web Development
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/services/app-development" className="hover:text-gray-400 transition-colors">
                  App Development
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/services/ui-design" className="hover:text-gray-400 transition-colors">
                  UI/UX Design
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/services/consultation" className="hover:text-gray-400 transition-colors">
                  IT Consultation
                </Link>
              </li>
              <li>
                <Link href="/services/digital-marketing" className="hover:text-gray-400 transition-colors">
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="mb-4">Subscribe to our newsletter for updates and offers.</p>
            <form className="mb-4">
              <input
                type="email"
                placeholder="Your Email"
                className="bg-gray-700 text-white px-4 py-2 w-full rounded mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 w-full rounded transition-colors"
              >
                Subscribe
              </button>
            </form>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
                <FaGithub size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="bg-gray-900 py-4">
        <div className="container mx-auto px-6 text-center">
          <p>© {currentYear} Link. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;