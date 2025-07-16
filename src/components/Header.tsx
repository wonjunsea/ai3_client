import React from 'react';
import { SearchIcon, BellIcon, UserIcon } from 'lucide-react';
export const Header = () => {
  return <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="flex items-center justify-between px-6 py-3">
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-blue-700">주식 인사이트 AI</h1>
        </div>
        <div className="flex items-center space-x-6">
          <div className="relative">
            <input type="text" placeholder="검색..." className="py-2 pl-10 pr-4 text-sm border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <SearchIcon className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          </div>
          <button className="p-2 text-gray-500 hover:text-blue-600">
            <BellIcon className="h-5 w-5" />
          </button>
          <div className="flex items-center">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white">
              <UserIcon className="h-5 w-5" />
            </div>
          </div>
        </div>
      </div>
    </header>;
};