import React from "react";
import { BookingDetails } from "./about-booking";

interface Props {
  bookingDetails: {
    deliveryMethod?: string;
  };
}

const ShippingStatus = ({ bookingDetails }: Props) => {
  return <div>ShippingStatus</div>;
};

export default ShippingStatus;
