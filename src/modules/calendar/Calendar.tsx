"use client";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function MyCalendar() {
  const [date, setDate] = useState(new Date());

  const handleChange = (value: any) => {
    setDate(value);
  };

  return (
    <div className="flex justify-center items-center bg-black min-h-screen">
      <div className="rounded-2xl p-4 shadow-lg">
        <Calendar
          onChange={handleChange} 
          value={date}
          className="custom-calendar bg-transparent text-white rounded-2xl p-4"
        />
      </div>
    </div>
  );
}
