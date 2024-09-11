import React from "react";
import CustomButton from "../button/custom-button";
import Link from "next/link";
import Image from "next/image";

export default function DetailsId({ car }: { car: any }) {
  return (
    <div className="   w-3/4 bg-white  flex flex-col md:flex-row items-center gap-16 sm:justify-between shadow-lg m-auto p-[1.9rem] ">
      <div className="   sm:max-w-[37.5rem] max-w-[18.8rem]  relative ">
        <Image
          src={car?.img}
          alt={car?.col}
          className="  w-full"
           width={1000}
           height={1000}
          
           priority
          />
      </div>
      <div className="flex-col ">
        <h1 className="  text-xl sm:text-4xl font-bold mb-[0.9rem]">
          {car?.make}
        </h1>
        <div className=" text-[1rem]  sm:text-[1.3rem] flex flex-col  items-star gap-[0.5rem] mb-[1rem]">
          <span className=" font-semibold"> {car?.model}</span>
          <span className=" font-medium">{car?.cylinders} cylinders</span>
        </div>
        <div className="flex gap-6 flex-col ">
          <span className="flex gap-2 items-center">
            <Image src="/steering-wheel.svg" alt="..." width={20} height={20} priority />
            {car?.transmission}
          </span>
          <span className="flex gap-2 items-center">
            <Image src="/gas.svg" alt=".." width={20} height={20}  priority/>{" "}
            {car?.fuel_type}
          </span>
          <span className="  flex gap-2 items-center">
            Price:<span className="font-bold  ">{car?.price}$</span>
          </span>
        </div>
        
          <CustomButton
            id={"/login"}
            title={`WhatsApp`}
            style="text-white bg-primary-blue rounded-full mt-[1.9rem]  min-w-[9.4rem] font-bold text-base sm:text-lg  text-center "
          />
        
      </div>
    </div>
  );
}
