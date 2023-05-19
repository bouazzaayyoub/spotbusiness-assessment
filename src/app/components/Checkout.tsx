import React from "react";
import CalendarIcon from "../assets/img/Calendar.svg";
import TimerIcon from "../assets/img/timer.svg";
import Person from "../assets/img/person.svg";
import Image from "next/image";

type Props = {};

const Checkout = (props: Props) => {
  return (
    <div className="w-[22rem] bg-gray p-12">
      <div className="inline-flex space-x-2.5 items-end justify-end">
        <p className="text-3xl font-medium text-gray-900">$ 125</p>
        <p className="opacity-50 text-lg text-gray-900">/ hour</p>
      </div>
      <div className="flex pb-3">
        <form className="w-[16rem]">
          <div className="flex w-full mt-6">
            <div className="inline-flex items-center w-1/2">
              <Image src={CalendarIcon} alt="calendar" className="me-1" />
              <input
                className="outline-none border-none bg-transparent"
                type="text"
                placeholder="Check-out"
              />
            </div>
            <div className="flex items-center w-1/2">
              <Image src={CalendarIcon} alt="calendar" className="me-1" />
              <input
                className="outline-none border-none bg-transparent"
                type="text"
                placeholder="Check-in"
              />
            </div>
          </div>
          <div className="flex w-full mt-6">
            <div className="inline-flex items-center w-1/2">
              <Image src={TimerIcon} alt="calendar" className="me-1" />
              <input
                className="outline-none border-none bg-transparent"
                type="text"
                placeholder="Time out"
              />
            </div>
            <div className="flex items-center w-1/2">
              <Image src={TimerIcon} alt="calendar" className="me-1" />
              <input
                className="outline-none border-none bg-transparent"
                type="text"
                placeholder="Time in"
              />
            </div>
          </div>

          <div className="flex w-full mt-6">
            <div className="inline-flex items-center w-full">
              <Image src={Person} alt="Guests" className="me-1" />
              <select
                className="outline-none border-none bg-transparent w-full"
                placeholder="Guests"
              >
                <option className="opacity-5">Guests</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full uppercase bg-woodsmoke mt-5 py-4 rounded-full text-white"
          >
            Reserve
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
