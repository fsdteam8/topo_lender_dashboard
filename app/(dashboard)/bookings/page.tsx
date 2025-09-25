import React from "react";
import BookingsHeader from "./_components/bookings-header";
import BookingsTable from "./_components/bookings-table";

const page = () => {
  return (
    <div className="p-10">
      <BookingsHeader />
      <BookingsTable />
    </div>
  );
};

export default page;
