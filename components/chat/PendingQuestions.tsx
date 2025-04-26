import React from 'react';
import Image from 'next/image';
import Badge from '../ui/Badge';
import { FiChevronUp } from 'react-icons/fi'; 

const questions = [
  {
    name: 'Phoenix Baker',
    handle: '@phoenix',
    time: '5min ago',
    text: 'What are the requirements for opening a new store?',
    avatar: '/placeholder-avatar4.png',
    unread: true,
  },
  {
    name: 'Koray Okumus',
    handle: '@koray',
    time: '4hr ago',
    text: 'How do I manage inventory effectively?',
    avatar: '/placeholder-avatar5.png',
    unread: true,
  },
];

const PendingQuestions: React.FC = () => {
  return (
    <div className="bg-white rounded-t-lg shadow-md p-4 relative">
       <div className="flex justify-between items-center mb-4">
           <div className="flex items-center space-x-2">
                <h2 className="text-lg font-semibold text-gray-800">Pending Questions</h2>
                <Badge color="info">02</Badge>
           </div>
           <button className="p-1 rounded-full hover:bg-gray-100 text-gray-500">
               <FiChevronUp className="h-5 w-5" />
           </button>
       </div>

      <div className="space-y-4">
        {questions.map((q, index) => (
          <div key={index} className="flex items-start space-x-3">
             {q.unread && <span className="h-2 w-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></span>}
             {!q.unread && <span className="h-2 w-2 mt-1.5 flex-shrink-0"></span>} {/* Placeholder for alignment */}
            <Image
              src={q.avatar}
              alt={q.name}
              width={36}
              height={36}
              className="rounded-full"
            />
            <div className="flex-grow">
              <div className="flex items-baseline justify-between">
                <div>
                  <span className="text-sm font-medium text-gray-800">{q.name}</span>
                  <span className="text-xs text-gray-500 ml-1">{q.handle}</span>
                </div>
                <span className="text-xs text-gray-400">{q.time}</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">{q.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PendingQuestions;