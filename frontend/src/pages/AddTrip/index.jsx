import React, { useState } from "react";
import Footer from "../../Footer";

const AddTrip = () => {
  const [trip, setTrip] = useState({
    title: "",
    country: "",
    accommodation: ""
  })

  function handleChange(e) {
    
    setTrip({
      ...trip,
      [e.target.name]: e.target.value
    })
  }
  return (
  <div>
    <div className="bg-neutral-100 p-24">
      <h1 className="text-4xl font-semibold mb-6">Add Trip</h1>

      <form className="flex flex-col gap-6">
        <div>
          <label className="mb-2 font-medium block">Title Trip</label>
          <input name="trip-title" onChange={handleChange} type="text" className="p-2 w-full bg-neutral-200 rounded border border-neutral-300" ></input>
        </div>

        <div>
          <label className="mb-2 block font-medium">Country</label>
          <select className="p-2 w-full bg-neutral-200 rounded border border-neutral-300">
            <option>option 1</option>
            <option></option>
            <option></option>
          </select>
        </div>
        
        <div>
          <label className="mb-2 font-medium block">Accomodation</label>
          <input type="text" className="p-2 w-full bg-neutral-200 rounded border border-neutral-300" ></input>
        </div>
        
      </form>
      
    </div>
    <Footer />
  </div>
  
  )
};

export default AddTrip;
