import React from "react";
import { BookingDetails } from "./about-booking";
import ShippingStatus from "./shipping-status";
import PickupStatus from "./pickup-status";

interface Props {
  bookingDetails: {
    deliveryMethod?: string;
  };
}

const DeliveryStatus = ({ bookingDetails }: Props) => {
  return (
    <div>
      {bookingDetails?.deliveryMethod === "Shipping" ? (
        <ShippingStatus bookingDetails={bookingDetails} />
      ) : ( 
        <PickupStatus bookingDetails={bookingDetails} />
      )}
    </div>
  );
};

export default DeliveryStatus;
