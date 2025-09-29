"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import { BookingsResponse } from "@/types/bookings/bookingTypes";
import { useBookingsFilter } from "./states/useBookingsFilter";
import Link from "next/link";
import PayoutButton from "./payout-button";

interface Props {
  token: string;
}

const BookingsTable = ({ token }: Props) => {
  const [page, setPage] = React.useState(1);

  const { search, date, deliveryType, status } = useBookingsFilter();

  const { data, isLoading, isFetching } = useQuery<BookingsResponse>({
    queryKey: ["all-bookings", page, search, date, deliveryType, status],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/customer/bookings/all?page=${page}&search=${search}&date=${date}&status=${status}`,
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

  const bookings = data?.bookings ?? [];
  const paginationInfo = data?.paginationInfo;

  return (
    <div className="bg-white p-5 rounded-lg mt-8 shadow-[0px_4px_10px_0px_#0000001A]">
      <div className="overflow-x-auto">
        <Table className="min-w-[1000px]">
          <TableHeader>
            <TableRow className="border-none">
              <TableHead className="w-[100px] text-center">Order ID</TableHead>
              <TableHead className="w-[100px] text-center">Dress ID</TableHead>
              <TableHead className="w-[100px] text-center">Customer</TableHead>
              <TableHead className="w-[100px] text-center">Price</TableHead>
              <TableHead className="w-[100px] text-center">
                Rental Period
              </TableHead>
              <TableHead className="w-[100px] text-center">
                Delivery Type
              </TableHead>
              <TableHead className="w-[100px] text-center">Status</TableHead>
              <TableHead className="w-[100px] text-center">Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {isLoading || isFetching ? (
              Array.from({ length: 10 }).map((_, i) => (
                <TableRow key={i}>
                  {Array.from({ length: 8 }).map((_, j) => (
                    <TableCell key={j} className="text-center">
                      <Skeleton className="h-5 w-20 mx-auto" />
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : bookings.length > 0 ? (
              bookings.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="text-center">{item.id}</TableCell>
                  <TableCell className="text-center">{item.dressId}</TableCell>
                  <TableCell className="text-center">
                    {item.customer._id}
                  </TableCell>
                  <TableCell className="text-center">
                    {" "}
                    {`$ ${item.totalAmount}`}
                  </TableCell>
                  <TableCell className="text-center flex justify-center gap-2 mt-5">
                    <p>{new Date(item.rentalStartDate).toLocaleDateString()}</p>{" "}
                    -
                    <span>
                      {new Date(item.rentalEndDate).toLocaleDateString()}
                    </span>
                  </TableCell>
                  <TableCell className="text-center">
                    {`${item.deliveryMethod}`}
                  </TableCell>
                  <TableCell className="text-center space-x-1">
                    {item.statusHistory.map((status) => (
                      <span
                        key={status._id}
                        className={`px-2 rounded-3xl font-semibold text-xs py-1 ${
                          status.status === "Pending" &&
                          "text-orange-600 bg-orange-200"
                        }`}
                      >
                        {status.status}
                      </span>
                    ))}
                  </TableCell>
                  <TableCell className="text-center flex items-center justify-center space-x-5">
                    <Link href={`/bookings/${item.id}`}>
                      <Button>View</Button>
                    </Link>

                    <PayoutButton id={item.id} token={token} />
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={8}
                  className="text-center py-6 text-gray-500"
                >
                  No bookings found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {paginationInfo && (
        <div className="flex justify-between items-center mt-4 text-sm">
          <span>
            Page {paginationInfo.currentPage} of {paginationInfo.totalPages} •{" "}
            {paginationInfo.totalData} records
          </span>
          <div className="space-x-2">
            <Button
              variant="outline"
              size="sm"
              disabled={!paginationInfo.hasPrevPage}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              disabled={!paginationInfo.hasNextPage}
              onClick={() => setPage((p) => p + 1)}
            >
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingsTable;
