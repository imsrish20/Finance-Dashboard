import React from 'react';
import Card from '../ui/Card';
import Badge from '../ui/Badge'; 
import Image from 'next/image';
import { FiArrowUpRight, FiTrendingUp } from 'react-icons/fi';

// Data for Onboarding section
const stages = [
  { name: 'Stage 1 (Initial Inquiry)', count: '02', color: 'bg-blue-500'},
  { name: 'Stage 2 (Document Submission)', count: '07', color: 'bg-sky-500' },
  { name: 'Stage 3 (Training)', count: '05', color: 'bg-teal-500' },
];
const totalOnboarded = 14;
const avatars = [
  '/placeholder-avatar2.png',
  '/placeholder-avatar3.png',
  '/placeholder-avatar4.png',
  '/placeholder-avatar5.png',
  '/placeholder-avatar1.png',
];

const totalFranchiseesWellbeing = 20;
const targetAmount = "$500,000";
const currentAmount = "$450,000";
const wellbeingGrowth = "2.1%";
const onboardingGrowth = "7.4%";


const FranchiseStatusCard: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <Card title="Franchisee Status" className={className}> 

      <div>
        <h3 className="text-md font-semibold text-gray-700 mb-3">Onboarding</h3> 
        <div className="flex items-center justify-between mb-4">
          <span className="text-4xl font-bold text-gray-800">{totalOnboarded}</span>
          <div className="flex items-center space-x-2">
              <Badge color="success" className="flex items-center">
                <FiArrowUpRight className="mr-1 h-4 w-4"/> {onboardingGrowth}
              </Badge>
              <div className="flex -space-x-2 overflow-hidden">
                  {avatars.map((src, index) => (
                      <Image key={index} className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src={src} alt={`Franchisee ${index + 1}`} width={32} height={32}/>
                  ))}
                  <div className="flex items-center justify-center h-8 w-8 rounded-full ring-2 ring-white bg-gray-200 text-xs font-medium text-gray-600">
                    +{Math.max(0, totalOnboarded - avatars.length)}
                  </div>
              </div>
          </div>
        </div>

        {/* Overall Progress Bar */}
        <div className="w-full h-2 rounded-full overflow-hidden flex mb-6 bg-gray-200">
          <div className="bg-blue-500 h-full" style={{ width: `${(parseInt(stages[0].count)/totalOnboarded)*100}%` }}></div> {/* Stage 1 */}
          <div className="bg-sky-500 h-full" style={{ width: `${(parseInt(stages[1].count)/totalOnboarded)*100}%` }}></div>    {/* Stage 2 */}
          <div className="bg-teal-500 h-full" style={{ width: `${(parseInt(stages[2].count)/totalOnboarded)*100}%` }}></div> {/* Stage 3 */}
        </div>

        <div className="space-y-3">
          {stages.map((stage) => (
            <div key={stage.name} className="flex items-center justify-between text-sm">
              <div className="flex items-center">
                <span className={`h-2.5 w-2.5 rounded-full mr-2 ${stage.color}`}></span>
                <span className={`${stage ? 'font-medium text-gray-800' : 'text-gray-600'}`}> 
                  {stage.name}
                </span>
              </div>
              <span className="font-semibold text-gray-800">{stage.count}</span>
            </div>
          ))}
        </div>
      </div>
      {/* --- End Onboard Section --- */}



      <hr className="my-6 border-gray-200" />



      {/* --- Financial Wellbeing Section (Bottom Part) --- */}
      <div>
        <h3 className="text-md font-semibold text-gray-700 mb-3">Financial Wellbeing</h3> {/* Subheading */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-3xl font-bold text-gray-800">{totalFranchiseesWellbeing}</p>
            <p className="text-sm text-gray-500">Total Franchisees</p>
          </div>
          <Badge color="success" className="flex items-center">
              <FiTrendingUp className="mr-1 h-4 w-4"/> {wellbeingGrowth}
          </Badge>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-100 rounded-lg p-4 text-center">
            <p className="text-sm text-gray-500 mb-1">Target</p>
            <p className="text-xl font-semibold text-gray-800">{targetAmount}</p>
          </div>
          <div className="bg-gray-100 rounded-lg p-4 text-center "> 
            <p className="text-sm text-gray-500 mb-1">Current</p>
            <p className="text-xl font-semibold text-gray-800">{currentAmount}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default FranchiseStatusCard;