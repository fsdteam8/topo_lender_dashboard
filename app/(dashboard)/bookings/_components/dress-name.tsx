"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import React from "react";

interface ListingInfo {
  _id: string;
  dressName: string;
  media: string[];
}

interface Props {
  listingInfo: {
    data: {
      data: ListingInfo[];
    };
  };
}

const DressName = ({ listingInfo }: Props) => {
  const data = listingInfo?.data?.data;

  console.log("listingInfo: ", listingInfo);

  return (
    <div>
      <div>
        <h1 className="font-medium mb-2">
          Select Dress <span className="text-xl text-red-500">*</span>
        </h1>

        <Select>
          <SelectTrigger className="w-[250px] h-[60px]">
            <SelectValue placeholder="Select One" />
          </SelectTrigger>
          <SelectContent>
            {data?.map((item) => (
              <SelectItem
                key={item?._id}
                value={item?.dressName}
                className="cursor-pointer "
              >
                <div className="flex items-center gap-2">
                  <Image
                    src={item?.media[0]}
                    alt="img.png"
                    width={1000}
                    height={1000}
                    className="h-10 w-10 rounded-md"
                  />
                  <h1 className="font-medium">{item?.dressName}</h1>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default DressName;
