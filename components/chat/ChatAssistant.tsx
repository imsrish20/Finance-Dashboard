import React from 'react';
import Image from 'next/image'; // ✅ Import Image correctly
import { FiSend } from 'react-icons/fi';

const ChatAssistant: React.FC = () => {
  return (
    <div className="bg-white p-6 pt-10 flex flex-col items-center text-center h-full">
      {/* Assistant Logo */}
      <Image src="/image.png" width={64} height={64} alt="Assistant Logo" /> {/* ✅ Added alt */}

      {/* Title */}
      <h1 className="text-2xl font-semibold text-gray-800 mb-2">
        Welcome to the AI Chat Assistant
      </h1>

      {/* Description */}
      <p className="text-gray-500 mb-8">
        Ask anything about your franchise operations, get insights, or request reports.
      </p>

      {/* Input Area */}
      <div className="w-full max-w-lg relative">
        <input
          type="text"
          placeholder="Ask your question here..."
          className="w-full border border-gray-300 rounded-lg py-3 pl-4 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
        />
        <button
          type="button"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-gray-500 hover:text-blue-600"
        >
          <FiSend className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default ChatAssistant;
