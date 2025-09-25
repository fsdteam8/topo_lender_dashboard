import React from "react";
import BookingsHeader from "./_components/bookings-header";
import BookingsTable from "./_components/bookings-table";
import BookingsCalender from "./_components/bookings-calender";

const page = () => {
  return (
    <div className="p-10 space-y-8">
      <BookingsHeader />
      <BookingsCalender />
      <BookingsTable />
    </div>
  );
};

export default page;
