"use client"
import ErrorPage from '@/app/components/handel/error-page'
import React from 'react'

export default function Error({error}:{error:Error}) {
  return (
    <ErrorPage error={error}/>
  )
}
