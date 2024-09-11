import RentalCard from '@/app/components/compnent/rantel-card'
import PrevIcon from '@/app/components/icon/prev-icon'
import { rental } from '@/app/context/Context'
import Link from 'next/link'
import React from 'react'

export default async function RentalMore() {
    const cars= await rental
  return (
    <div className='container my-[6rem]'>
        <div className=' flex items-center mb-[4rem]'>
            <Link href={'/'}>
            <PrevIcon/>
            </Link>
        <h1 className=' flex items-center text-center m-auto justify-center text-2xl sm:text-4xl font-bold text-primary-blue capitalize '>rental section</h1>
        </div>
        <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[2rem]'>
            {cars.map((car)=> <RentalCard car={car}/>)}
        </div>
    </div>
  )
}
