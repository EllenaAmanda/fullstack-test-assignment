import React, { useEffect, useState } from 'react'
import hotel from '../../../public/icon/hotel.svg'
import plane from '../../../public/icon/plane.svg'
import meal from '../../../public/icon/meal.svg'
import duration from '../../../public/icon/time.svg'
import date from '../../../public/icon/date.svg'
import Footer from '../../Footer'
import { useParams } from 'react-router-dom'
import axios from 'axios'
function Detail() {
  const [trip, setTrip] = useState([])
  const {id} = useParams()

  async function getDetailId (){
    try{
      let URL = `http://localhost:3001/api/trips/${id}`
      const response = await axios.get(URL, {
        method: "GET",
        headers: {"Content-Type": "application/json"}
      })
      setTrip(response.data.data);
      
    }catch(e){
      console.error("Error fetching trips:", e);
    }
  }

  useEffect(() => {
    getDetailId()
  }, []);

  console.log(trip.duration)
  return (
<div>
  {trip?.duration ? (
  <>
  <div className='lg:px-60 py-20 bg-neutral-200 w-full'>
        <h1 className='text-4xl font-semibold mb-0'>{trip.title}</h1>
        <p className='text-neutral-400 mb-6 mt-2 font-medium'>{trip.country}</p>

        <img className='w-full rounded' src={trip.image}/>
        {/* grid */}
        <div className='grid grid-cols-5 gap-y-2 my-16'>
          {/* could me mapped */}
          <p className='text-xs text-neutral-500 font-medium'>Accomodation</p>
          <p className='text-xs text-neutral-500 font-medium'>Transportation</p>
          <p className='text-xs text-neutral-500 font-medium'>Eat</p>
          <p className='text-xs text-neutral-500 font-medium'>Duration</p>
          <p className='text-xs text-neutral-500 font-medium'>Date Trip</p>

          <div className='flex gap-3 font-semibold items-center'><img src={hotel}/><p>{trip.accomodation}</p></div>
          <div className='flex gap-3 font-semibold items-center'><img src={plane}/>{trip.transportation}</div>
          <div className='flex gap-3 font-semibold pe-2 items-center'><img src={meal}/>{trip.eat}</div>
          <div className='flex gap-3 font-semibold items-center'><img src={duration}/>{trip.duration.days} Day {trip.duration.nights} Night</div>
          <div className='flex gap-3 font-semibold items-center'><img src={date}/>{trip.date}</div>
        </div>



        <p className='font-semibold mb-2'>Description</p>
        <p className='text-neutral-500 text-justify text-xs'>{trip.description}</p>
        
        <div className='font-semibold text-2xl my-8'>
          <span className='text-amber-500'>IDR. {Math.ceil(trip.price / 12)} </span> / Person
        </div>

        <button className='w-full bg-amber-600 rounded p-1 text-white font-semibold cursor-pointer'>Delete Trip</button>
      </div>
      
  </> ) 
  : <span>Loading ...</span>
  }
    <Footer />
</div>
  )
}

export default Detail