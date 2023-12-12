import React from 'react'
import { Icon } from '@iconify/react';

export default function SyndicCard() {
  return (
    <div className='bg-white w-96 h-36 rounded-xl flex '>
        <div className='w-2/5 flex items-center justify-center'>
            <div className='w-24 h-24 bg-red-500 rounded-full flex justify-center items-center'>
            <img src={process.env.PUBLIC_URL+"/images/bald-eagle-550804_1280.jpg"} alt="photo" className='w-[90px] h-[90px] object-cover rounded-full border- border-white' />
            </div>
        </div>
        <div className='w-3/5 h-full py-5 flex flex-col justify-center pr-3'>
            <p className='text-xl font-bold'>Syndic Name</p>
            <div className='flex my-5'>
            <Icon icon="icomoon-free:location2" className='w-5 h-5 '/>
            <p>localisation de oussama</p>
            </div>
            <div className='flex w-full justify-end gap-3'>
            <Icon icon="bx:edit" className='w-8 h-8 text-green-700 cursor-pointer'/>
            <Icon icon="ic:sharp-delete" className='w-8 h-8 text-red-700 cursor-pointer'/>
            </div>
        </div>
    </div>
  )
}
