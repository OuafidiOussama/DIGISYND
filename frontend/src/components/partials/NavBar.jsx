import React from 'react'
import {Icon} from '@iconify/react'
import { useSelector } from 'react-redux'

export default function NavBar({handleSideBar}) {
  const userInfo = useSelector(state=>state.login.userInfo.user)
  return (
    <>
      <nav className='w-screen h-20 flex justify-between items-center px-11 relative py-2 select-none'>
        <div className='flex h-full items-center'>
          <Icon icon="iconamoon:menu-burger-horizontal" className='text-4xl cursor-pointer' onClick={handleSideBar}/>
          <p className='-top-1 pl-5 text-5xl relative font-black text-transparent bg-clip-text bg-gradient-to-r from-[#1E88E5] to-[#5E35B1] py-0 '>DIGISYND</p>
        </div>
        <div className='flex h-full items-center w-52 bg-[#d9d9d99a] rounded-full px-1 justify-between'>
          <p className='ml-3 w-32 truncate font-semibold text-md '>{userInfo.firstName + userInfo.lastName}</p>
          <img src={userInfo.picture || process.env.PUBLIC_URL+'/images/bald-eagle-550804_1280.jpg'} alt="logo" className='w-14 h-14 rounded-full object-cover' />
        </div>
      </nav>
    </>
  )
}
