import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const BottomHeader = () => {
  return (
    <div className=" bg-gray-800 text-gray-300 flex flex-wrap items-center justify-between px-4 py-3 shadow-md mt-16 w-full">
      <div className="flex items-center space-x-3">
        <i className="fa-solid fa-bars hover:text-gray-200"></i>
        <a href="#services" className="text-sm hover:text-gray-200">Services</a>
        <a href="#portfolio" className="text-sm hover:text-gray-200">Portfolio</a>
        <a href="#blog" className="text-sm hover:text-gray-200">Blog</a>
        <a href="#community" className="text-sm hover:text-gray-200">Community</a>
        <a href="#reference" className="text-sm hover:text-gray-200">Reference</a>
      </div>
      
      <div className="flex items-center space-x-4">
        <select className="text-sm border-0 px-2 py-1 bg-gray-700 text-white rounded-md">
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="fr">Français</option>
        </select>
        <a href="#" className="hover:text-gray-200">
          <i className="fa-solid fa-search"></i>
        </a>
        {/* <a href="#" className="hover:text-gray-200">
          <i className="fa-solid fa-user"></i>
        </a> */}
         <a href="#" className="hover:text-gray-200">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
             <path d="M10 0C4.485 0 0 4.485 0 10c0 4.418 3.217 8.096 7.4 9.331.54.1.731-.234.731-.52 0-.256-.009-1.112-.014-2.02-2.999.65-3.629-1.444-3.629-1.444-.49-1.24-1.2-1.57-1.2-1.57-.983-.67.075-.656.075-.656 1.086.076 1.657 1.113 1.657 1.113 1.24 2.12 3.248 1.507 4.037 1.153.125-.897.487-1.507.88-1.853-2.225-.252-4.56-1.113-4.56-4.947 0-1.094.39-1.989 1.029-2.688-.104-.253-.446-1.273.1-2.652 0 0 .84-.269 2.75 1.022.798-.222 1.658-.332 2.51-.336.851.004 1.711.114 2.51.336 1.91-1.291 2.75-1.022 2.75-1.022.546 1.379.203 2.399.1 2.652.641.699 1.029 1.594 1.029 2.688 0 3.846-2.344 4.69-4.571 4.946.5.43.942 1.285.942 2.597 0 1.874-.017 3.38-.017 3.84 0 .289.188.625.736.52C16.783 18.096 20 14.418 20 10c0-5.515-4.485-10-10-10z" />
           </svg>
        </a>
        <a href="#" className="hover:text-gray-200">
          <i className="fa-solid fa-code"></i>
        </a>
      </div>
    </div>
  );
};

export default BottomHeader;


