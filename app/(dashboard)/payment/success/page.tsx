import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="min-h-[calc(100vh-100px)] flex flex-col items-center justify-center ">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Payment Successful!
      </h1>

      <p className="text-xl text-gray-600 mb-8">
        Thank you for your order. Your payment has been processed successfully.
      </p>

      <Link href={`/bookings`}>
        <Button>Back to bookings</Button>
      </Link>
    </div>
  );
};

export default page;
