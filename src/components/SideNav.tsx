import React from 'react';
import { LayoutDashboardIcon, TrendingUpIcon, PieChartIcon, HeartIcon, SettingsIcon, HelpCircleIcon } from 'lucide-react';
interface SideNavProps {
  activePage: string;
  setActivePage: (page: string) => void;
}
export const SideNav = ({
  activePage,
  setActivePage
}: SideNavProps) => {
  const navItems = [{
    id: 'dashboard',
    label: '대시보드',
    icon: <LayoutDashboardIcon className="h-5 w-5" />
  }, {
    id: 'analysis',
    label: '주식 분석',
    icon: <TrendingUpIcon className="h-5 w-5" />
  }, {
    id: 'reports',
    label: '리포트',
    icon: <PieChartIcon className="h-5 w-5" />
  }, {
    id: 'sentiment',
    label: '감정 분석',
    icon: <HeartIcon className="h-5 w-5" />
  }, {
    id: 'settings',
    label: '설정',
    icon: <SettingsIcon className="h-5 w-5" />
  }, {
    id: 'help',
    label: '도움말',
    icon: <HelpCircleIcon className="h-5 w-5" />
  }];
  return <nav className="w-64 bg-white border-r border-gray-200 py-5 px-3">
      {navItems.map(item => <button key={item.id} onClick={() => setActivePage(item.id)} className={`flex items-center w-full px-4 py-2.5 mb-1 rounded-lg text-left ${activePage === item.id ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-100'}`}>
          <span className="mr-3">{item.icon}</span>
          <span className="font-medium">{item.label}</span>
        </button>)}
    </nav>;
};