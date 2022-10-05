import React from 'react'
import { CgFileDocument } from 'react-icons/cg';
import { GoVerified } from 'react-icons/go';
import { GrCertificate } from 'react-icons/gr';
import { BiMoney } from 'react-icons/bi';
import { MdBusiness } from 'react-icons/md';
import { FcDocument } from 'react-icons/fc';
import { TbBadge } from 'react-icons/tb';
import { AiFillGift } from 'react-icons/ai';
function Features() {
  return (
    <div name='feature' className="p-5 mt-8">
      <h1 className="text-5xl text-center mt-3 text-white font-bold tracking-wide mb-5">FEATURES</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 place-items-center">

        <div className="bg-white px-6 py-4 rounded-lg shadow-[20px] h-52 lg:w-[265px] m-10 md:w-[320px] w-[300px] flex items-center justify-center hover:bg-[#0ACC5A] hover:text-white transition-color duration-200">
          <div className="grid place-items-center">
          <CgFileDocument className="text-7xl text-center flex items-center justify-center border-2  border-green-700 rounded-full px-3 py-3 hover:bg-[#75D95B] hover:border-none transition-color duration-200 hover:text-white"/>
          <h1 className="text-black  mb-3 mt-3 items-center text-2xl text-center">Document Minting</h1>  
          </div>
        </div>

        <div className="bg-white px-6 py-4 mb-3 mt-3 rounded-lg shadow-[20px] h-52 lg:w-[275px] m-10 md:w-[320px] w-[300px] flex items-center justify-center hover:bg-[#0ACC5A] hover:text-white transition-color duration-200">
        <div className="grid place-items-center">
          <GoVerified className="text-7xl text-center flex items-center justify-center border-2  border-green-700 rounded-full px-3 py-3 hover:bg-[#75D95B] hover:border-none transition-color duration-200 hover:text-white"/>
          <h1 className="text-black text-2xl text-center mt-3">Document verification</h1>
        </div>
        </div>

        <div className="bg-white px-6 py-4  mb-3 mt-3 rounded-lg shadow-[20px] h-52 lg:w-[265px] m-10 md:w-[320px] w-[300px] flex items-center justify-center hover:bg-[#0ACC5A] hover:text-white transition-color duration-200">
        <div className="grid place-items-center">
          <TbBadge className="text-7xl text-center flex items-center justify-center border-2  border-green-700 rounded-full px-3 py-3 hover:bg-[#75D95B] hover:border-none transition-color duration-200 hover:text-white"/>
          <h1 className="text-black items-center text-2xl text-center mt-3">Originality Badge/unique i.d</h1>
        </div>
        </div>

        <div className="bg-white px-6 py-4  mb-3 mt-3 rounded-lg shadow-[20px] h-52 lg:w-[275px] m-10 md:w-[320px] w-[300px] flex items-center justify-center hover:bg-[#0ACC5A] hover:text-white transition-color duration-200">
        <div className="grid place-items-center">
          <GrCertificate className="text-7xl text-center flex items-center justify-center border-2  border-green-700 rounded-full px-3 py-3 hover:bg-[#75D95B] hover:border-none transition-color duration-200 hover:text-white"/>
          <h1 className="text-black items-center text-2xl text-center mt-3">Digital document certification</h1>
        </div>
        </div>

        <div className="bg-white px-6 py-4 mb-3 mt-3 rounded-lg shadow-[20px] h-52 lg:w-[275px] m-10 md:w-[320px] w-[300px] flex items-center justify-center hover:bg-[#0ACC5A] hover:text-white transition-color duration-200">
        <div className="grid place-items-center">
          <BiMoney className="text-7xl text-center flex items-center justify-center border-2  border-green-700 rounded-full px-3 py-3 hover:bg-[#75D95B] hover:border-none transition-color duration-200 hover:text-white"/>
          <h1 className="text-black items-center text-2xl text-center mt-3">Document/asset Lookup</h1>
        </div>
        </div>

        <div className="bg-white px-6 py-4  mb-3 mt-3 rounded-lg shadow-[20px] h-52 lg:w-[275px] m-10 md:w-[320px] w-[300px] flex items-center justify-center hover:bg-[#0ACC5A] hover:text-white transition-color duration-200">
        <div className="grid place-items-center">
          <AiFillGift className="text-7xl text-center flex items-center justify-center border-2  border-green-700 rounded-full px-3 py-3 hover:bg-[#75D95B] hover:border-none transition-color duration-200 hover:text-white"/>
          <h1 className="text-black items-center text-2xl mt-3">Nft Marketplace </h1>
        </div>
        </div>

        <div className="bg-white px-6 py-4  mb-3 mt-3 rounded-lg shadow-[20px] h-52 lg:w-[275px] m-10 md:w-[320px] w-[300px] flex items-center justify-center hover:bg-[#0ACC5A] hover:text-white transition-color duration-200">
        <div className="grid place-items-center">
          <MdBusiness className="text-7xl text-center flex items-center justify-center border-2  border-green-700 rounded-full px-3 py-3 hover:bg-[#75D95B] hover:border-none transition-color duration-200 hover:text-white"/>
          <h1 className="text-black items-center text-2xl text-center mt-3">Business Suite for (SME)</h1>
        </div>
        </div>

        <div className="bg-white px-6 py-4  mb-3 mt-3 rounded-lg shadow-[20px] h-52 lg:w-[275px] m-10 md:w-[320px] w-[300px] flex items-center justify-center hover:bg-[#0ACC5A]  hover:text-white transition-color duration-200">
        <div className="grid place-items-center">
          <FcDocument className="text-7xl text-center flex items-center justify-center border-2  border-green-700 rounded-full px-3 py-3 hover:bg-[#75D95B] hover:border-none transition-color duration-200 hover:text-white"/>
          <h1 className="text-black items-center text-2xl text-center mt-3">Document Blacklisting</h1>
        </div>
        </div>

      </div>
    </div>
  )
}

export default Features