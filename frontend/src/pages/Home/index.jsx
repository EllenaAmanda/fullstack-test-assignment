import React, { useEffect, useState } from "react";
import Footer from "../../Footer";
import axios from 'axios';
import { Link } from "react-router-dom";


const Home = () => {

  const [tripsDatas, setTripDatas] = useState([])

  useEffect(() => {
    getDatas();
}, []);

  const getDatas = async() =>{
    try{
      let URL = "http://localhost:3001/api/trips";
      const response = await axios.get(URL, {
        method: "GET",
        headers: {"Content-Type": "application/json"}
      })
      setTripDatas(response.data.data);
      // console.log(response)
      
    }catch(error){
      console.error("Error fetching trips:", error);
    }
  }

  // console.log(tripsDatas[0].title)

  return (
    <div>
        <div className="p-24 bg-neutral-200 min-h-screen">
          <div className="flex justify-between align-middle mb-8">
              <h1 className="text-3xl font-medium">Income Trip</h1>
              <button className="bg-amber-400 text-white px-5 py-1 rounded cursor-pointer">Add Trip</button>
          </div>

          {/* card */}
              
              <div className="flex flex-wrap justify-evenly gap-y-10">
                {/* mapping starts here */}

                
                  {tripsDatas.map((items, index) => (
                    <Link key={items.id} to={"/detail/" + items.id}>
                      <div className="w-sm bg-white rounded p-2" key={index}>
                          <div className="relative">
                            <img className="w-full h-60 object-cover object-center rounded" src={items.image}/>
                            <p className="bg-white p-2 right-0 absolute top-3 rounded-s text-sm">{items.quota}/15</p>
                          </div>
                          
                          <h3 className="w-auto text-xl truncate my-4">{items.title}</h3>
                          <div className="flex justify-between">
                              <p className="text-amber-500 font-medium">IDR. {items.price}</p>
                              <p className="text-neutral-600 font-medium">{items.country}</p>
                          </div>
                      </div>
                    </Link>
                  )) }
                
                
                
              </div>
              
        </div>
        <Footer />
    </div>
  );
};

export default Home;
