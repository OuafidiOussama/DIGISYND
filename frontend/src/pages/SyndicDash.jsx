import React, { useState } from 'react'
import NavBar from '../components/partials/NavBar'
import Card from '../components/atoms/Card'
import SyndicSideBar from '../components/partials/SyndicSideBar';
import ApartmentCardsContainer from '../components/containers/ApartmentCardsContainer';
import {Icon} from '@iconify/react'
import ApartmentForm from '../components/partials/ApartmentForm';

export default function SyndicDash() {
  const [isFlipped, setFlipped] = useState(false);
  const [showSideBar, setSideBar] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleFLip = ()=>{
    setFlipped(!isFlipped)
  }
  const handleSideBar = ()=>{
    setSideBar(!showSideBar)
  }
  
  const handleForm = ()=>{
    setShowForm(!showForm)
  }

  return (
    <div className='duration-300 transition-all'>
      <NavBar handleSideBar={handleSideBar} />
      <div className='flex relative'>
        <SyndicSideBar showSideBar={showSideBar}  />
        <div className='py-2 px-10 w-full overflow-hidden relative'>
          <div className='bg-[#d9d9d99a] w-full h-[600px] rounded-2xl flex flex-col gap-5 p-5'>
            <div className='w-full flex justify-between'>
              <Card bg="bg-[#5E35B1]" circleB="bg-[#4A2597]" circleS="bg-[#532AA5]" income="$1000.00" label="Monthly Earnings" icon="mdi:cash-register" />
              <Card bg="bg-[#1E88E5]" circleB="bg-[#096CC2]" circleS="bg-[#7DBBF1]" income="3" label="Reserved Apartments" icon="ant-design:home-filled" />
              <Card bg="bg-[#FFCB42]" circleB="bg-[#FFB800]" circleS="bg-[#FFEBB7]" income="15" label="Factures" icon="uil:bill" />
            </div>
            <div className='h-96 overflow-y-auto'>
              <div className='min-h-full w-full bg-white overflow-y-auto rounded-xl p-5 relative'>
                <ApartmentCardsContainer isFlipped={isFlipped} handleFLip={handleFLip} />
                {showForm ? '' :<div onClick={handleForm} className='w-28 h-full bg-blue-200 absolute top-0 right-0 flex justify-center items-center cursor-pointer opacity-50 hover:opacity-100 duration-300 transition-all'>
                  <Icon icon='fluent:add-12-filled' className='w-20 h-20 opacity-25'/>
                </div>}
              </div>
            </div>
          </div>
        </div>
        <ApartmentForm showForm={showForm} handleForm={handleForm} setShowForm={setShowForm}/>
      </div>
    </div>
  )
}
