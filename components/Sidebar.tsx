import React from 'react';
import Link from 'next/link';
import {
  FiHome, FiCheckSquare, FiUploadCloud, FiUsers, FiCpu,
  FiTarget, FiBarChart2, FiSettings, FiMessageSquare
} from 'react-icons/fi';
import Badge from './ui/Badge'; // Assuming Badge component exists

const navItems = [
  { name: 'Home', icon: FiHome, href: '/', active: true },
  { name: 'Stages & Checklist', icon: FiCheckSquare, href: '#' },
  { name: 'Upload Docs', icon: FiUploadCloud, href: '#' },
  { name: 'Preferred Vendors', icon: FiUsers, href: '#' },
  { name: 'Tech Stack', icon: FiCpu, href: '#' },
  { name: 'Targets', icon: FiTarget, href: '#' },
  { name: 'Zee Sales Targets', icon: FiBarChart2, href: '#' },
  { name: 'MAI Settings', icon: FiSettings, href: '#' },
  { name: 'Pending Questions', icon: FiMessageSquare, href: '#', count: 3 },
];

const Sidebar: React.FC = () => {
  return (
    <div
      className="fixed top-0 left-0 h-screen w-64 flex flex-col text-white pt-5"
      style={{ backgroundColor: '#11455D' }}
    >
      <nav className="flex-grow px-4 overflow-y-auto">
        <ul>
          {navItems.map((item) => (
            <li key={item.name} className="mb-2">
              <Link
                href={item.href}
                className={`group flex items-center rounded-md py-2.5 px-4 transition-colors duration-200 ${
                  item.active ? 'bg-white/10' : 'hover:bg-white/10'
                }`}
              >
                <item.icon className="mr-3 h-5 w-5 flex-shrink-0 text-white" aria-hidden="true" />
                <span className="flex-grow font-normal">{item.name}</span>
                {item.count && (
                  <Badge color="info" size="sm">{item.count}</Badge>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout Section (kept) */}
      <div className="mt-auto border-t border-white/30 p-4">
        <button className="group flex w-full items-center rounded-md py-2 px-4 transition-colors duration-200 hover:bg-white/10">
          <span className="flex-grow text-left font-normal">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
