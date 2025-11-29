import React from "react";
import { BookingDetails } from "./about-booking";
import { Box, Check, FileText, Truck, Undo2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  bookingDetails: {
    deliveryMethod?: string;
  };
}

const ShippingStatus = ({ bookingDetails }: Props) => {
  return (
    <div className="flex w-full gap-8">
      {/* order confirmed */}
      <div className="w-full">
        <div className="flex items-center  gap-8">
          <div className="p-5 rounded-full bg-white flex flex-col justify-center items-center">
            <Check className="h-8 w-8 font-bold" />
          </div>

          <div className="h-2 w-full bg-primary rounded-3xl"></div>
        </div>

        <h3 className="font-medium my-3">Order Confirmed</h3>

        <Button>Fulfil Order</Button>
      </div>

      {/* fulfil order */}
      <div className="w-full">
        <div className="flex items-center  gap-8">
          <div className="p-5 rounded-full bg-white flex flex-col justify-center items-center">
            <FileText className="h-8 w-8 font-bold" />
          </div>

          <div className="h-2 w-full bg-primary rounded-3xl"></div>
        </div>

        <h3 className="font-medium my-3">Label Ready</h3>

        <Button
          variant={"outline"}
          className="border border-primary text-primary hover:text-primary"
        >
          Fulfil Order
        </Button>
      </div>

      {/* dress shipped */}
      <div className="w-full">
        <div className="flex items-center  gap-8">
          <div className="p-5 rounded-full bg-white flex flex-col justify-center items-center">
            <Truck className="h-8 w-8 font-bold" />
          </div>

          <div className="h-2 w-full bg-primary rounded-3xl"></div>
        </div>

        <h3 className="font-medium my-3">Dress Shipped</h3>

        <Button
          variant={"outline"}
          className="border border-primary text-primary hover:text-primary"
        >
          Mark as Shipped
        </Button>
      </div>

      {/* return due */}
      <div className="w-full">
        <div className="flex items-center  gap-8">
          <div className="p-5 rounded-full bg-white flex flex-col justify-center items-center">
            <Undo2 className="h-8 w-8 font-bold" />
          </div>

          <div className="h-2 w-full bg-primary rounded-3xl"></div>
        </div>

        <h3 className="font-medium my-3">Return Due</h3>

        <Button
          variant={"outline"}
          className="border border-primary text-primary hover:text-primary"
        >
          Mark as Returned
        </Button>
      </div>

      {/* dress returned */}
      <div>
        <div className="flex items-center  gap-8">
          <div className="p-5 rounded-full bg-white flex flex-col justify-center items-center">
            <Box className="h-8 w-8 font-bold" />
          </div>

          <div className="h-2 w-full bg-primary rounded-3xl hidden"></div>
        </div>

        <h3 className="font-medium my-3">Dress Returned</h3>

        <Button
          variant={"outline"}
          className="border border-primary text-primary hover:text-primary"
        >
          Escalate Dispute
        </Button>
      </div>
    </div>
  );
};

export default ShippingStatus;
