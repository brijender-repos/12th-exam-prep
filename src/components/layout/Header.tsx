'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import {
  Bell,
  Home,
  FileText,
  Gauge,
  LineChart,
  PlayCircle,
  Settings,
  Users,
} from 'lucide-react';
import LoginHeaderButton from '../auth/LoginHeaderButton';

export default function Header() {
  return (
    <header className='bg-white shadow-sm z-10'>
      <div className='max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center'>
        <div className='flex items-center space-x-4'>
          <button className='px-3 py-2 bg-gray-100 rounded-md text-sm font-medium flex items-center'>
            <Users className='mr-2' size={16} />
            Personal
          </button>
          <button className='px-3 py-2 bg-gray-200 rounded-md text-sm font-medium flex items-center'>
            <Home className='mr-2' size={16} />
            Home
          </button>
          <button className='px-3 py-2 rounded-md text-sm font-medium flex items-center'>
            <FileText className='mr-2' size={16} />
            Registry
          </button>
          <button className='px-3 py-2 rounded-md text-sm font-medium flex items-center'>
            <Gauge className='mr-2' size={16} />
            Evaluate
          </button>
          <button className='px-3 py-2 rounded-md text-sm font-medium flex items-center'>
            <LineChart className='mr-2' size={16} />
            Analytics
          </button>
          <button className='px-3 py-2 rounded-md text-sm font-medium flex items-center'>
            <PlayCircle className='mr-2' size={16} />
            Playground
          </button>
        </div>
        <div className='flex items-center space-x-4'>
          <button className='p-2 rounded-full bg-gray-200 hover:bg-gray-300'>
            <Bell size={20} className='text-gray-600' />
          </button>
          <button className='p-2 rounded-full bg-gray-200 hover:bg-gray-300'>
            <Settings size={20} className='text-gray-600' />
          </button>

          <LoginHeaderButton />
        </div>
      </div>
    </header>
  );
}
