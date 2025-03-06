import React from 'react'

function Detail() {
  return (
    <div className='lg:px-60 py-20 bg-neutral-200 w-full'>
      <h1 className='text-4xl font-semibold mb-0'>Title</h1>
      <p className='text-neutral-400 mb-6 font-medium'>location</p>

      <img className='w-full rounded' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Sydney_Opera_House_and_Harbour_Bridge_Dusk_%282%29_2019-06-21.jpg/800px-Sydney_Opera_House_and_Harbour_Bridge_Dusk_%282%29_2019-06-21.jpg'/>
      {/* grid */}
      <div>
        
      </div>



      <p className='font-semibold'>Description</p>
      <p className='text-neutral-500 text-sm text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus fugiat nam eaque quos quaerat fuga quae, vero amet at sunt veritatis iste dolore neque aliquid exercitationem, nemo a molestias reprehenderit? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt ad vitae explicabo optio quibusdam accusamus quis dolores sequi quidem culpa dicta aliquam quam quas, voluptate amet consequuntur necessitatibus sunt earum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusamus repellat soluta non ipsam facere iure qui veniam, eaque alias dolorem odit. Eaque autem, excepturi a repellat harum officiis architecto.</p>
      
      <div className='font-semibold text-2xl my-8'>
        <span className='text-amber-500'>Price</span> / Person
      </div>

      <button className='w-full bg-amber-600 rounded p-1 text-white font-semibold'>Delete Trip</button>
    </div>
  )
}

export default Detail