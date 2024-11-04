'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className='p-6'>
      <h1 className='text-3xl font-bold mb-4'>Settings</h1>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value='profile'>User Profile</TabsTrigger>
          <TabsTrigger value='billing'>Billing Details</TabsTrigger>
        </TabsList>
        <TabsContent value='profile'>
          <h2 className='text-2xl font-semibold mb-2'>User Profile</h2>
          <p>Manage your user profile settings here.</p>
        </TabsContent>
        <TabsContent value='billing'>
          <h2 className='text-2xl font-semibold mb-2'>Billing Details</h2>
          <p>Manage your billing information and subscription details here.</p>
        </TabsContent>
      </Tabs>
    </div>
  );
}
