"use client";

import Link from "next/link";

import CustomButton from "../button/custom-button";
import Image from "next/image";

export default function RentalCard({ car }: { car: any }) {
  return (
    <div key={car.id} className=" group flex flex-col p-6 justify-center items-start text-black-100 bg-primary-blue-100 hover:bg-white hover:shadow-md rounded-3xl">
      <div className="w-full flex justify-between items-start gap-2">
        <h2 className="text-[1.4rem] leading-[1.7rem] font-bold capitalize">
          {car.make} {car.model}
        </h2>
      </div>
      <div className="flex mt-6 text-[2rem] font-extrabold">
        <span className=" self-start text-[0.9rem] font-semibold">$</span>
        {car.price}
        <span className=" self-end text-[0.9rem] font-semibold">/day</span>
      </div>
      <div className=" relative w-full object-contain">
        <Image
          src={car.img}
          alt={car.make}
          // fill priority
          className=" object-contain w-full"
          width={300}
          height={300}
          priority
        />
      </div>
      <div className="w-full flex relative mt-2">
        <div className="flex group-hover:invisible w-full flex-col justify-center items-center gap-2">
          <Image
            src="/steering-wheel.svg"
            alt="steering"
            className="w-[1.3rem] h-[1.3rem]"
            width={20}
            height={20}
            priority
          />
          <p className="text-[0.9rem] ">
            {" "}
            {car.transmission === "Automatic" ? "Automatic" : "Manual"}
          </p>
        </div>
        <div className="flex group-hover:invisible w-full flex-col justify-center items-center gap-2 ">
          <Image
            src="/tire.svg"
            alt="tire"
            className="w-[1.3rem] h-[1.3rem]"
            width={20}
            height={20}
            priority
          />
          <p className="text-[0.9rem] "> {car.drive.toUpperCase()}</p>
        </div>
        <div className="flex group-hover:invisible w-full flex-col justify-center items-center gap-2">
          <Image
            src="/gas.svg"
            alt="Gas"
            className="w-[1.3rem] h-[1.3rem]"
            width={20}
            height={20}
            priority
          />
          <p className="text-[0.9rem] "> {car.city_mpg} MPG</p>
        </div>
        <div className="hidden group-hover:flex absolute bottom-0 w-full z-10 overflow-hidden ">
       
            <CustomButton
              id={`/rental/${car.id}`}
              title="show more"
              style="capitalize  ease-linear bg-primary-blue w-full text-center py-[1rem] rounded-full flex flex-row relative justify-center items-center px-6 outline-none text-white  duration-300  hover:text-primary-blue hover:bg-white font-bold text-[0.9rem] leading-4"
            />
        
        </div>
      </div>
    </div>
  );
}
