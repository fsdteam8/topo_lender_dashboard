import React from "react";
import { BookingDetails } from "./about-booking";

interface Props {
  bookingDetails: {
    deliveryMethod?: string;
  };
}

const PickupStatus = ({ bookingDetails }: Props) => {
  return <div>PickupStatus</div>;
};

export default PickupStatus;
