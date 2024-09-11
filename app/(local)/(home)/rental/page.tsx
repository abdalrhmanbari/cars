import CustomButton from "@/app/components/button/custom-button";
import RentalCard from "@/app/components/compnent/rantel-card";
import { rental } from "@/app/context/Context";
import CustomFilters from "@/app/components/filter/custom-filter";

import React from "react";

export default async function Rental() {
  const AllRental = await rental.slice(0,8)
  return (
    <section className=" container my-[4rem]">
      <div
        className=" flex flex-col items-start justify-start gap-y-2.5 text-black-100"
        id="discover"
      >
        <h1 className=" md:text-4xl text-2xl font-extrabold">Car Catalogue</h1>
        <p>Explore the cars you might like</p>
      </div>
      <div className=" my-[3.125rem]  w-full">
        <CustomFilters />
      </div>
      <h1 className=" text-xl md:text-4xl sm:text-left text-center font-bold capitalize text-primary-blue">
        rental section
      </h1>

      <div className="  w-full  pt-14  flex flex-col"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-[2rem]">
        {AllRental.map((car) => (
          <RentalCard car={car} />
        ))}
      </div>
      <div className=" flex items-center justify-center w-fit m-auto"
      >
        <CustomButton
        id="/rental-more"
          title={"show more"}
          textStyle={
            "flex flex-row w-fit capitalize relative justify-center items-center py-3 px-6 bg-primary-blue rounded-full text-white mt-10 hover:bg-white hover:text-primary-blue duration-300 font-bold ease-linear  gap-x-1 text-sm leading-6  "
          }
        />
      </div>
    </section>
  );
}
