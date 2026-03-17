import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LinkButton from './components/LinkButton.jsx'
import ImgText from './components/ImgText.jsx'

import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

function App() {

  return (
      <div className="bg-[#010101] w-dvw h-dvh flex justify-center"> 
      <div className='bg-[#010101] w-dvw  h-dvh p-10 flex flex-col justify-start items-center '>
        <img src="" alt="urimsu profile-picture"/>
        <a className='text-2xl text-bold text-white'  >Urim Sulejmani</a>
        <a className='text-l text-white mb-5'  >Hybrid-Athlete and Traithlete</a>
        <div className="flex gap-6 text-white text-3xl mb-5">
        <a
        className='hover:text-[#f72041]'
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram />
      </a>

      <a
        className='hover:text-[#f72041]'
        href="https://youtube.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaYoutube />
      </a>

      <a
        className='hover:text-[#f72041]'
        href="https://tiktok.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTiktok />
      </a>
        </div>
      <LinkButton text='Strava' link='https://www.strava.com/athletes/156351060'/ >
      <LinkButton text='Supplements code: urimsu' link='https://vitastrong.de/?coupon=urimsu'/ >

      <ImgText text='Running with Passion'  />

        <a className="text-xs text-white">Made By Su-Tech</a>
      </div>
</div>

  )
}

export default App
