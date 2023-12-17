import React, { useEffect } from 'react'
import ApartmentCard from '../atoms/ApartmentCard'
import { useDispatch, useSelector } from 'react-redux';
import { getAllApartmentsAction } from '../../redux/actions/apartmentAction';

export default function ApartmentCardsContainer({isFlipped, handleFLip}) {
    const dispatch = useDispatch()
    const {payload, loading} = useSelector((state)=>state.getApartments)
    useEffect(()=>{
        dispatch(getAllApartmentsAction())
      }, [dispatch])

  return (
    <div className='flex gap-5 flex-wrap w-full '>
        {payload && payload.apartments.map((apart =><ApartmentCard key={apart._id} apartment={apart} isFlipped={isFlipped} handleFLip={handleFLip}/>))}
    </div>
  )
}
