'use client';

import React from 'react';
import {
  Bell,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Home,
  LineChart,
  Search,
  Settings,
  Users,
  Database,
  Tag,
  Zap,
  FileText,
  Gauge,
  PlayCircle,
} from 'lucide-react';

type NavItemProps = {
  icon: React.ElementType;
  label: string;
  isOpen: boolean;
};

const NavItem: React.FC<NavItemProps> = ({ icon: Icon, label, isOpen }) => (
  <a
    href='#'
    className='flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100'
  >
    <Icon size={20} />
    <span
      className={`ml-4 text-sm transition-all duration-300 ${
        isOpen ? 'opacity-100 w-auto' : 'opacity-0 w-0 overflow-hidden'
      }`}
    >
      {label}
    </span>
  </a>
);

export interface SidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

export default function Sidebar({
  isSidebarOpen,
  toggleSidebar,
}: SidebarProps) {
  return (
    <div
      className={`bg-white shadow-lg transition-all duration-300 ${
        isSidebarOpen ? 'w-64' : 'w-20'
      } flex flex-col fixed h-full overflow-hidden`}
    >
      <div className='flex items-center justify-between p-4 border-b'>
        <h1
          className={`text-xl font-bold transition-opacity duration-300 ${
            isSidebarOpen ? 'opacity-100' : 'opacity-0 w-0 overflow-hidden'
          }`}
        >
          EduTech
        </h1>
        <button
          onClick={toggleSidebar}
          className='p-2 rounded-full hover:bg-gray-200 absolute right-2 top-4'
        >
          {isSidebarOpen ? (
            <ChevronLeft size={24} />
          ) : (
            <ChevronRight size={24} />
          )}
        </button>
      </div>
      <div className='p-4'>
        <div className='flex items-center bg-gray-100 rounded-md'>
          <Search className='ml-3 text-gray-400' size={20} />
          <input
            type='text'
            placeholder='Search...'
            className={`w-full p-2 bg-transparent focus:outline-none transition-all duration-300 ${
              isSidebarOpen ? 'opacity-100 w-full' : 'opacity-0 w-0'
            }`}
          />
        </div>
      </div>
      <nav className='mt-2 flex-grow'>
        <NavItem icon={Zap} label='Fine-Tune' isOpen={isSidebarOpen} />
        <NavItem icon={Database} label='Datasets' isOpen={isSidebarOpen} />
        <NavItem icon={Tag} label='Tags' isOpen={isSidebarOpen} />
      </nav>
      <div className='p-4'>
        <div
          className={`flex space-x-2 ${
            isSidebarOpen ? 'justify-start' : 'justify-center'
          }`}
        >
          <button className='px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-md'>
            Requests
          </button>
          {isSidebarOpen && (
            <button className='px-3 py-1 text-sm text-gray-600 rounded-md transition-opacity duration-300'>
              Traces
            </button>
          )}
        </div>
      </div>
      {isSidebarOpen && (
        <div className='p-4'>
          <p className='text-sm text-gray-500 transition-opacity duration-300'>
            No requests found
          </p>
        </div>
      )}
      {isSidebarOpen && (
        <div className='p-4'>
          <button className='w-full px-3 py-2 text-sm text-blue-600 bg-blue-50 rounded-md text-left transition-all duration-300'>
            Click here to turn off the default date range limit
          </button>
        </div>
      )}
    </div>
  );
}
