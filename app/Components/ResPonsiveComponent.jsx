"use client"
import React from 'react'
import useScreensize from './hooks/useScreenSize'

export const ResPonsiveComponent = ({children}) => {
  const size=useScreensize();
  return (
   <>
    {children({size})}
   </>
  )
}
