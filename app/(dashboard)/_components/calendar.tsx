import { ChevronDown } from "lucide-react";
import React from "react";

const Calendar = () => {
  return (
    <div className="lg:col-span-2 bg-white p-6 rounded-[15px] shadow-[0px_4px_10px_0px_#0000001A]">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-medium">Calendar</h3>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-[#891d33] text-white rounded-md flex items-center">
            Dress ID
            <ChevronDown className="ml-2 h-4 w-4" />
          </button>
          <button className="px-4 py-2 bg-[#891d33] text-white rounded-md flex items-center">
            Month
            <ChevronDown className="ml-2 h-4 w-4" />
          </button>
          <button className="px-4 py-2 bg-[#891d33] text-white rounded-md flex items-center">
            Year
            <ChevronDown className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-center font-medium mb-4">
            {day}
          </div>
        ))}

        {/* Calendar days */}
        {[
          { day: 28, month: "prev" },
          { day: 29, month: "prev" },
          { day: 30, month: "prev" },
          { day: 1, month: "current", booking: null },
          { day: 2, month: "current", booking: null },
          { day: 3, month: "current", booking: null },
          { day: 4, month: "current", booking: null },
          { day: 5, month: "current", booking: null },
          { day: 6, month: "current", booking: null },
          { day: 7, month: "current", booking: null },
          { day: 8, month: "current", booking: null },
          { day: 9, month: "current", booking: null },
          { day: 10, month: "current", booking: null },
          { day: 11, month: "current", booking: null },
          { day: 12, month: "current", booking: null },
          { day: 13, month: "current", booking: null },
          { day: 14, month: "current", booking: null },
          { day: 15, month: "current", booking: null },
          { day: 16, month: "current", booking: null },
          { day: 17, month: "current", booking: null },
          { day: 18, month: "current", booking: null },
          { day: 19, month: "current", booking: null },
          { day: 20, month: "current", booking: null },
          { day: 21, month: "current", booking: null },
          { day: 22, month: "current", booking: null },
          { day: 23, month: "current", booking: null },
          { day: 24, month: "current", booking: null },
          { day: 25, month: "current", booking: null },
          { day: 26, month: "current", booking: null },
          { day: 27, month: "current", booking: null },
          { day: 28, month: "current", booking: null },
          { day: 29, month: "current", booking: null },
          { day: 30, month: "current", booking: null },
          { day: 1, month: "next", booking: null },
          { day: 2, month: "next", booking: null },
        ].map((date, index) => (
          <div
            key={index}
            className={`p-2 text-center rounded-sm ${
              date.month !== "current" ? "text-gray-400" : ""
            } relative`}
          >
            {date.day}
            {date.day === 1 && date.month === "current" && (
              <div className="absolute left-0 right-0 mt-1 mx-auto bg-[#891d33] text-white text-xs py-1 px-2 rounded-sm">
                Booking ID: #####
              </div>
            )}
            {date.day === 12 && date.month === "current" && (
              <div className="absolute left-0 right-0 mt-1 mx-auto bg-[#891d33] text-white text-xs py-1 px-2 rounded-sm">
                Booking ID: #####
              </div>
            )}
            {date.day === 24 && date.month === "current" && (
              <div className="absolute left-0 right-0 mt-1 mx-auto bg-[#891d33] text-white text-xs py-1 px-2 rounded-sm">
                Booking ID: #####
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
