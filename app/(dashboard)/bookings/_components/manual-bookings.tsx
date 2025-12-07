"use client";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import React, { useState } from "react";
import DateRange from "./date-range";
import DressName from "./dress-name";
import Description from "./description";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";

const ManualBookings = () => {
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [rentalDurationDays, setRentalDurationDays] = useState<number>(0);

  const session = useSession();
  const token = session?.data?.user?.accessToken;

  const { data: listingInfo } = useQuery({
    queryKey: ["lender-all-listing"],
    queryFn: () =>
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/lender`, {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => res.json()),
  });

  return (
    <div>
      <DialogContent className="lg:max-w-[800px]">
        <DialogHeader className="mb-4">
          <DialogTitle className="text-xl">Manual Booking</DialogTitle>
        </DialogHeader>

        <form>
          <DressName listingInfo={listingInfo} />
          <DateRange
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
            rentalDurationDays={rentalDurationDays}
            setRentalDurationDays={setRentalDurationDays}
          />
          <Description />

          <div className="text-center mt-10">
            <Button>Manual Booking</Button>
          </div>
        </form>
      </DialogContent>
    </div>
  );
};

export default ManualBookings;
