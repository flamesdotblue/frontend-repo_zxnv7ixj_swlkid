import React from 'react';
import { ChevronDown } from 'lucide-react';

const FilterChip = ({ label }) => (
  <button className="flex items-center gap-1 px-3 py-2 rounded-full bg-gray-100 text-gray-700 text-xs font-medium">
    <span>{label}</span>
    <ChevronDown size={14} />
  </button>
);

const FiltersRow = () => {
  return (
    <div className="px-4 mt-4 flex items-center gap-2 overflow-x-auto">
      <FilterChip label="Under 30 min" />
      <FilterChip label="All Types" />
      <FilterChip label="4+ stars" />
    </div>
  );
};

export default FiltersRow;
