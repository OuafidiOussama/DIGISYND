import React, { useState } from 'react'
import NavBar from '../components/partials/NavBar'
import SuperSideBar from '../components/partials/SuperSideBar';
import SyndicCard from "../components/atoms/SyndicCard"

export default function SyndicDash() {
  const [showSideBar, setSideBar] = useState(false);
  const handleSideBar = ()=>{
    setSideBar(!showSideBar)
  }

  return (
    <div className='duration-300 transition-all'>
      <NavBar handleSideBar={handleSideBar} />
      <div className='flex '>
        <SuperSideBar showSideBar={showSideBar}  />
        <div className='py-2 px-10 w-full overflow-hidden'>
          <div className='bg-[#d9d9d99a] w-full h-[600px] rounded-2xl flex flex-col gap-5 p-5'>
            <SyndicCard />
          </div>
        </div>
      </div>
    </div>
  )
}
