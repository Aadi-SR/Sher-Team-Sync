import React from 'react';
import { Outlet } from 'react-router';
import AsideNav from '../../features/dashboard/ui/components/AsideNav';
import TopNav from '../../features/dashboard/ui/components/TopNav';

const DashboardLayout = () => {
  return (
    <div className="flex h-screen w-full bg-[var(--background)] text-[var(--on-background)] overflow-hidden transition-colors duration-300">
      <AsideNav />
      <div className="flex flex-1 flex-col overflow-hidden">
        <TopNav />
        <main className="flex-1 overflow-y-auto p-6 bg-[var(--background)]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;