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

  console.log(trip)
  return (
<div>
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

        <div className='flex gap-3 font-semibold'><img src={hotel}/>Hotel name</div>
        <div className='flex gap-3 font-semibold'><img src={plane}/>Flight name</div>
        <div className='flex gap-3 font-semibold'><img src={meal}/>BnB included</div>
        <div className='flex gap-3 font-semibold'><img src={duration}/>Days stayed</div>
        <div className='flex gap-3 font-semibold'><img src={date}/>Booking date</div>
      </div>



      <p className='font-semibold mb-2'>Description</p>
      <p className='text-neutral-500 text-justify text-xs'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus fugiat nam eaque quos quaerat fuga quae, vero amet at sunt veritatis iste dolore neque aliquid exercitationem, nemo a molestias reprehenderit? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt ad vitae explicabo optio quibusdam accusamus quis dolores sequi quidem culpa dicta aliquam quam quas, voluptate amet consequuntur necessitatibus sunt earum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusamus repellat soluta non ipsam facere iure qui veniam, eaque alias dolorem odit. Eaque autem, excepturi a repellat harum officiis architecto.</p>
      
      <div className='font-semibold text-2xl my-8'>
        <span className='text-amber-500'>Price</span> / Person
      </div>

      <button className='w-full bg-amber-600 rounded p-1 text-white font-semibold'>Delete Trip</button>

      
    </div>

    <Footer />
</div>
  )
}

export default Detail