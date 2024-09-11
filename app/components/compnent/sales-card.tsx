import React from "react";

import Link from "next/link";
import CustomButton from "../button/custom-button";
import Image from "next/image";

export default function SalesCard({ car }: { car: any }) {
  return (
    <div
      className="w-full flex sm:flex-row flex-col items-center   gap-[2rem] lg:gap-y-4  max-sm:text-center  text-black-100 bg-primary-blue-100 hover:bg-white hover:shadow-md rounded-3xl py-[1rem] sm:py-[0.5rem] px-[2rem] sm:h-[15rem] ">
      <div className=" sm:min-w-[40%] sm:max-w-[40%] max-w-[90%]  min-w-[90%]">
        <Image
          src={car.img}
          alt={car.col}
          className="w-full h-full"
          width={400}
          height={400}
          priority
        />
      </div>
      <div className=" flex flex-col  ms-0  gap-[1rem] m-auto">
        <h1 className=" lg:text-[1.875rem] md:text-[1.625rem] text-[1.25rem] font-bold  text-left ">
          {car.col}
        </h1>

       
          <CustomButton
            id={`/sales/${car.id}`}
            title={`${car.make} ${car.model} deal`}
            style="text-white duration-300 ease-linear  text-center  w-fit bg-primary-blue rounded-full hover:bg-white hover:text-primary-blue font-bold duration-300 max-sm:m-auto "
          />
       
      </div>
    </div>
  );
}
