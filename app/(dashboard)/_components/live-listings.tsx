import Image from "next/image";
import Link from "next/link";
import React from "react";

type LiveListingType = {
  _id: string;
  thumbnail: string;
  masterDressId: string;
  brand: string;
  price: string;
};

type liveListingsProps = {
  liveListings: LiveListingType[];
  isLoading: boolean;
};

const LiveListings = ({ liveListings, isLoading }: liveListingsProps) => {
  return (
    <div className="bg-white p-7 rounded-[15px] shadow-[0px_4px_10px_0px_#0000001A] mb-8">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-medium">Live Listings</h3>
        <Link
          href="/listings"
          className="text-sm text-gray-500 hover:underline"
        >
          VIEW ALL
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {liveListings?.map((dress) => (
          <div key={dress?._id} className="flex bg-[#FEFAF6]">
            <div className="w-20 h-24 overflow-hidden">
              <Image
                src={dress?.thumbnail || "/placeholder.svg"}
                alt={`dress.png`}
                width={80}
                height={96}
                className="object-cover w-full h-full rounded-l-[8px]"
              />
            </div>
            <div className="px-4 pt-2 rounded-r-[8px]">
              <p className="font-medium">DRESS ID : {dress?.masterDressId}</p>
              <p className="text-sm">
                Brand: {dress?.brand || "Non vel ad officia d"}
              </p>
              <p className="text-sm">Price: {dress?.price || "132"}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveListings;
