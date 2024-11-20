import Image from "next/image";
import Link from "next/link";
import * as React from 'react';
export default function Navbar(){
    return(
    <header className=" container  w-full  2xl:ms-[8rem]     z-[99]   top-0 absolute ">

        <nav className="  flex justify-between items-center  py-[0.5rem]   ">
            <Link className="  font-bold flex items-center  gap-[0.2rem]" href={'/'}>
            <Image className="w-[2.7rem]" src="/logo..png" alt="arbeCar"  width={100} height={100} />
            <h1 className="text-[1.6rem]">ArbeCar</h1>
            </Link>
            <Link href={'/login'} className="   rounded-full sm:bg-white text-white bg-primary-blue w-[6rem] sm:min-w-[8.125rem] sm:text-primary-blue  flex flex-row relative justify-center items-center py-3 px-6 outline-none   " >Log in</Link>
        </nav>

    </header>)
}

