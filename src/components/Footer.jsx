import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-700 to-blue-900 text-white p-8 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        
        
        <div className="mb-6 md:mb-0">
          <h2 className="text-lg font-bold mb-4">Follow Us</h2>
          <div className="flex justify-center md:justify-start space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition duration-300"
            >
              <FontAwesomeIcon icon={faFacebookF} size="2x" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition duration-300"
            >
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition duration-300"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition duration-300"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
        </div>

    
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h2 className="text-lg font-bold mb-4">Contact Us</h2>
          <div className="flex items-center justify-center md:justify-start mb-2">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
            <span>1234 Street Name, City, Country</span>
          </div>
          <div className="flex items-center justify-center md:justify-start mb-2">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            <span>info@stitchingstore.com</span>
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <FontAwesomeIcon icon={faPhone} className="mr-2" />
            <span>+923079559395</span>
          </div>
        </div>

       
        <div className="text-center md:text-left">
          <h2 className="text-lg font-bold mb-4">About Us</h2>
          <p className="max-w-xs mx-auto md:mx-0">
            Stitching Store is dedicated to providing the best quality clothing with a touch of artificial intelligence for a personalized experience.
          </p>
        </div>
      </div>

      <div className="mt-8 border-t border-blue-500 pt-4 text-center">
        &copy; 2024 Stitching Store. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
