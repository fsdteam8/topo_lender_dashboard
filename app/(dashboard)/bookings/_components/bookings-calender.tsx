"use client";

import React, { useState } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  addMonths,
  subMonths,
  isBefore,
  isSameDay,
} from "date-fns";

type Booking = {
  id: string;
  date: string;
};

const bookings: Booking[] = [
  { id: "#####1", date: "2025-09-25" },
  { id: "#####2", date: "2025-05-12" },
  { id: "#####3", date: "2025-05-24" },
];

const BookingsCalendar: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const today = new Date();

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart, { weekStartsOn: 0 });
  const endDate = endOfWeek(monthEnd, { weekStartsOn: 0 });

  const rows = [];
  let days = [];
  let day = startDate;

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      const formattedDate = format(day, "d");
      const isDisabled = isBefore(day, today) && !isSameDay(day, today);
      const booking = bookings.find(
        (b) => b.date === format(day, "yyyy-MM-dd")
      );

      days.push(
        <div
          key={day.toString()}
          className={`relative  p-2 text-center h-20 cursor-pointer transition
            ${
              isDisabled
                ? "text-gray-300 cursor-not-allowed"
                : "hover:bg-gray-100"
            }
            ${isSameDay(day, today) ? "border-red-500 font-bold" : ""}
          `}
        >
          <span>{formattedDate}</span>

          {booking && (
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-red-800 text-white text-xs px-2 py-1 rounded">
              Booking ID: {booking.id}
            </div>
          )}
        </div>
      );
      day = addDays(day, 1);
    }
    rows.push(
      <div className="grid grid-cols-7" key={day.toString()}>
        {days}
      </div>
    );
    days = [];
  }

  return (
    <div className="p-4 bg-white rounded-xl shadow">
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          disabled={isBefore(
            startOfMonth(subMonths(currentMonth, 1)),
            startOfMonth(today)
          )}
        >
          Prev
        </button>
        <h2 className="text-xl font-semibold">
          {format(currentMonth, "MMMM , yyyy")}
        </h2>
        <button
          onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
          className="px-3 py-1 bg-gray-200 rounded"
        >
          Next
        </button>
      </div>

      <div className="grid grid-cols-7 text-center font-bold mb-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>

      <div>{rows}</div>
    </div>
  );
};

export default BookingsCalendar;
