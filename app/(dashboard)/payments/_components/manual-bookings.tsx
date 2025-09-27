import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import React from "react";
import DateRange from "./date-range";
import DressName from "./dress-name";
import Description from "./description";
import { Button } from "@/components/ui/button";

const ManualBookings = () => {
  return (
    <div>
      <DialogContent className="lg:max-w-[800px]">
        <DialogHeader className="mb-4">
          <DialogTitle className="text-xl">Manual Booking</DialogTitle>
        </DialogHeader>

        <form>
          <DressName />
          <DateRange />
          <Description />

          <div className="text-center mt-10">
            <Button>Sync to calendar</Button>
          </div>
        </form>
      </DialogContent>
    </div>
  );
};

export default ManualBookings;
