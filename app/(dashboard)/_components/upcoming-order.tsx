import Image from "next/image";
import Link from "next/link";
import React from "react";

// Sample booking data
const bookingData = [
  {
    id: "########",
    dressId: "MG-XXXXXX",
    date: "Sep 5-7, 2023",
    customer: "XXXXXXX",
    image: "/woman-orange-dress.png",
  },
  {
    id: "########",
    dressId: "MG-XXXXXX",
    date: "Sep 5-7, 2023",
    customer: "XXXXXXX",
    image: "/two-women-dresses.png",
  },
  {
    id: "########",
    dressId: "MG-XXXXXX",
    date: "Sep 5-7, 2023",
    customer: "XXXXXXX",
    image: "/woman-yellow-dress.png",
  },
];

const UpcomingOrder = () => {
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

      <div className="space-y-6 ">
        {bookingData.map((booking, index) => (
          <div key={index} className="flex space-x-4 bg-[#FEFAF6]">
            <div className="w-20 h-24 overflow-hidden">
              <Image
                src={booking.image || "/placeholder.svg"}
                alt={`Booking ${index + 1}`}
                width={80}
                height={96}
                className="object-cover w-full h-full rounded-l-[8px]"
              />
            </div>
            <div className="rounded-r-[8px] p-2">
              <p className="text-sm font-medium">BOOKING ID: {booking.id}</p>
              <p className="text-xs text-gray-500">
                Dress Id : {booking.dressId}
              </p>
              <p className="text-xs text-gray-500">{booking.date}</p>
              <p className="text-xs text-gray-500">
                Customer: {booking.customer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingOrder;
