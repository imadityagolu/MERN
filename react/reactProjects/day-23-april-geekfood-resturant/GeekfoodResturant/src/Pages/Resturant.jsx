import { useState } from 'react'
import Banner from '../Components/Banner';
import Feedback from '../Components/Feedback';
import Split from '../Components/Split';
import Data from "../Components/ResturantReview.js"
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineRestaurant } from "react-icons/md";

function Resturant() {

  const [searchTerm, setSearchTerm] = useState("");
  const [minRating, setMinRating] = useState(0);
  
  const filteredData = Data.filter(
    (obj) =>
      obj.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      obj.rating >= minRating
  );

  return (
    <>
<div className="mt-5">
  <div className="mx-5">

    
    <div className="flex justify-between items-center mb-4">
      
      <div className="mb-4 mt-24 mx-8">
      <input
        type="text"
        placeholder="Search by restaurants..." className="border rounded p-2"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      </div>

      <div className="mb-4 mt-24 mx-8"><label for="minRating" className="mr-2">
        Minimum Rating:</label>
        <input
          type="number"
          id="minRating"
          className="border rounded p-2"
          min={0}
          max={5}
          step={0.5}
          value={minRating}
          onChange={(e) => setMinRating(parseFloat(e.target.value))}
        />
      </div>
    </div>


  </div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">

      {filteredData.map((obj) => (
        <div key={obj._id.$oid}>

      <div className="max-w-md mx-auto rounded-lg overflow-hidden shadow-md bg-white">
        
        <div className="px-6 py-4">
          <div className="items-center mb-2">

          <h2 className="text-gray-800 font-semibold text-xl">{obj.name}</h2>

        <h2 className="flex justify-self-start"><FaLocationDot className="text-gray-700 mt-1"/>{obj.address}</h2>
          
          <p className="flex">
            Rating: {obj.rating}
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" className="w-5 h-5 text-yellow-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
              </path>
            </svg>
          </p>

          </div>
          </div>

          <div className="bg-gray-100 p-3">
            <p className="flex p-1 gap-2"><MdOutlineRestaurant  className="text-green-500"/>{obj.type_of_food}</p>

            <a href={obj.URL} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Visit Menu</a>
          </div>

      </div>
    </div>
      ))}
</div>

<div class="flex justify-center gap-1 text-xs font-medium mt-4">

<ol class="flex justify-center gap-1 text-xs font-medium mt-4">

<li>
  <a href="#" class="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 opacity-50 cursor-not-allowed">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
    <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd">
    </path>
    </svg>
  </a>
</li>

<li><a href="#" class="block h-8 w-8 rounded border bg-blue-600 text-white text-center leading-8 cursor-pointer">1</a></li>

<li><a href="#" class="block h-8 w-8 rounded border bg-white text-gray-900 text-center leading-8 cursor-pointer">2</a></li>

<li><a href="#" class="block h-8 w-8 rounded border bg-white text-gray-900 text-center leading-8 cursor-pointer">3</a></li>

<li><a href="#" class="block h-8 w-8 rounded border bg-white text-gray-900 text-center leading-8 cursor-pointer">4</a></li>

<li><a href="#" class="block h-8 w-8 rounded border bg-white text-gray-900 text-center leading-8 cursor-pointer">5</a></li>

<li><a href="#" class="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></a></li>

</ol>
</div>

</div>
    </>
  )
}

export default Resturant;