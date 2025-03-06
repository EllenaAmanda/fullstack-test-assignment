import React from "react";
import Footer from "../../Footer";

const Home = () => {
  return (
    <div>
        <div className="p-24 bg-neutral-200 min-h-screen">
          <div className="flex justify-between align-middle mb-8">
              <h1 className="text-3xl font-medium">Income Trip</h1>
              <button className="bg-amber-400 text-white px-5 py-1 rounded ">Add Trip</button>
          </div>

          {/* card */}
              
              <div className="flex flex-wrap justify-evenly gap-y-10">
                {/* mapping starts here */}
                <div className="w-sm bg-white rounded p-2">
                  <div className="relative">
                    <img className="w-fit h-60 object-cover object-center rounded" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Sydney_Opera_House_and_Harbour_Bridge_Dusk_%282%29_2019-06-21.jpg/800px-Sydney_Opera_House_and_Harbour_Bridge_Dusk_%282%29_2019-06-21.jpg"/>
                    <p className="bg-white p-2 right-0 absolute top-3 rounded-s">quota</p>
                  </div>
                  
                  <h3 className="w-fit text-xl">title</h3>
                  <div className="flex justify-between">
                      <p className="text-amber-500">IDR. Price</p>
                      <p className="text-neutral-600">location</p>
                  </div>
                </div>

                <div className="w-sm bg-white rounded p-2">
                  <div className="relative">
                    <img className="w-fit h-60 object-cover object-center rounded" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Sydney_Opera_House_and_Harbour_Bridge_Dusk_%282%29_2019-06-21.jpg/800px-Sydney_Opera_House_and_Harbour_Bridge_Dusk_%282%29_2019-06-21.jpg"/>
                    <p className="bg-white p-2 right-0 absolute top-3 rounded-s">quota</p>
                  </div>
                  
                  <h3 className="w-fit text-xl">title</h3>
                  <div className="flex justify-between">
                      <p className="text-amber-500">IDR. Price</p>
                      <p className="text-neutral-600">location</p>
                  </div>
                </div>

                <div className="w-sm bg-white rounded p-2">
                  <div className="relative">
                    <img className="w-fit h-60 object-cover object-center rounded" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Sydney_Opera_House_and_Harbour_Bridge_Dusk_%282%29_2019-06-21.jpg/800px-Sydney_Opera_House_and_Harbour_Bridge_Dusk_%282%29_2019-06-21.jpg"/>
                    <p className="bg-white p-2 right-0 absolute top-3 rounded-s">quota</p>
                  </div>
                  
                  <h3 className="w-fit text-xl">title</h3>
                  <div className="flex justify-between">
                      <p className="text-amber-500">IDR. Price</p>
                      <p className="text-neutral-600">location</p>
                  </div>
                </div>

                <div className="w-sm bg-white rounded p-2">
                  <div className="relative">
                    <img className="w-fit h-60 object-cover object-center rounded" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Sydney_Opera_House_and_Harbour_Bridge_Dusk_%282%29_2019-06-21.jpg/800px-Sydney_Opera_House_and_Harbour_Bridge_Dusk_%282%29_2019-06-21.jpg"/>
                    <p className="bg-white p-2 right-0 absolute top-3 rounded-s">quota</p>
                  </div>
                  
                  <h3 className="w-fit text-xl">title</h3>
                  <div className="flex justify-between">
                      <p className="text-amber-500">IDR. Price</p>
                      <p className="text-neutral-600">location</p>
                  </div>
                </div>

                <div className="w-sm bg-white rounded p-2">
                  <div className="relative">
                    <img className="w-fit h-60 object-cover object-center rounded" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Sydney_Opera_House_and_Harbour_Bridge_Dusk_%282%29_2019-06-21.jpg/800px-Sydney_Opera_House_and_Harbour_Bridge_Dusk_%282%29_2019-06-21.jpg"/>
                    <p className="bg-white p-2 right-0 absolute top-3 rounded-s">quota</p>
                  </div>
                  
                  <h3 className="w-fit text-xl">title</h3>
                  <div className="flex justify-between">
                      <p className="text-amber-500">IDR. Price</p>
                      <p className="text-neutral-600">location</p>
                  </div>
                </div>
                
              </div>
              
        </div>
        <Footer />
    </div>
  );
};

export default Home;
