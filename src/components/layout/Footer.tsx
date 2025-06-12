import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-emerald-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">PawsomeCollars</h3>
            <p className="text-emerald-100 mb-4">
              Handcrafted premium dog collars for your furry best friend. Quality, comfort, and style.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-emerald-200 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-emerald-200 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-emerald-200 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shop" className="text-emerald-200 hover:text-white transition-colors">
                  Shop All
                </Link>
              </li>
              <li>
                <Link to="/collections/new-arrivals" className="text-emerald-200 hover:text-white transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/collections/bestsellers" className="text-emerald-200 hover:text-white transition-colors">
                  Bestsellers
                </Link>
              </li>
              <li>
                <Link to="/size-guide" className="text-emerald-200 hover:text-white transition-colors">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-emerald-200 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-emerald-200 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-emerald-200 hover:text-white transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-emerald-200 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-emerald-200 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-emerald-200 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span>123 Collar Lane, Dogtown, CA 90210</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <span>woof@pawsomecollars.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-emerald-700 mt-8 pt-6 text-center text-emerald-200 text-sm">
          <p>&copy; {new Date().getFullYear()} PawsomeCollars. All rights reserved.</p>
          <p className="mt-1">
            Images from <a href="https://www.pexels.com" className="underline hover:text-white">Pexels</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;