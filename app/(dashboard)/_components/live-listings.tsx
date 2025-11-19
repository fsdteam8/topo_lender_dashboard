import Image from "next/image";
import Link from "next/link";
import React from "react";


const LiveListings = ({ liveListings }) => {
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
        {liveListings?.map((dress, index) => (
          <div key={index} className="flex bg-[#FEFAF6]">
            <div className="w-20 h-24 overflow-hidden">
              <Image
                src={dress?.media[0] || "/placeholder.svg"}
                alt={`Dress ${index + 1}`}
                width={80}
                height={96}
                className="object-cover w-full h-full rounded-l-[8px]"
              />
            </div>
            <div className="px-4 pt-2 rounded-r-[8px]">
              <p className="font-medium">DRESS ID : {dress?.masterDressId}</p>
              <p className="text-sm">Brand: {dress.brand}</p>
              <p className="text-sm">Price: {dress.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveListings;
