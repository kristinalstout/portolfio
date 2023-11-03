'use client'
import React from 'react'
import {Cursor, useTypewriter} from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'

type Props = {}

function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: ["Coder","Coffee Lover"],
        loop: true,
        delaySpeed: 2000
    })

    return (
    <div className = "h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
        <BackgroundCircles />
        <img 
        className= "relative rounded-full h-32 w-32 mx-auto object-cover"
        src ="https://media.licdn.com/dms/image/D4E03AQE8--3JhW9ccw/profile-displayphoto-shrink_400_400/0/1672415386371?e=1704326400&v=beta&t=qOUzuxwNHIN8XKP9Io9PjoJwRyJYpzVK7V49u8cvcW8" 
        alt="" />
        <div>
            <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">Software Engineer</h2>
        <h1 className= "text-5xl lg:text-6xl font-semibold px-10">
            <span className= "mr-3">{text}</span>
            <Cursor cursorColor ="#F7AB0A"/>
        </h1>
        <div>
            <button className = "heroButton">About</button>
            <button className = "heroButton">Experience</button>
            <button className = "heroButton">Skills</button>
            <button className = "heroButton">Projects</button>
        
        </div>
        </div>
    </div>
  )
}

export default Hero