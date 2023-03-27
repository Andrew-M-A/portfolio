import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import Background from './Background'

type Props = {}

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
    "Hi, I'm Andrew Almeida. Nice to meet you",
    "Developer",
    "Designer",
    "Creator"
  ],
    loop: true,
    delaySpeed: 2000
  })
  return (
    <div className='flex flex-col space-y-8 items-center justify-center h-screen text-center overflow-hidden'>
      <Background/>
    <h1>
      <span>{text}</span>
      <Cursor cursorColor='red'/>
    </h1>
    </div>
  )
}

export default Hero
