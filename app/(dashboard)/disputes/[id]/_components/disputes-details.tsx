"use client";

import { BookingsResponse } from "@/types/bookings/bookingTypes";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import AboutBooking from "./about-booking";
import AboutOrder from "./about-order";
import AboutPayment from "./about-payment";
import AboutAnalytics from "./about-analytics";
import DisputeForm from "./dispute-form";

interface Props {
  token: string;
}

const DisputesDetails = ({ token }: Props) => {
  const params = useParams();
  const id = params.id;

  const { data: disputesDetails = {}, isLoading } = useQuery<BookingsResponse>({
    queryKey: ["all-bookings"],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/lender/disputes/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const json = await res.json();
      return json.data;
    },
  });

  console.log("disputesDetails : ", disputesDetails)

  return (
    <div>
      <div className="grid grid-cols-2 gap-8">
        <AboutBooking bookingDetails={disputesDetails} isLoading={isLoading} />
        <AboutOrder bookingDetails={disputesDetails} isLoading={isLoading} />
        <AboutPayment bookingDetails={disputesDetails} isLoading={isLoading} />
        <AboutAnalytics bookingDetails={disputesDetails} isLoading={isLoading} />
      </div>

      <div>
        <DisputeForm />
      </div>
    </div>
  );
};

export default DisputesDetails;
