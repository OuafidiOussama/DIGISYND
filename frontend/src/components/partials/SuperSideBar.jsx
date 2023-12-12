import React from 'react'
import { Icon } from '@iconify/react'

export default function SuperSideBar({showSideBar}) {
  return (
    <aside className={`w-80 h-[635px] pt-5 px-12 transition-all duration-300  ${showSideBar? 'translate-x-0 relative':'-translate-x-full absolute'}`}>
        <div className='flex w-full items-center h-14 gap-3 relative cursor-pointer'>
        <Icon icon="material-symbols:dashboard" className='w-9 h-9'/>
        <p className='text-lg font-bold '>DashBoard</p>
        </div>
        <div className='flex w-full items-center h-14 gap-3 relative cursor-pointer'>
        <Icon icon="basil:add-solid" className='w-9 h-9'/>
        <p className='text-lg font-bold '>Add Syndic</p>
        </div>
        <div className='flex w-full items-center h-14 gap-3 relative cursor-pointer'>
        <Icon icon="eos-icons:patch-fixes" className='w-9 h-9'/>
        <p className='text-lg font-bold '>Update Syndic</p>
        </div>
        <div className='flex w-full items-center h-14 gap-3 relative cursor-pointer'>
        <Icon icon="ic:round-delete" className='w-9 h-9'/>
        <p className='text-lg font-bold '>Delete Dyndic</p>
        </div>
        <div className='flex w-full items-center h-14 gap-3 cursor-pointer absolute bottom-0'>
        <Icon icon="solar:logout-2-bold" className='w-9 h-9'/>
        <p className='text-xl font-bold '>LOGOUT</p>
        </div>
    </aside>
  )
}
