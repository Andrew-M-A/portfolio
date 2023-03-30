import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function About({}: Props) {
  return (
    <motion.div
    className='flex flex-col relative h-screen text-center
    md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
    initial={{ opacity:0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration:1.5 }}
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About </h3>
      <motion.img
      className='mb-20 md:mb:0 flex-shring-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h[600px]'
      initial={{
        x: 200,
        opacity: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      whileInView={{
        x: 0,
        opacity: 1
      }}
      viewport={{ once: true }}
      src='public/next.svg'
      alt='another portrait'
      />
      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>
          Here is a <span className='underline decoration-[#F7AB0A]'>little</span> background
        </h4>
        <p className='text-base'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae ipsum eos nobis maiores dicta eaque delectus, enim laboriosam voluptates iste ex laborum placeat provident possimus. Nobis laborum rem repellendus accusantium.
        Nostrum tenetur nisi ad reiciendis optio quaerat necessitatibus esse voluptate, a, saepe recusandae alias quibusdam consequatur, quidem excepturi! Totam harum odio fugit ex qui tempora recusandae suscipit aspernatur officiis laborum.
        </p>
      </div>
    </motion.div>
  )
}

export default About
