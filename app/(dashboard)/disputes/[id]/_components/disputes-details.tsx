"use client";

import { BookingsResponse } from "@/types/bookings/bookingTypes";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import AboutOrder from "./about-order";
import AboutAnalytics from "./dispute-description";
import DisputeForm from "./dispute-form";
import AboutDisputes from "./about-dispute";
import DisputeReason from "./dispute-reason";
import DisputeDescription from "./dispute-description";
import MediaEvidence from "./media-evidence";

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

  return (
    <div>
      <div className="grid grid-cols-2 gap-8">
        <AboutDisputes
          disputesDetails={disputesDetails}
          isLoading={isLoading}
        />
        <AboutOrder disputesDetails={disputesDetails} isLoading={isLoading} />
        <DisputeReason
          disputesDetails={disputesDetails}
          isLoading={isLoading}
        />
        <DisputeDescription
          disputesDetails={disputesDetails}
          isLoading={isLoading}
        />
        <MediaEvidence
          disputesDetails={disputesDetails}
          isLoading={isLoading}
        />
      </div>

      <div>
        <DisputeForm />
      </div>
    </div>
  );
};

export default DisputesDetails;
