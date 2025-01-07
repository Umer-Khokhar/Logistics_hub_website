import React from 'react'
import { images } from "../constants";
const ReuseHero = ({title, description}) => {
  return (
    <div className="map-hero mt-14 relative bg-mapColor bg-gradient-to-r from-mapColor to-gray-900 text-gray-100 h-[18rem] flex justify-center items-center">
        <div
          className="img z-10 absolute inset-0 bg-cover bg-center transition-all duration-300"
          style={{ backgroundImage: `url(${images.mapHero})` }}
        ></div>
        <div className="content z-30 relative p-4 text-center mx-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-5">
           {title}
          </h1>
          <p className="md:text-2xl">
            {description}
          </p>
        </div>
      </div>
  )
}

export default ReuseHero