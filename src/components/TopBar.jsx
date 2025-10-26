import React from 'react';
import { MapPin, Bell, Search as SearchIcon } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="px-4 pt-4 pb-3 bg-white sticky top-0 z-20">
      {/* Status bar spacer (simulates iOS safe area) */}
      <div className="h-3" />

      {/* Header */}
      <div className="flex items-center justify-center mb-3">
        <span className="text-orange-500 text-sm font-medium tracking-wide">Foodiez</span>
      </div>

      {/* Location + Notification */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-full bg-orange-50 text-orange-500">
            <MapPin size={16} />
          </div>
          <div className="leading-tight">
            <p className="text-[10px] text-gray-400">Deliver to</p>
            <p className="text-sm font-medium text-gray-900">Los Angeles</p>
          </div>
        </div>
        <button aria-label="Notifications" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200">
          <Bell size={18} />
        </button>
      </div>

      {/* Search bar */}
      <div className="mt-3">
        <div className="flex items-center gap-2 bg-gray-100 rounded-full px-3 py-2">
          <SearchIcon size={16} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search restaurants or dishes..."
            className="w-full bg-transparent text-sm focus:outline-none placeholder:text-gray-500"
          />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
