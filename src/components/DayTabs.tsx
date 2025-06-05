// src/components/DayTabs.tsx
import React from "react";

interface DayTabsProps {
  days: string[];
  activeIndex: number;
  onTabClick: (index: number) => void;
}

export const DayTabs: React.FC<DayTabsProps> = ({
  days,
  activeIndex,
  onTabClick,
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {days.map((day, idx) => (
        <button
          key={idx}
          onClick={() => onTabClick(idx)}
          className={`px-4 py-2 rounded-md text-sm md:text-base font-medium transition-all 
            ${
              activeIndex === idx
                ? "bg-[#a39a92] text-white font-semibold"
                : "bg-white border border-gray-300 text-[#6d635b] hover:bg-gray-100"
            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#a39a92]`}
        >
          {day}
        </button>
      ))}
    </div>
  );
};
