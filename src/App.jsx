import React from 'react';
import TopBar from './components/TopBar';
import FeaturedCarousel from './components/FeaturedCarousel';
import FiltersRow from './components/FiltersRow';
import RestaurantList from './components/RestaurantList';
import { Home, Search, Receipt, User } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Top area: status, header, location, search */}
      <TopBar />

      {/* Content */}
      <main className="pb-24">
        <FeaturedCarousel />
        <FiltersRow />
        <section className="mt-4">
          <h2 className="px-4 text-base font-semibold">Popular Nearby</h2>
          <RestaurantList />
        </section>
      </main>

      {/* Bottom navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100">
        <div className="max-w-md mx-auto px-6 py-2 flex items-end justify-between">
          <button className="flex flex-col items-center text-orange-500">
            <Home size={22} />
            <span className="text-xs font-medium mt-1">Home</span>
          </button>
          <button className="flex flex-col items-center text-gray-500">
            <Search size={22} />
            <span className="text-xs mt-1">Search</span>
          </button>
          <button className="flex flex-col items-center text-gray-500">
            <Receipt size={22} />
            <span className="text-xs mt-1">Orders</span>
          </button>
          <button className="flex flex-col items-center text-gray-500">
            <User size={22} />
            <span className="text-xs mt-1">Profile</span>
          </button>
        </div>
        <div className="h-3" />
      </nav>
    </div>
  );
}

export default App;
