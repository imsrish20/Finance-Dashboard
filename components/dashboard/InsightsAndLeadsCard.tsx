// components/dashboard/InsightsAndLeadsCard.tsx
import React from 'react';
import Card from '../ui/Card'; // Adjust path if needed
import Badge from '../ui/Badge'; // Adjust path if needed
import Image from 'next/image';
import { FiInfo } from 'react-icons/fi';

// Data for Leads section (copied from ProspectLeadsCard)
const leads = [
    // IMPORTANT: Replace placeholders with actual paths from your public folder
  { name: 'Wade Warren', stage: 'Initial Inquiry', avatar: '/placeholder-avatar2.png' },
  { name: 'Ava Wright', stage: 'Initial Inquiry', avatar: '/placeholder-avatar3.png' },
  { name: 'Cody Fisher', stage: 'Initial Inquiry', avatar: '/placeholder-avatar4.png' },
];

const InsightsAndLeadsCard: React.FC<{ className?: string }> = ({ className }) => {
  return (
    // Use the Card component as the main wrapper
    <Card title="Insights & Leads" className={className}> {/* Pass down className */}

      {/* --- Key Insights Section (Top Part) --- */}
      <div> {/* Wrapper for Insights content */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-3xl font-bold text-gray-800">10%</p>
            <p className="text-sm text-gray-500">Sales Growth</p>
          </div>
          <div className="text-center">
             <Image
                // IMPORTANT: Replace with actual Top Performer logo/icon path
                src="/image copy.png"
                alt="Top Performer"
                width={40}
                height={40}
                className="mx-auto mb-1" // Removed rounded/border styling, assuming SVG is styled
            />
            <Badge color="info" size="sm">Top Performer</Badge>
          </div>
        </div>

        <div className="bg-gray-50 rounded-md p-3 mt-4">
            <h3 className="text-md font-medium text-gray-700 mb-2">Feedback</h3>
            <div className="flex items-start text-sm text-gray-600">
            <FiInfo className="h-4 w-4 mr-2 mt-0.5 text-blue-500 flex-shrink-0"/>
            <span>Franchisees are requesting more detailed training materials.</span>
            </div>
        </div>
      </div>
      {/* --- End Key Insights Section --- */}


      {/* --- Separator --- */}
      <hr className="my-6 border-gray-200 mt-[55px]" /> {/* Added margin top/bottom */}
      {/* --- End Separator --- */}


      {/* --- Prospect Leads Section (Bottom Part) --- */}
      <div> {/* Wrapper for Leads content */}
        <h3 className="text-md font-semibold text-gray-700 mb-4">Prospect Leads</h3> {/* Added heading */}
        <div className="space-y-4">
          {leads.map((lead) => (
            <div key={lead.name} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Image
                  src={lead.avatar} // Use avatar path from leads data
                  alt={lead.name}
                  width={36}
                  height={36}
                  className="rounded-full"
                />
                <div>
                  <p className="text-sm font-medium text-gray-800">{lead.name}</p>
                </div>
              </div>
              <div className="text-right">
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">Stage: {lead.stage}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* --- End Prospect Leads Section --- */}

    </Card>
  );
};

export default InsightsAndLeadsCard;