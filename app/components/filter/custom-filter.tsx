import ShowAll from "../button/show-all";
import { carBrand } from "../../context/Context";
import Image from "next/image";

export default async function CustomFilters() {
  const Brands = await carBrand;

  return (
    <div className="w-full ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[2rem] ">
        {Brands.map((brand) => (
          <button
            key={brand.id}
            className=" flex  flex-col items-center justify-center rounded-md border-solid border w-[18.75rem] h-[12.5rem] hover:border-primary-blue  hover:text-primary-blue duration-300 ease-linear"
          >
            <Image src={brand.img} alt={brand.name} className="w-[6.25rem]"  width={100} height={100} priority/>
            <h1 className=" mt-10 font-bold text-[1rem] uppercase ">
              {brand.name}
            </h1>
          </button>
        ))}
      </div>
      <div className="mt-6 w-fit m-auto outline-none    ">
        <ShowAll />
      </div>
    </div>
  );
}
