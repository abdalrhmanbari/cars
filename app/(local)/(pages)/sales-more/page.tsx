import SalesCard from '@/app/components/compnent/sales-card'
import PrevIcon from '@/app/components/icon/prev-icon'
import { sale } from '@/app/context/Context'
import Link from 'next/link'
import React from 'react'

export default async function SalesMore() {
    const cars= await sale;
  return (
    <div className='container my-[6rem]'>
        <div className=' flex items-center mb-[4rem]'>
            <Link href={'/'}>
            <PrevIcon/>
            </Link>
        <h1 className=' flex items-center text-center m-auto justify-center text-2xl sm:text-4xl font-bold text-primary-blue capitalize '>sales section</h1>
        </div>
        <div className=' flex flex-col gap-[2rem] '>
            {cars.map((car)=> <SalesCard car={car}/>)}
        </div>
    </div>
  )
}
