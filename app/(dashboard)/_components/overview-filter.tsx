import { ChevronDown } from "lucide-react";
import React from "react";

const OverviewFilter = () => {
  return (
    <div className="flex justify-end items-center mb-8">
      <button className="px-4 py-2 bg-[#891d33] text-white rounded-md flex items-center">
        Monthly
        <ChevronDown className="ml-2 h-4 w-4" />
      </button>
    </div>
  );
};

export default OverviewFilter;
