import React, { useState } from "react";
import Footer from "../../Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddTrip = () => {
  const navigate = useNavigate()
  const [trip, setTrip] = useState({
    title: "",
    description: "",
    image:"",
    country: "",
    accomodation: "",
    transportation: "",
    eat: "",
    duration: {
      days: 0,
      nights: 0,
    },
    date: "",
    quota:0,
    price:0,
  })

  function handleChange(e) {
    const { name, value } = e.target;
  
    setTrip((prevTrip) => ({
      ...prevTrip,
      ...(name in prevTrip.duration
        ? { duration: { ...prevTrip.duration, [name]: Number(value) } }
        : { [name]: value })
    }));
  }

  const addTrip = async (newTrip) => {
    try {
        let URL = "https://rolling-marchelle-rasunasaid-2ad551ab.koyeb.app/api/trips";
        const response = await axios.post(URL, newTrip, {
          headers: {
              "Content-Type": "application/json",
          },
      });

      console.log(response.data.message);
      return response.data;
        
        
    } catch (error) {
        console.error("Error adding trip:", error);
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault()

    console.log(trip)
    await addTrip(trip)

    navigate('/')
  }

  
  return (
  <div>
    <div className="bg-neutral-100 p-24">
      <h1 className="text-4xl font-semibold mb-6">Add Trip</h1>

      <form className="flex flex-col gap-6">
        <div>
          <label className="mb-2 font-medium block">Title Trip</label>
          <input name="title" onChange={handleChange} type="text" className="p-2 w-full bg-neutral-200 rounded border border-neutral-300" ></input>
        </div>

        <div>
          <label className="mb-2 block font-medium">Country</label>
          <select onChange={handleChange} name="country" className="p-2 w-full bg-neutral-200 rounded border border-neutral-300">
            <option>Select Country</option>
            <option>Australia</option>
            <option>Indonesia</option>
            <option>Japan</option>
            <option>South Korea</option>
          </select>
        </div>
        
        <div>
          <label className="mb-2 font-medium block">Accomodation</label>
          <input onChange={handleChange} name="accomodation" type="text" className="p-2 w-full bg-neutral-200 rounded border border-neutral-300" ></input>
        </div>
        
        <div>
          <label className="mb-2 font-medium block">Transportation</label>
          <input onChange={handleChange} name="transportation" type="text" className="p-2 w-full bg-neutral-200 rounded border border-neutral-300" ></input>
        </div>

        <div>
          <label className="mb-2 font-medium block">Eat</label>
          <input onChange={handleChange} name="eat" type="text" className="p-2 w-full bg-neutral-200 rounded border border-neutral-300" ></input>
        </div>

        <div>
          <label className="mb-2 font-medium block">Duration</label>
          <input onChange={handleChange} name="days" type="number" className="p-2 bg-neutral-200 rounded border border-neutral-300 "></input>
          <label className="mx-3">Day</label>
          <input onChange={handleChange} name="nights" type="number" className="p-2 bg-neutral-200 rounded border border-neutral-300 me-3"></input>
          <label>Night</label>
        </div>

        <div>
          <label className="mb-2 font-medium block">Date Trip</label>
          <input onChange={handleChange} name="date" type="text" className="p-2 w-full bg-neutral-200 rounded border border-neutral-300" ></input>
        </div>

        <div>
          <label className="mb-2 font-medium block">Price</label>
          <input onChange={handleChange} name="price" type="number" className="p-2 w-full bg-neutral-200 rounded border border-neutral-300" ></input>
        </div>

        <div>
          <label className="mb-2 font-medium block">Quota</label>
          <input onChange={handleChange} name="quota" type="number" className="p-2 w-full bg-neutral-200 rounded border border-neutral-300" ></input>
        </div>

        <div>
          <label className="mb-2 font-medium block">Description</label>
          <textarea onChange={handleChange} name="description" type="text" className=" p-2 w-full bg-neutral-200 rounded border border-neutral-300" ></textarea>
        </div>

        <div>
          <label className="mb-2 font-medium block">Image URL</label>
          <input onChange={handleChange} name="image" type="text" className=" p-2 w-full bg-neutral-200 rounded border border-neutral-300" ></input>
        </div>

        <button type="submit" onClick={handleSubmit} className="bg-amber-400 text-white px-5 py-1 rounded cursor-pointer w-48 block mx-auto">Add trip</button>

      </form>
      
    </div>
    <Footer />
  </div>
  
  )
};

export default AddTrip;
