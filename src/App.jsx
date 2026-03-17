import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='bg-[#09122C] w-dvw h-dvh p-10 flex flex-col justify-start items-center '>
        <img src="" alt="urimsu profile-picture"/>
        <a className='text-2xl text-white'  >Urim Sulejmani</a>
        <a className="text-xs text-white">Made By Su-Tech</a>
      </div>
  )
}

export default App
