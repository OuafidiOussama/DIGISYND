import React, { useState } from 'react'
import NavBar from '../components/partials/NavBar'
import Card from '../components/atoms/Card'
import ApartmentCard from '../components/atoms/ApartmentCard';
import SuperSideBar from '../components/partials/SuperSideBar';

export default function SyndicDash() {
  const [isFlipped, setFlipped] = useState(false);
  const [showSideBar, setSideBar] = useState(false);
  const handleFLip = ()=>{
    setFlipped(!isFlipped)
  }
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
            <div className='h-full'>
              <div className='min-h-full w-full bg-white overflow-y-auto rounded-xl p-5'>
                <ApartmentCard isFlipped={isFlipped} handleFLip={handleFLip}/>  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
