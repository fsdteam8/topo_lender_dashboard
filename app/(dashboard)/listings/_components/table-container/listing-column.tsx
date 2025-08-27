"use client";

import { Listing } from "@/types/listings/index";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import ListingViewAction from "./listing-view-action";
import StatusController from "./status-controller";

export const listingColumn: ColumnDef<Listing>[] = [
  {
    accessorKey: "dressId",
    header: "Dress ID",
  },
  {
    header: "Thumbnail",
    cell: ({ row }) => {
      const media = row.original.media;

      return (
        <div className="relative w-[56px] h-[66px]">
          <Image src={media[0]} alt={row.original.dressName} fill />
        </div>
      );
    },
  },
  {
    header: "Dress Name",
    accessorKey: "dressName",
  },
  {
    header: "Price (4 day)",
    cell: ({ row }) => {
      return <p>${row.original.rentalPrice.fourDays}</p>;
    },
  },
  {
    header: "Price (8 day)",
    cell: ({ row }) => {
      return <p>${row.original.rentalPrice.eightDays}</p>;
    },
  },
  {
    accessorKey: "size",
    header: "Size",
  },
  {
    accessorKey: "condition",
    header: "Condition",
  },
  {
    accessorKey: "status",
    cell: ({ row }) => <StatusController data={row.original} />,
  },
  {
    header: "Action",
    cell: ({ row }) => <ListingViewAction data={row.original} />,
  },
];
