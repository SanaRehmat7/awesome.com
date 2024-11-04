// import React from 'react'
// import { Link } from 'react-router-dom';
// import '@fortawesome/fontawesome-free/css/all.min.css';

// const TopHeader = () => {
//     return (          
//     <div className="fixed top-0 w-full bg-gray-900 text-white flex items-center justify-between px-6 py-3 shadow-lg z-50">
//     <div className="flex items-center justify-start space-x-3">
//                        {/* Logo */}
//     <img 
//     src="https://media.istockphoto.com/id/497149682/photo/gold-alphabet-letter-s.jpg?s=612x612&w=0&k=20&c=YtegMnBTsAvIC2qZAeZHPTSBIKALRPt4xiGBohEiyqY=" 
//     alt="Logo" 
//     className="h-10 w-10 object-contain shadow-black"
//     />
//     </div>

//     <span className="text-lg font-semibold text-gray-100 cursor-pointer hover:text-gray-400 mx-auto shadow-gray-400">
//     awesome.com
//     </span>
    
//     <Link to="/about">
//     <div className="hidden md:flex space-x-6 mr-4">
//     <a href="#about" className="text-sm text-gray-200 hover:text-gray-400">About</a>
//     </div>
//     </Link>

//     <Link to="/contact">
//     <div className="hidden md:flex space-x-6 mr-4">
//     <a href="#contact" className="text-sm text-gray-200 hover:text-gray-400">Contact</a>
//     </div>
//     </Link>
    
//     <Link to="/help">
//     <div className="hidden md:flex space-x-6 mr-4">
//     <a href="#contact" className="text-sm text-gray-200 hover:text-gray-400">Help</a>
//     </div>
//     </Link>
// {/* Mobile Menu Button */}
//    <div className="md:hidden flex items-center">
//     <button className="text-gray-200 hover:text-gray-400">
//     {/* Icon for mobile menu */}
//       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
//     </svg>
//   </button>
// </div>
// </div>

//  );
// }
 
// export default TopHeader;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

const TopHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu toggle

  return (
    <div className="fixed top-0 w-full bg-gray-900 text-white flex items-center justify-between px-6 py-3 shadow-lg z-50">
      <div className="flex items-center justify-start space-x-3">
        {/* Logo */}
        <img 
          src="https://media.istockphoto.com/id/497149682/photo/gold-alphabet-letter-s.jpg?s=612x612&w=0&k=20&c=YtegMnBTsAvIC2qZAeZHPTSBIKALRPt4xiGBohEiyqY=" 
          alt="Logo" 
          className="h-10 w-10 object-contain shadow-black"
        />
      </div>

      <span className="text-lg font-semibold text-gray-100 cursor-pointer hover:text-gray-400 mx-auto shadow-gray-400">
        awesome.com
      </span>

      {/* Links for larger screens */}
      <div className="hidden md:flex space-x-6 mr-4">
        <Link to="/about" className="text-sm text-gray-200 hover:text-gray-400">About</Link>
        <Link to="/contact" className="text-sm text-gray-200 hover:text-gray-400">Contact</Link>
        <Link to="/help" className="text-sm text-gray-200 hover:text-gray-400">Help</Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-200 hover:text-gray-400">
          {/* Icon for mobile menu */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col space-y-2 mt-2 absolute bg-gray-800 p-4 rounded shadow-lg z-50">
          <Link to="/about" className="text-sm text-gray-200 hover:text-gray-400">About</Link>
          <Link to="/contact" className="text-sm text-gray-200 hover:text-gray-400">Contact</Link>
          <Link to="/help" className="text-sm text-gray-200 hover:text-gray-400">Help</Link>
        </div>
      )}
    </div>
  );
};

export default TopHeader;
