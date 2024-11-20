"use client"
import CustomButton from "@/app/components/button/custom-button";
import { member } from "@/app/utils/Types/types";
// import Form from '@/app/components/form/form'
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import * as yup from "yup";
export default function Login() {
  const initialValues:member =  {
    name: "",
    phone: "",
    email: "",
    password: "",
  };
  const onSubmit = (values: member) => {
    console.log(values);
  };
  
  const validationSchema = yup.object ( {
    name: yup.string().required(`Required`),
    phone: yup.number().required(`Required`),
    email: yup.string().email(`Invalid email format`).required(`Required`),
    password: yup.string().required(`Required`)
  })
  const classError= " text-red-600 text-sm"
  const classDiv= " flex flex-col gap-[0.1rem] w-[17rem] sm:w-[25rem]"
  const classLabel= "font-bold text-sm sm:text-lg capitalize"
  const classField="block relative shadow-sm  w-full rounded-md border-0 py-1.5 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
  return (
    <Formik
    initialValues={initialValues}
    onSubmit={onSubmit}
    validationSchema={validationSchema}
    >
      <Form>
        <div className=" flex items-center justify-center  my-[6rem] flex-col ">
            <div className=' flex flex-col gap-6'>
          <div className=' flex flex-col justify-center items-center text-center gap-2'>
            <h1 className=' sm:text-5xl  text-2xl font-bold'>Welcome to ArbeCar</h1>
            <h2 className='sm:text-xl text-sm text-gray-500'>The best site for selling and renting cars</h2>
      </div>
        <div className="flex flex-col items-center justify-center gap-[0.4rem]  m-auto">
        <div className={classDiv}>
          <label className={classLabel}>name</label>
          <Field id="name" name="name" type="text" className={classField }/>
          <span className={classError}><ErrorMessage name="name" /></span>
        </div>
        <div className={classDiv}>
          <label className={classLabel}>phone</label>
          <Field id="phone" name="phone" type="tel" className={classField } />
          <span className={classError}><ErrorMessage name="phone"/></span>
        </div>
        <div className={classDiv}>
          <label className={classLabel}>email</label>
          <Field id="email" name="email" type="email" className={classField }/>
          <span className={classError}><ErrorMessage name="email"/></span>
        </div>
        <div className={classDiv}>
          <label className={classLabel}>password</label>
          <Field id="password" name="password" type="password" className={classField } />
          <span className={classError}><ErrorMessage name="password"/></span>
        </div>
        <button type="submit" className= " capitalize bg-primary-blue ease-linear rounded-full w-full  text-white mt-10 hover:bg-white hover:text-primary-blue duration-300 font-bold  relative justify-center items-center py-3  outline-none ">
            log in
          </button>
        </div>
            </div>
        </div>
      </Form>
    </Formik>
  );
}
