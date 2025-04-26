import React from 'react';
import Image from 'next/image';
import { FiSettings, FiBell } from 'react-icons/fi';

const DashboardHeader: React.FC = () => {
  return (
<div className="w-[1200px] mx-auto relative flex justify-end items-center h-16 px-6 bg-white shadow-sm sticky top-0 z-10">

      {/* Pink top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-highlight"></div>

      {/* Icons and User Info Container */}
      <div className="flex items-center space-x-6">

        {/* Icons Group */}
        <div className="flex items-center space-x-4">
          
          <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
            <FiSettings className="h-5 w-5" />
          </button>
        </div>

        {/* User Info Group */}
        <div className="flex items-center space-x-2">
          <Image
            src="/placeholder-avatar.png"
            alt="User Avatar"
            width={36}
            height={36}
            className="rounded-full border-2 border-gray-200"
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
