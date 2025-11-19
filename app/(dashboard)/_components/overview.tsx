import React from "react";
import OverviewFilter from "./overview-filter";
import States from "./states";
import LiveListings from "./live-listings";
import Calendar from "./calendar";
import UpcomingOrder from "./upcoming-order";

const Overview = () => {
  return (
    <div>
      <OverviewFilter />

      <div>
        <States />
      </div>

      {/* Live Listings Section */}
      <div>
        <LiveListings />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Calendar Section */}
        <Calendar />

        {/* Upcoming Orders Section */}
        <UpcomingOrder />
      </div>
    </div>
  );
};

export default Overview;
