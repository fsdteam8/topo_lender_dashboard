import { StatCard } from "@/components/ui/stat-card";
import React from "react";

const States = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      <StatCard
        title="Total Revenue"
        value="$000"
        className="bg-[#891d33] text-white"
      />
      <StatCard title="Total Rental" value="$00" />
      <StatCard title="Active Booking" value="$00" />
    </div>
  );
};

export default States;
