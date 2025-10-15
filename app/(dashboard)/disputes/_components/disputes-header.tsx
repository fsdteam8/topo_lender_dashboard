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
import { Plus, Search } from "lucide-react";
import React from "react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import ManualBookings from "./manual-bookings";
import DisputeCard from "./dispute-card";
import { useDisputesFilter } from "./states/useDisputesFilter";

const DisputeHeader = () => {
  const { setSearch } = useDisputesFilter();

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-medium uppercase tracking-[0.3rem]">
          Disputes
        </h1>

        <div className="flex items-center gap-5">
          <Select>
            <SelectTrigger className="w-[180px] bg-primary text-white">
              <SelectValue placeholder="This Month" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>

          <Button className="flex items-center gap-2">
            <span>Submit New Dispute</span>{" "}
            <span>
              <Plus />
            </span>
          </Button>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-3 gap-8">
        <DisputeCard title="Total Disputes" value="##" />
        <DisputeCard title="Resolution Rate" value="##" />
        <DisputeCard title="Pending Disputes" value="##" />
      </div>

      <div className="flex justify-between items-center bg-white p-5  rounded-lg shadow-[0px_4px_10px_0px_#0000001A] mt-8">
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
              <SelectValue placeholder="All" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Pending</SelectItem>
              <SelectItem value="dark">Disputed</SelectItem>
              <SelectItem value="system">Completed</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default DisputeHeader;
