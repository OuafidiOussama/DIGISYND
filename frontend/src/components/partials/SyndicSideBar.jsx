import React from 'react'
import {Icon} from '@iconify/react'

export default function SyndicSideBar({showSideBar}) {
  return (
    <aside className={` h-[635px] pt-5 px-12 transition-all duration-300  ${showSideBar? 'translate-x-0 relative':'-translate-x-full absolute'}`}>
        <div className='flex w-full items-center h-14 gap-3 relative cursor-pointer'>
        <Icon icon="material-symbols:dashboard" className='w-9 h-9'/>
        <p className='text-lg font-bold '>DashBoard</p>
        </div>
        <div className='flex w-full items-center h-14 gap-3 relative cursor-pointer'>
        <Icon icon="ant-design:home-filled" className='w-9 h-9'/>
        <p className='text-lg font-bold '>Apartments</p>
        </div>
        <div className='flex w-full items-center h-14 gap-3 relative cursor-pointer'>
        <Icon icon="uil:bill" className='w-9 h-9'/>
        <p className='text-lg font-bold '>Factures</p>
        </div>
        <div className='flex w-full items-center h-14 gap-3 relative cursor-pointer'>
        <Icon icon="gg:profile" className='w-9 h-9'/>
        <p className='text-lg font-bold '>Profile</p>
        </div>
        <div className='flex w-full items-center h-14 gap-3 cursor-pointer absolute bottom-0'>
        <Icon icon="solar:logout-2-bold" className='w-9 h-9'/>
        <p className='text-lg font-bold '>LOGOUT</p>
        </div>
    </aside>
  )
}
