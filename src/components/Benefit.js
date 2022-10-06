import React from 'react'
import { GiCheckMark } from 'react-icons/gi';
function Benefit() {
  return (
    <div name='benefit' className="p-5 mt-8 bg-[#FFFEF1]">
      <h1 className="text-5xl text-center mt-3 text-black font-bold tracking-wide mb-5" data-aos="flip-up">BENEFITS</h1>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-5 items-center justify-center font-[poppins]">
        
        <div className="grid md:grid-cols-2" data-aos="fade-right">
          <div className="flex items-center justify-center">
            <GiCheckMark className="text-black hover:animate-pulse text-center px-2 py-2 mb-3 mt-5 m-5 text-5xl lg:text-5xl rounded-lg bg-[#66CC7B]"/>
          </div>
          <h3 className="text-black mt-3 text-x lg:text-xl tracking-wide text-center md:text-start">Open NFT marketplace</h3>
        </div>

        <div className="grid md:grid-cols-2" data-aos="fade-left">
          <div className="flex items-center justify-center">
            <GiCheckMark className="text-black hover:animate-pulse text-center px-2 py-2 mb-3 mt-5 m-5 text-5xl lg:text-5xl rounded-lg bg-[#66CC7B]"/>
          </div>
          <h3 className="text-black mt-3 text-x lg:text-xl tracking-wide text-center md:text-start">Control Third-party access to your documents from your app.  </h3>
        </div>

        <div className="grid md:grid-cols-2" data-aos="fade-right">
          <div className="flex items-center justify-center">
            <GiCheckMark className="text-black hover:animate-pulse text-center px-2 py-2 mb-3 mt-5 text-5xl lg:text-5xl rounded-lg bg-[#66CC7B]"/>
          </div>
          <h3 className="text-black mt-3 text-x lg:text-xl tracking-wide text-center md:text-start">Get one of one true digital copy of each document.</h3>
        </div>

        <div className="grid md:grid-cols-2" data-aos="fade-left">
          <div className="flex items-center justify-center">
            <GiCheckMark className="text-black hover:animate-pulse text-center px-2 py-2 mb-3 mt-5 text-5xl lg:text-5xl rounded-lg bg-[#66CC7B]"/>
          </div>
          <h3 className="text-black mt-3 text-x lg:text-xl tracking-wide text-center md:text-start">Digital copies are tenable and valid anywhere in the world.</h3>
        </div>

        <div className="grid md:grid-cols-2" data-aos="fade-right">
          <div className="flex items-center justify-center">
            <GiCheckMark className="text-black hover:animate-pulse text-center px-2 py-2 mb-3 mt-5 text-5xl lg:text-5xl rounded-lg bg-[#66CC7B]"/>
          </div>
          <h3 className="text-black mt-3 text-x lg:text-xl tracking-wide text-center md:text-start">All documents verified are searchable via the app.</h3>
        </div>

        <div className="grid md:grid-cols-2" data-aos="fade-left">
          <div className="flex items-center justify-center">
            <GiCheckMark className="text-black hover:animate-pulse text-center px-2 py-2 mb-3 mt-5 text-5xl lg:text-5xl rounded-lg bg-[#66CC7B]"/>
          </div>
          <h3 className="text-black mt-3 text-x lg:text-xl tracking-wide text-center md:text-start">Gives you accessibility on the move.</h3>
        </div>

        <div className="grid md:grid-cols-2" data-aos="fade-right">
          <div className="flex items-center justify-center">
            <GiCheckMark className="text-black hover:animate-pulse text-center px-2 py-2 mb-3 mt-5 text-5xl lg:text-5xl rounded-lg bg-[#66CC7B]"/>
          </div>
          <h3 className="text-black mt-3 text-x lg:text-xl tracking-wide text-center md:text-start">Gives access to Third-party to confirm the Genuity of your documents.</h3>
        </div>
      </div>
    </div>
  )
}

export default Benefit