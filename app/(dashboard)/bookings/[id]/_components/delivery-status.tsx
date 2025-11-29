import React from "react";
import { BookingDetails } from "./about-booking";
import ShippingStatus from "./shipping-status";
import PickupStatus from "./pickup-status";

interface Props {
  bookingDetails: {
    deliveryMethod?: string;
    deliveryStatus?: string;
  };
  token: string;
}

const DeliveryStatus = ({ bookingDetails, token }: Props) => {
  return (
    <div>
      {bookingDetails?.deliveryMethod === "Shipping" ? (
        <ShippingStatus
          deliveryStatus={bookingDetails?.deliveryStatus}
          token={token}
        />
      ) : (
        <PickupStatus bookingDetails={bookingDetails} />
      )}
    </div>
  );
};

export default DeliveryStatus;
