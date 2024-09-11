import Image from "next/image";
import Link from "next/link";
import * as React from 'react';
export default function Navbar(){
    return(
    <header className=" container  2xl:ms-[8rem]  w-full  absolute  z-50   top-0 ">

        <nav className="  flex justify-between items-center  py-[0.5rem]   ">
            <Link className=" text-[1.6rem] font-bold flex items-center " href={'/'}>
            <Image className="w-[3.75rem]" src="/2.png" alt=".."  width={300} height={300} />
            <h1>ArbeCar</h1>
            </Link>
            <Link href={'/login'} className=" rounded-full sm:bg-white text-white bg-primary-blue w-[6rem] sm:min-w-[8.125rem] sm:text-primary-blue  flex flex-row relative justify-center items-center py-3 px-6 outline-none   " >Log in</Link>
        </nav>

    </header>)
}

