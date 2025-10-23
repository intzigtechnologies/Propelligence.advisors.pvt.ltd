"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"; // npm install framer-motion

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center gap-8 px-4">
      {/* Image container */}
      <div className="relative w-50 sm:w-1/5 aspect-square max-w-[400px] min-w-[200px]">
        {/* Circular decorative graphic */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[110%] h-[110%] rounded-full bg-linear-to-br from-indigo-600 to-purple-300 z-0" />

        {/* Animated image */}
        <motion.div
          animate={{ y: [0, -10, 0, 0, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative flex items-center justify-center z-10"
        >
          <Image
            src="/prop-404.png"
            alt="404"
            width={250} // default size
            height={250} // keep aspect ratio
            className="object-contain w-auto h-auto"
            loading="eager"
          />
        </motion.div>
      </div>

      {/* Text + Button */}
      <div className="max-w-[400px]">
        <h1 className="font-bold mb-4 text-gray-900 text-2xl sm:text-xl">
          Oops! Page not found
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
