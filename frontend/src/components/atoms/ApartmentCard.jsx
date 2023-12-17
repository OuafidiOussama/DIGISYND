import React from 'react'

export default function ApartmentCard({isFlipped, handleFLip, apartment}) {
  const {apartmentFloor, apartmentNumber, _id, apartmentOwner, createdAt} = apartment
  return (
    <div className={`flip ${isFlipped ? 'flipped' : ''} w-[300px] h-[150px] rounded-xl overflow-hidden flex`}>
        <div className='flip-content '>
          <div className='w-full h-full p-4 relative cursor-pointer flip-back bg-[#d9d9d99a]' onClick={handleFLip} >
            <img src={process.env.PUBLIC_URL+'/images/living-room-2155376_1920.jpg'} alt="" className='w-10 h-10 object-cover rounded-full absolute right-3' onClick={handleFLip}/>
            <p className='text-lg font-bold pb-2'>{apartmentOwner.ownerName}</p>
            <p className='text-lg font-bold pb-2'>{apartmentOwner.cin}</p>
            <p className='text-lg font-bold pb-2'>#{apartmentNumber}</p>
            <p className='text-xs font-semibold text-right'>{createdAt}</p>
          </div>
          <div className='w-full h-full flex flip-front bg-[#d9d9d99a]'>
            <div className='w-2/5 h-full relative flex justify-center items-center cursor-pointer' onClick={handleFLip}>
             <img src={process.env.PUBLIC_URL+'/images/living-room-2155376_1920.jpg'} alt="" className='w-full h-full object-cover absolute'/>
             <div className='bg-black w-full h-full opacity-50 absolute'></div>
             <p className='text-center font-bold text-5xl text-white z-10'>#{apartmentNumber}</p>
            </div>
            <div className='p-5 h-full w-3/5 flex flex-col justify-around items-center'>
              <div className='w-full'>
                <p className='text-center font- text-3xl'>floor: #{apartmentFloor}</p>
              </div>
              <button className='bg-green-500 w-full py-1.5 rounded-md text-white font-bold text-lg'>Payed</button>
            </div>
          </div>
        </div>
    </div>
  )
}