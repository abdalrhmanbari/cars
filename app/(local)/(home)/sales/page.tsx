import CustomButton from "@/app/components/button/custom-button";
import SalesCard from "@/app/components/compnent/sales-card";
import { sale } from "@/app/context/Context";

import Link from "next/link";

import React from "react";

export default async function Sales() {
  const AllSales = await sale.slice(0,6);

  //   const isEmpty = AllSales.length < 1 || !AllSales;
  //   if(!isEmpty){
  //     return <h1>Oops..</h1>
  //   }
  return (
    <section className="container my-[4rem]">
      <h1 className=" md:text-4xl text-2xl font-extrabold ">
        Our pick of the best deals
      </h1>
      <h1 className="text-xl sm:text-left  text-center md:text-4xl font-bold capitalize my-[2rem] text-primary-blue">
        sales section
      </h1>
      <div className="w-full flex flex-col  gap-[2rem]  z-0 ">
        {AllSales?.map((car) => (
          <SalesCard car={car} />
        ))}
        <div className=" flex items-center justify-center w-fit m-auto"
        >
          <CustomButton
          id={"/sales-more"}
            title={"show more"}
            textStyle={
              " capitalize relative  py-3 px-6 bg-primary-blue rounded-full text-white mt-10 hover:bg-white hover:text-primary-blue duration-300 ease-linear font-bold   gap-x-1 text-sm leading-6 "
            }
          />
        </div>
      </div>
    </section>
  );
}
