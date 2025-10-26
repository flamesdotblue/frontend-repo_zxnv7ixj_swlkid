import React from 'react';

const cards = [
  {
    id: 1,
    title: 'Sushi Master',
    subtitle: '20–30 min • Free delivery',
    img: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Pizza Mia',
    subtitle: '15–25 min • $5 delivery',
    img: 'https://images.unsplash.com/photo-1548365328-9f547fb0953d?q=80&w=1200&auto=format&fit=crop',
  },
];

const FeaturedCarousel = () => {
  return (
    <div className="mt-4">
      <div className="flex items-center justify-between px-4">
        <h2 className="text-base font-semibold text-gray-900">Featured</h2>
        <button className="text-sm text-orange-500 font-medium">See all</button>
      </div>
      <div className="mt-3 px-4 overflow-x-auto">
        <div className="flex gap-4 pr-4">
          {cards.map((c) => (
            <div
              key={c.id}
              className="min-w-[260px] rounded-2xl bg-white shadow-md overflow-hidden"
            >
              <div className="h-36 w-full overflow-hidden">
                <img src={c.img} alt={c.title} className="h-full w-full object-cover" />
              </div>
              <div className="p-3">
                <p className="text-sm font-semibold text-gray-900">{c.title}</p>
                <p className="text-xs text-gray-500">{c.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCarousel;
