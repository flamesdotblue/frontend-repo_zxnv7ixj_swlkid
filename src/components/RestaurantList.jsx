import React from 'react';
import { Star, Heart } from 'lucide-react';

const restaurants = [
  {
    id: 1,
    name: 'Burger Zone',
    cuisine: 'Burgers',
    time: '20–25 min',
    rating: 4.7,
    fee: '$5 delivery',
    promo: '10% Off Today!',
    img: 'https://images.unsplash.com/photo-1551782450-17144c3a8f59?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Pasta Palace',
    cuisine: 'Italian',
    time: '25–35 min',
    rating: 4.5,
    fee: 'Free delivery',
    promo: null,
    img: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Taco Street',
    cuisine: 'Mexican',
    time: '15–20 min',
    rating: 4.8,
    fee: '$3 delivery',
    promo: 'BOGO Tacos',
    img: 'https://images.unsplash.com/photo-1600891963938-a7c73e2c9a9d?q=80&w=1200&auto=format&fit=crop',
  },
];

const RestaurantCard = ({ r }) => (
  <div className="flex items-start justify-between px-4 py-3">
    <div className="flex items-start gap-3">
      <img src={r.img} alt={r.name} className="w-16 h-16 rounded-xl object-cover" />
      <div>
        <p className="text-sm font-semibold text-gray-900">{r.name}</p>
        <p className="text-xs text-gray-500 italic">{r.cuisine} • {r.time}</p>
        <div className="flex items-center gap-1 mt-1">
          <Star size={14} className="text-yellow-500 fill-yellow-500" />
          <span className="text-xs font-medium text-gray-700">{r.rating}</span>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-xs text-gray-600">{r.fee}</span>
          {r.promo && (
            <span className="text-[10px] font-semibold text-orange-600 bg-orange-50 px-2 py-1 rounded-full">{r.promo}</span>
          )}
        </div>
      </div>
    </div>
    <button aria-label="Favorite" className="p-2 text-gray-500">
      <Heart size={18} />
    </button>
  </div>
);

const RestaurantList = () => {
  return (
    <div className="mt-2 divide-y divide-gray-100 bg-white">
      {restaurants.map((r) => (
        <RestaurantCard key={r.id} r={r} />)
      )}
    </div>
  );
};

export default RestaurantList;
