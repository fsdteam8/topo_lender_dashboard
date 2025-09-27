import React from "react";
import BookingsTable from "./_components/bookings-table";
import { auth } from "@/auth";
import PaymentFilter from "./_components/payment-filter";
import PaymentHeader from "./_components/payment-header";

const page = async () => {
  const cu = await auth();
  const token = cu?.user?.accessToken;

  return (
    <div className="p-10 space-y-8">
      <PaymentHeader />
      <PaymentFilter />
      <BookingsTable token={token as string} />
    </div>
  );
};

export default page;
