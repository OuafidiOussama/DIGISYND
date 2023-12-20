import React, { useEffect } from 'react'
import ApartmentCard from '../atoms/ApartmentCard'
import { useDispatch, useSelector } from 'react-redux';
import { getAllApartmentsAction } from '../../redux/actions/apartmentAction';
import { Skeleton } from '@mui/material';

export default function ApartmentCardsContainer({isFlipped, handleFLip, onUpdate, fac}) {
    const dispatch = useDispatch()
    const {payload, loading} = useSelector((state)=>state.getApartments)
    
    useEffect(()=>{
      dispatch(getAllApartmentsAction())
    }, [dispatch])

  return (
    <div className='flex gap-5 flex-wrap w-full '>
        {loading ? <Skeleton width={300} height={150}/>: (payload && payload.apartmentsWithBills.map((apart =><ApartmentCard key={apart._id} apartment={apart} fac={fac} isFlipped={isFlipped[apart._id]} handleFLip={()=>handleFLip(apart._id)} onUpdate={onUpdate}/>)))}
    </div>
  )
}
