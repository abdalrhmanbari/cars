"use client"

import Form from '@/app/components/form/form'
import React, { useState } from 'react'

export default function Login() {
  const [hand, setHand]= useState(false)

  const handelSubmit=(e:any)=>{
    e.preventDefault()
    setHand(true)

    
  }
  return (
      <form onSubmit={(e)=> handelSubmit(e)} className='container'>
    <div className='  flex items-center justify-center  my-[7rem]'>
      <div className=' flex flex-col gap-6'>
      <div className=' flex flex-col justify-center items-center text-center gap-4'>
        <h1 className=' sm:text-5xl  text-2xl font-bold'>Welcome to ArbeCar</h1>
        <h2 className='sm:text-xl text-sm'>The best site for selling and renting cars</h2>
      </div>
      <div className=' flex flex-col items-center justify-center gap-2 w-[12.5rem] sm:w-[25rem] m-auto'>

      <Form id={'name'} name={'name'} type={'text'} placeholder={'Your Name'}/>
      <Form id={'phone'} name={'phone'} type={'tel'} placeholder={'Your phone'}/>
      <Form id={'email'} name={'email'} type={'email'} placeholder={'Your Email'} />
      <Form id={'password'} name={'password'} type={'password'} placeholder={'Your Password'} />
      {hand &&<div className='  bg-red-400  border-none w-full rounded-md py-1.5 pl-4 pr-20  text-white   sm:text-md sm:leading-6'><h2>login failed.</h2></div> }
      <button type='submit'   className='bg-primary-blue ease-linear rounded-full w-full  text-white mt-10 hover:bg-white hover:text-primary-blue duration-300 font-bold  relative justify-center items-center py-3  outline-none  '>
            Submit
        </button>
        </div>
      </div>

    </div>
        </form>
  )
}
