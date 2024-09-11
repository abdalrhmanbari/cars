import DetailsId from '@/app/components/compnent/details-id';
import PrevIcon from '@/app/components/icon/prev-icon';
import { rental } from '@/app/context/Context'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function RentalDetails({params}:{params:any}) {
    const cars = rental;
    const id= params.id;
    const car= cars.find((car) => car.id == id )
    
  return (
    <section className='container my-[6rem]'>
            <div className=' flex items-center   mb-[1rem]'>
            <Link href={'/'} className='bg-[#FFF] rounded-full  cursor-pointer'>
                <PrevIcon/>
            </Link>
                <h1 className='  flex justify-center items-center m-auto text-center text-xl sm:text-4xl   font-bold'>New {car?.make} {car?.model}</h1>
            </div>
                <div className=''>
                    <DetailsId car={car}/>
                </div>
    </section>
  )
}
