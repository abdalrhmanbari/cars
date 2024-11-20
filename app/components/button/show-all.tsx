import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/outline";
import { manufacturers } from "../../context/Context";
import Image from "next/image";

export default async function ShowAll() {
  const Manufacturers = await manufacturers;
  return (
    <Popover className="relative">
      <PopoverButton className="flex flex-row capitalize relative justify-center items-center py-3 px-6 bg-primary-blue rounded-full text-white mt-10 hover:bg-white hover:text-primary-blue duration-300 font-bold ease-linear  gap-x-1 text-sm leading-6 ">
        <span>show all brands</span>
        <ChevronDownIcon aria-hidden="true" className="h-5 w-5" />
      </PopoverButton>

      <PopoverPanel
        transition
        className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="  flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
          <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-8">
            {Manufacturers.map((item) => (
              <button className="flex items-center py-[0.5rem] px-2 gap-4 rounded-full hover:border-primary-blue hover:text-primary-blue duration-300 w-[15.625rem] border">
                <div className="w-[1.875rem]">

                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnG49Ht9722p0eCdIwm0YoZj0IGBzmI5D49Q&s"
                  alt="..."
                  className=" w-full"
                  width={200}
                  height={200}
                  priority
                  />
                  </div>
                <span className=" font-medium uppercase">{item}</span>
              </button>
            ))}
          </div>
        </div>
      </PopoverPanel>
    </Popover>
  );
}
