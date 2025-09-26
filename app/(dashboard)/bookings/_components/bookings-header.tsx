"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import React from "react";
import { useBookingsFilter } from "../states/useBookingsFilter";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import ManualBookings from "./manual-bookings";

const BookingsHeader = () => {
  const { setSearch, setDate } = useBookingsFilter();

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-medium uppercase tracking-[0.3rem]">
          Bookings
        </h1>

        <div>
          <Dialog>
            <DialogTrigger asChild>
              <Button>Manual Booking</Button>
            </DialogTrigger>

            <ManualBookings />
          </Dialog>
        </div>
      </div>

      <div className="flex items-center gap-10 bg-white p-5  rounded-lg shadow-[0px_4px_10px_0px_#0000001A] mt-8">
        <div className="relative">
          <Input
            className="pl-7 w-[220px]"
            placeholder="Search...."
            onChange={(e) => setSearch(e.target.value)}
          />

          <Search className="h-4 w-4 text-gray-500 absolute top-1/3 left-2" />
        </div>

        <div>
          <Select>
            <SelectTrigger className="w-[220px]">
              <SelectValue placeholder="Delivery type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Shipping</SelectItem>
              <SelectItem value="dark">Local Pickup</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Select>
            <SelectTrigger className="w-[220px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Pending</SelectItem>
              <SelectItem value="dark">Disputed</SelectItem>
              <SelectItem value="system">Completed</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-5">
          <div>
            <input
              type="date"
              className="w-[180px] focus-visible:ring-0 border border-input h-9 rounded-md text-base shadow-sm px-3 py-1"
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingsHeader;
