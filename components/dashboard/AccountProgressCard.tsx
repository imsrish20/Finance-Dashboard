"use client";
import React from 'react';
import Card from '../ui/Card';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { FiCheckCircle, FiCircle } from 'react-icons/fi'; // Using FiCircle for pending

const AccountProgressCard: React.FC = () => {
  const percentage = 85;
  const completedSteps = [
    { name: 'Profile Setup', completed: true },
    { name: 'Initial Training', completed: true },
    { name: 'Legal Documents', completed: true },
  ];
  const remainingSteps = [
    { name: 'Financial Integration', completed: false },
    { name: 'Final Review', completed: false },
  ];

  return (
    <Card title="Account Progress">
      <div className="flex flex-col items-center mb-6">
        <div className="w-32 h-32">
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
              textColor: '#1F2937', // text-gray-800
              pathColor: '#3B82F6', // primary color (blue-500)
              trailColor: '#E5E7EB', // gray-200
            })}
          />
        </div>
      </div>

      <div>
        <h3 className="text-md font-medium text-gray-600 mb-3">Steps Completed</h3>
        <ul>
          {completedSteps.map((step) => (
            <li key={step.name} className="flex items-center justify-between text-sm text-gray-700 mb-2">
              <span>{step.name}</span>
              <FiCheckCircle className="h-5 w-5 text-green-500" />
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h3 className="text-md font-medium text-gray-600 mb-3">Steps Remaining</h3>
        <ul>
          {remainingSteps.map((step) => (
             <li key={step.name} className="flex items-center justify-between text-sm text-gray-500 mb-2">
               <span>{step.name}</span>
               {/* Using FiCircle for pending visual, you can customize */}
               <FiCircle className="h-5 w-5 text-gray-300" />
             </li>
          ))}
        </ul>
      </div>
       {/* JSN Placeholder */}
       <div className="absolute bottom-2 right-2">
           <span className="text-xs font-bold text-white bg-pink-500 px-2 py-1 rounded">jsn</span>
       </div>
    </Card>
  );
};

export default AccountProgressCard;