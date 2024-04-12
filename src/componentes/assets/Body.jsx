import React from "react";
import hero from './img/hero.jpg';

function Body() {
    return (
      <article className="relative overflow-hidden shadow transition hover:shadow-lg">
  <img
    alt=""
    src={hero}
    className="absolute inset-0 h-full w-full object-cover"
  />

  <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
    <div className="p-4 sm:p-6">

    <a className="block text-center">
     <h3 className="mt-0.5 text-lg text-white">Tenemos años de experiencia que nos respaldan</h3>
    </a>

      <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
        
      </p>
    </div>
  </div>
</article>

    )
}

export default Body;