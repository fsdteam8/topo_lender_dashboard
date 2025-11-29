"use client";
import React, { useState } from "react";
import { Box, Check, FileText, Truck, Undo2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import UpdateStatus from "./update-status";

interface Props {
  deliveryStatus?: string;
  token: string;
}

const ShippingStatus = ({ deliveryStatus, token }: Props) => {
  const [status, setStatus] = useState("");

  const params = useParams();
  const bookingId = params.id;

  return (
    <div className="flex w-full gap-8">
      {/* confirm order */}
      <UpdateStatus
        deliveryStatus={deliveryStatus as string}
        statusValue="Confirmed"
        IconName={Check}
        bookingId={bookingId as string}
        btnName="Fulfil Order"
        title="Order Confirmed"
        token={token}
      />

      {/* fulfil order */}
      <UpdateStatus
        deliveryStatus={deliveryStatus as string}
        statusValue="PreparingShipment"
        IconName={FileText}
        bookingId={bookingId as string}
        btnName="Print Shipping Label"
        title="Label Ready"
        token={token}
      />

      <UpdateStatus
        deliveryStatus={deliveryStatus as string}
        statusValue="ShippedToCustomer"
        IconName={Truck}
        bookingId={bookingId as string}
        btnName="Mark as Shipped"
        title="Dress Shipped"
        token={token}
      />

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
