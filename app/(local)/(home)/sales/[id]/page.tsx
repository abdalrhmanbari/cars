import React from "react";

import Link from "next/link";
import { sale } from "@/app/context/Context";
import CustomButton from "@/app/components/button/custom-button";
import PrevIcon from "@/app/components/icon/prev-icon";
import DetailsId from "@/app/components/compnent/details-id";

function CarDetails({ params }: { params: any}) {
    
    const cars = sale;
    const id = params.id;

  const car = cars.find((car) => car.id == id);

  return (
    <div className=" container my-[6rem]">
      <div className=" flex items-center gap-[2rem] sm:gap-[4rem] mb-[1rem]">
        <Link href={"/"} className=" bg-[#FFF] rounded-full  cursor-pointer ">
          <PrevIcon />
        </Link>
        <div className=" text-center flex  flex-col gap-[0.7rem]">
          <h1 className=" text-xl sm:text-4xl   font-bold  ">{car?.title}</h1>
          <p className=" text-xs sm:text-base">{car?.description}</p>
        </div>
      </div>
        <DetailsId car={car}/>

    </div>
  );
}

export default CarDetails;
