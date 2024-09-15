import CustomButton from '@/app/components/button/custom-button'
import React from 'react'

export default function Contact() {
  return (
    <div className='container mt-[8rem] mb-[5rem]'>
        <div className=' w-full px-[2rem] py-[4rem] bg-primary-blue opacity-75 rounded-xl flex flex-col sm:flex-row justify-between items-center'>
            <div className=' w-full text-white flex flex-col  gap-[1rem]'>
                    <h1 className='   text-3xl'>Do you want to sell your car at the possible price ??</h1>
                    <h2 className=' text-2xl'>Contact us now and do not hesitate!.</h2>
            </div>
            <div>
                <CustomButton
                id={"/contact_us"}
                title='Contact now'
                textStyle=' bg-white text-primary-blue rounded-full py-[0.7rem]  text-center min-w-[9.4rem] font-bold text-base sm:text-lg'
                />
            </div>
        </div>
    </div>
  )
}
