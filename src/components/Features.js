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
    <div name='feature' className="p-5 dark:bg-[#0C1017] bg-gray-100 lg:h-[80vh]">
      <h1 className="text-5xl text-center mt-3 pt-5 text-black font-bold tracking-wide mb-5 dark:text-white">FEATURES</h1>
    
        <div className="lg:m-10 m-10 mt-5">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5 mb-[20px] place-items-center" data-aos="fade-up">
            
            <div className="px-6 py-4 mb-3 mt-3 rounded-lg shadow-[20px] h-52 lg:w-[275px] m-10 md:w-[320px] w-[250px] flex items-center justify-center bg-[#fff]  lg:hover:w-[280px] dark:bg-[#66CC7B] hover:text-white transition-color duration-200">
            <div className="grid place-items-center">
              <GoVerified className="text-7xl text-center flex items-center justify-center border-2  border-green-700 rounded-full px-3 py-3 hover:bg-[#75D95B] dark:bg-[#75D95B] hover:border-none transition-color duration-200 text-white"/>
              <h1 className="text-black items-center text-2xl text-center mt-3">Document Minting</h1>
            </div>
            </div>

            <div className="px-6 py-4 mb-3 mt-3 rounded-lg shadow-[20px] h-52 lg:w-[275px] m-10 md:w-[320px] w-[250px] flex items-center justify-center bg-[#fff]  lg:hover:w-[280px] dark:bg-[#66CC7B] hover:text-white transition-color duration-200">
            <div className="grid place-items-center">
              <GoVerified className="text-7xl text-center flex items-center justify-center border-2  border-green-700 rounded-full px-3 py-3 hover:bg-[#75D95B] dark:bg-[#75D95B] hover:border-none transition-color duration-200 text-white"/>
              <h1 className="text-black items-center text-2xl text-center mt-3">Document Verification</h1>
            </div>
            </div>

            <div className="px-6 py-4 mb-3 mt-3 rounded-lg shadow-[20px] h-52 lg:w-[275px] m-10 md:w-[320px] w-[250px] flex items-center justify-center bg-[#fff]  lg:hover:w-[280px] dark:bg-[#66CC7B] hover:text-white transition-color duration-200">
            <div className="grid place-items-center">
              <TbBadge className="text-7xl text-center flex items-center justify-center border-2  border-green-700 rounded-full px-3 py-3 hover:bg-[#75D95B] dark:bg-[#75D95B] hover:border-none transition-color duration-200 text-white"/>
              <h1 className="text-black items-center text-2xl text-center mt-3">Originality Badge/unique i.d</h1>
            </div>
            </div>

            <div className="px-6 py-4 mb-3 mt-3 rounded-lg shadow-[20px] h-52 lg:w-[275px] m-10 md:w-[320px] w-[250px] flex items-center justify-center bg-[#fff]  lg:hover:w-[280px] dark:bg-[#66CC7B] hover:text-white transition-color duration-200">
            <div className="grid place-items-center">
              <GrCertificate className="text-7xl text-center flex items-center justify-center border-2  border-green-700 rounded-full px-3 py-3 hover:bg-[#75D95B] dark:bg-[#75D95B] hover:border-none transition-color duration-200 text-white"/>
              <h1 className="text-black items-center text-2xl text-center mt-3">Digital document certification</h1>
            </div>
            </div>

          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5 place-items-center" data-aos="fade-up">
            <div className="px-6 py-4 mb-3 mt-3 rounded-lg shadow-[20px] h-52 lg:w-[275px] m-10 md:w-[320px] w-[250px] flex items-center justify-center bg-[#fff]  lg:hover:w-[280px] dark:bg-[#66CC7B] hover:text-white transition-color duration-200">
            <div className="grid place-items-center">
              <BiMoney className="text-7xl text-center flex items-center justify-center border-2  border-green-700 rounded-full px-3 py-3 hover:bg-[#75D95B] dark:bg-[#75D95B] hover:border-none transition-color duration-200 text-white"/>
              <h1 className="text-black items-center text-2xl text-center mt-3">Document assest</h1>
            </div>
            </div>

            <div className="px-6 py-4 mb-3 mt-3 rounded-lg shadow-[20px] h-52 lg:w-[275px] m-10 md:w-[320px] w-[250px] flex items-center justify-center bg-[#fff]  lg:hover:w-[280px] dark:bg-[#66CC7B] hover:text-white transition-color duration-200">
            <div className="grid place-items-center">
              <AiFillGift className="text-7xl text-center flex items-center justify-center border-2  border-green-700 rounded-full px-3 py-3 hover:bg-[#75D95B] dark:bg-[#75D95B] hover:border-none transition-color duration-200 text-white"/>
              <h1 className="text-black items-center text-2xl text-center mt-3">NFT Marketplace</h1>
            </div>
            </div>

            <div className="px-6 py-4 mb-3 mt-3 rounded-lg shadow-[20px] h-52 lg:w-[275px] m-10 md:w-[320px] w-[250px] flex items-center justify-center bg-[#fff]  lg:hover:w-[280px] dark:bg-[#66CC7B] hover:text-white transition-color duration-200">
            <div className="grid place-items-center">
              <MdBusiness className="text-7xl text-center flex items-center justify-center border-2  border-green-700 rounded-full px-3 py-3 hover:bg-[#75D95B] dark:bg-[#75D95B] hover:border-none transition-color duration-200 text-white"/>
              <h1 className="text-black items-center text-2xl text-center mt-3">Business suite for (SME)</h1>
            </div>
            </div>
            <div className="px-6 py-4 mb-3 mt-3 rounded-lg shadow-[20px] h-52 lg:w-[275px] m-10 md:w-[320px] w-[250px] flex items-center justify-center bg-[#fff]  lg:hover:w-[280px] dark:bg-[#66CC7B] hover:text-white transition-color duration-200">
            <div className="grid place-items-center">
              <FcDocument className="text-7xl text-center flex items-center justify-center border-2  border-green-700 rounded-full px-3 py-3 hover:bg-[#75D95B] dark:bg-[#75D95B] hover:border-none transition-color duration-200 text-white"/>
              <h1 className="text-black items-center text-2xl text-center mt-3">Document Blacksmitting</h1>
            </div>
            </div>

          </div>
        </div>

    </div>
  )
}

export default Features