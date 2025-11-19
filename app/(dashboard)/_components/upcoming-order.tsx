import Image from "next/image";
import Link from "next/link";
import React from "react";

// Define TypeScript interfaces
interface Customer {
  _id: string;
  name?: string;
  email?: string;
}

interface MasterDress {
  _id: string;
  thumbnail?: string;
  name?: string;
}

interface UpcomingOrder {
  _id: string;
  masterdressId: MasterDress;
  rentalStartDate: string;
  rentalEndDate: string;
  customer: Customer;
}

interface UpcomingOrderProps {
  upcomingOrders: UpcomingOrder[];
}

const UpcomingOrder = ({ upcomingOrders }: UpcomingOrderProps) => {
  return (
    <div className="bg-white p-6 rounded-[15px] shadow-[0px_4px_10px_0px_#0000001A]">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-medium">Upcoming Orders</h3>
        <Link
          href="/bookings"
          className="text-xs text-gray-500 hover:underline"
        >
          VIEW ALL
        </Link>
      </div>

      <div className="space-y-4">
        {upcomingOrders?.map((order, index) => (
          <div
            key={order._id || index}
            className="flex bg-[#FEFAF6] rounded-[8px] overflow-hidden"
          >
            {/* Image Container - Fixed alignment */}
            <div className="w-24 h-28  relative">
              <Image
                src={order?.masterdressId?.thumbnail || "/placeholder.svg"}
                alt={`Dress for booking ${order._id}`}
                fill
                className="object-cover"
                sizes="80px"
              />
            </div>

            {/* Content Container */}
            <div className="flex-1 pt-2 px-4 space-y-1 h-28">
              <p className="text-sm font-medium">BOOKING ID: {order?._id}</p>
              <p className="text-sm text-gray-500">
                Dress Id: {order?.masterdressId?._id}
              </p>
              <p className="text-sm text-gray-500 flex items-center gap-2">
                <span>Rental Period : </span>
                <span>
                  {new Date(order?.rentalStartDate).toLocaleDateString()}
                </span>
                <span>-</span>
                <span>
                  {new Date(order?.rentalEndDate).toLocaleDateString()}
                </span>
              </p>
              <p className="text-sm text-gray-500">
                Customer ID: {order?.customer?._id}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingOrder;
