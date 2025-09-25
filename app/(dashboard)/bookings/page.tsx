import React from "react";
import BookingsHeader from "./_components/bookings-header";
import BookingsTable from "./_components/bookings-table";
import BookingsCalender from "./_components/bookings-calender";
import { auth } from "@/auth";

const page = async () => {
  const cu = await auth();
  const token = cu?.user?.accessToken;

  return (
    <div className="p-10 space-y-8">
      <BookingsHeader />
      <BookingsCalender />
      <BookingsTable token={token as string} />
    </div>
  );
};

export default page;
