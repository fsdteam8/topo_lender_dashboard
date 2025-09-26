"use client";

import { BookingsResponse } from "@/types/bookings/bookingTypes";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

interface Props {
  token: string;
}

const BookingsDetails = ({ token }: Props) => {
  const params = useParams();
  const id = params.id;

  const {
    data: bookingDetails = {},
    isLoading,
    isFetching,
  } = useQuery<BookingsResponse>({
    queryKey: ["all-bookings"],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/customer/bookings/${id}`,
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

  return <div>BookingsDetails</div>;
};

export default BookingsDetails;
