import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function Background({}: Props) {
  return (
    <div className='relative flex justify-center items-center'>
      <div className='absolute border-[#333333] rounded-full h-[200px] w-[200px] mt-52 hover:animate-ping'/>
      <div className='absolute border-[#333333] rounded-full h-[300px] w-[300px] mt-52 animate-pulse' />
      <div className='absolute border-[#333333] rounded-full h-[500px] w-[500px] mt-52 animate-pulse' />
      <div className='absolute border-[#333333] rounded-full h-[650px] w-[650px] mt-52 animate-pulse' />
      <div className='absolute border-[#333333] rounded-full h-[800px] w-[800px] mt-52 animate-pulse'/>
    </div>
  )
}

export default Background
