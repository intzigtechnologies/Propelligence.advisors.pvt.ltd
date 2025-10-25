"use client";

import Image from "next/image";
import Link from "next/link";

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center gap-8 px-4">
      {/* Image container */}
      <div className="relative w-50 sm:w-1/5 aspect-square max-w-[400px] min-w-[200px]">
        {/* SVG Background */}
        <div className="absolute -top-16 left-2/4 -translate-x-1/2 w-[176%] h-[110%] z-0 filter drop-shadow-2xl">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="blob-gradient" x1="0" x2="1" y1="0" y2="1">
                <stop offset="30%" stopColor="#6366f1" /> 
                <stop offset="50%" stopColor="#4f46e5" /> 
                <stop offset="100%" stopColor="#4338ca" /> 
              </linearGradient>
            </defs>
            <path
              fill="url(#blob-gradient)"
              d="M60.5,-36.4C68.4,-21.3,57.9,3,44.7,25.2C31.5,47.5,15.8,67.6,-0.6,67.9C-16.9,68.2,-33.7,48.7,-47.3,26.3C-61,3.8,-71.3,-21.7,-62.8,-37.1C-54.4,-52.5,-27.2,-57.9,-0.4,-57.7C26.3,-57.4,52.7,-51.5,60.5,-36.4Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        {/* Image */}
        <div className="relative flex items-center justify-center z-10">
          <Image
            src="/prop-404.png"
            alt="404"
            width={250} // default size
            height={250} // keep aspect ratio
            className="object-contain w-auto h-auto filter drop-shadow-xl"
            loading="eager"
          />
        </div>
      </div>

      {/* Text + Button */}
      <div className="max-w-[400px]">
        <h1 className="font-bold mb-4 text-gray-900 text-2xl sm:text-xl">
          Oops! This page doesn&apos;t exist
        </h1>
        <p className="mb-4 text-gray-500 text-base sm:text-sm">
          The page you are looking for doesn’t exist. You may have mistyped the
          address or the page has been moved.
        </p>
        <Link href="/">
          <button
            className="
  font-semibold 
  text-white 
  bg-linear-to-r from-indigo-500 via-indigo-600 to-indigo-700 
  hover:from-indigo-600 hover:via-indigo-700 hover:to-indigo-800 
  shadow-lg 
  hover:shadow-xl 
  transform hover:-translate-y-1 
  transition-all duration-300 ease-in-out 
  rounded-full 
  px-6 py-3 sm:px-4 sm:py-2
"
          >
            Go to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
