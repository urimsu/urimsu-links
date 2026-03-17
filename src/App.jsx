import { useState } from 'react'
import urimRunning from './assets/urim_running.png'
import urimSwimming from './assets/urim_swimming.jpg'
import './App.css'
import LinkButton from './components/LinkButton.jsx'
import ImgText from './components/ImgText.jsx'

import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

function App() {

  return (
      <div className="bg-[#010101] w-dvw h-dvh flex justify-center"> 
      <div className='bg-[#010101] w-dvw  h-dvh p-10 flex flex-col justify-start items-center '>
        <img src={urimSwimming} className='rounded-full w-25 mb-5'  alt="urimsu profile-picture"/>
        <a className='text-2xl text-bold text-white'  >Urim Sulejmani</a>
        <a className='text-l text-white mb-5'  >Hybrid-Athlete and Traithlete</a>
        <div className="flex gap-6 text-white text-3xl mb-5">
        <a
        className='hover:text-[#f72041]'
        href="https://instagram.com/urimsu"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram />
      </a>

      <a
        className='hover:text-[#f72041]'
        href="https://youtube.com/@urimsu"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaYoutube />
      </a>

      <a
        className='hover:text-[#f72041]'
        href="https://tiktok.com/@urim.su"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTiktok />
      </a>
        </div>
      <LinkButton text='Strava' link='https://www.strava.com/athletes/156351060'/ >
      <LinkButton text='Supplements code: urimsu' link='https://vitastrong.de/?coupon=urimsu'/ >

      <ImgText text='Running with Passion' img={urimRunning}  />

      <footer className=" pt-4 flex justify-center">
  <a 
    href="https://su-tech.org" 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-sm text-white font-medium uppercase tracking-wider hover:text-[#f72041] transition-colors duration-300"
  >
    Made by ©Su-Tech
  </a>
</footer>
      </div>
</div>

  )
}

export default App
