import React, { useState } from 'react';//원준서
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { SideNav } from './components/SideNav';
export function App() {
  const [activePage, setActivePage] = useState('dashboard');
  return <div className="flex flex-col w-full min-h-screen bg-slate-50">
      <Header />
      <div className="flex flex-1">
        <SideNav activePage={activePage} setActivePage={setActivePage} />
        <main className="flex-1 p-4">
          <Dashboard />
        </main>
      </div>
    </div>;
}