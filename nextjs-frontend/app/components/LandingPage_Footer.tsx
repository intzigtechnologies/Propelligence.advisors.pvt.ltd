"use client";

import React from "react";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const LandingPage_Footer: React.FC = () => {
  return (
    <footer className="relative w-full bg-linear-to-r from-sky-100 to-indigo-200 text-[#001f3f] py-8 sm:py-10 md:py-12 lg:py-16">
      <svg
        className="absolute top-0 left-0 w-full"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 Q150,30 300,30 T600,30 T900,30 T1200,0 L1200,0 L0,0 Z"
          fill="white"
        />
      </svg>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-8">
          {/* Contact Info */}
          <div className="flex flex-col gap-3 text-center sm:text-left">
            <h3 className="font-bold">Contact</h3>
            <div className="space-y-2">
              <p>
                <span className="font-bold">Email:</span>{" "}
                <a
                  href="mailto:info@propelligence.com"
                  className="underline hover:text-indigo-600 transition-colors"
                >
                  info@propelligence.com
                </a>
              </p>

              <p>
                <span className="font-bold">Phone:</span>{" "}
                <a
                  href="tel:+911234567890"
                  className="underline hover:text-indigo-600 transition-colors"
                >
                  +91 12345 67890
                </a>
              </p>

              <p>
                <span className="font-bold">Location:</span> 206, Kulkarni House,
                Ghantali Road, Naupada, Thane(West), Mumbai
              </p>
            </div>
          </div>

          {/* Follow Us */}
          <div className="flex flex-col gap-3 text-center sm:text-left lg:items-end">
            <h3 className="font-bold">Follow Our Socials</h3>
            <div className="flex gap-4 justify-center sm:justify-start lg:justify-end">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#001f3f] hover:text-pink-500 transition-transform duration-300 transform hover:scale-110"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#001f3f] hover:text-blue-700 transition-transform duration-300 transform hover:scale-110"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#001f3f] hover:text-blue-600 transition-transform duration-300 transform hover:scale-110"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#001f3f] hover:text-black transition-transform duration-300 transform hover:scale-110"
              >
                <FaXTwitter size={24} />
              </a>
            </div>
          </div>
        </div>

        <hr className="border-t border-black my-6 sm:my-8" />

        <div className="text-center space-y-2">
          <p>© {new Date().getFullYear()} Propelligence Advisors Pvt. Ltd. All rights reserved.</p>
          <p>
            Made with ❤️ by{" "}
            <a
              href="https://intzig.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600"
            >
              Intzig Technologies
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default LandingPage_Footer;
