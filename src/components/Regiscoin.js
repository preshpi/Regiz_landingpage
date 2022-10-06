import React from 'react';

function Regiscoin() {

  return (
    <div name='Regiscoin' className="mt-8 pt-5">
    <h1 className="text-5xl text-center text-white font-bold tracking-wide mb-5" data-aos="flip-up">Regiscoin</h1> 
   
    <div className="grid lg:grid-cols-2 md:grid-cols-2 lg:m-10 m-5 items-center justify-center">
        <div>
            <p className="font-[poppins] text-white tracking-wide leading-8 lg:text-start text-xl w-[330px] md:w-[400px] lg:w-[490px] text-center" data-aos="fade-left">
               Regiscoin is a token owned by Regiz, which will be used for payments while using the services on the platform. Either
                on the document minting platform or NFT Marketplace. Regiscoin will be our acceptable transcation token. The purpose of the coin is for easy accessibility and usage of the plaform. 
                it helps remove barries in currency choice, payment and transcation time. It makes the platform accessibile to users globally.
            </p>
        </div>

        <div className="mt-5 lg:mt-0 flex items-center justify-center" data-aos="fade-right">
       <div className=" bg-[#66CC7B] text-center mx-5 mb-3 rounded-lg h-[550px] w-[300px] md:w-[500px]  lg:w-[500px] ">
         <div className="flex text-black justify-between m-5 text-xl hover:animate-pulse hover:text-white transition-colors duration-200">
            <p>Token Name</p>
            <p className="text-end">Regiscoin Token</p>
         </div>
         <hr className="border-black border-1"/>
         <div className="flex text-black gap-5 justify-between m-5 text-xl hover:animate-pulse hover:text-white transition-colors duration-200">
            <p>Token Symbol</p>
            <p>Rgz</p>
         </div>
         <hr className="border-black border-1"/>
         <div className="flex text-black gap-5 justify-between m-5 text-xl hover:animate-pulse hover:text-white transition-colors duration-200">
            <p>Token Supply</p>
            <p>20 billion</p>
         </div>
         <hr className="border-black border-1"/>
         <div className="flex text-black gap-5 justify-between m-5 text-xl hover:animate-pulse hover:text-white transition-colors duration-200">
            <p>Tax</p>
            <p>10%</p>
         </div>
         <hr className="border-black border-1"/>
         <div className="flex text-black gap-5 justify-between m-5 text-xl hover:animate-pulse hover:text-white transition-colors duration-200">
            <p>Liquidify Fee</p>
            <p>4%</p>
         </div>
         <hr className="border-black border-1"/>
         <div className="flex text-black gap-5 justify-between m-5 text-xl hover:animate-pulse hover:text-white transition-colors duration-200">
            <p>Marketing Fee</p>
            <p>2%</p>
         </div>
         <hr className="border-black border-1"/>
         <div className="flex text-black gap-5 justify-between m-5 text-xl hover:animate-pulse hover:text-white transition-colors duration-200">
            <p>Developer Fee</p>
            <p>2%</p>
         </div>
         <hr className="border-black border-1"/>
         <div className="flex text-black gap-5 justify-between m-5 text-xl hover:animate-pulse hover:text-white transition-colors duration-200">
            <p>Charity Fee</p>
            <p>2%</p>
         </div>
       </div>

        </div>
    </div>

      <div className="bg-[#111111]">
      <h1 className="text-5xl text-center mt-3 text-white font-bold tracking-wide mb-5 pt-5">Token Distribution</h1> 
      <div className="m-10">
         <p className="text-white text-xl">Presale 12%</p>
         <div className="w-full shadow bg-[#323F52] mt-3 rounded-lg" >
            <div className="bg-blue-500 rounded-lg text-xs leading-none py-[2px] mb-3 text-center text-white w-52" data-aos="slide-right"></div>
         </div>

         <p className="text-white text-xl">Liquidify 50%</p>
         <div className="w-full shadow bg-[#323F52] mt-5 rounded-lg">
            <div className="bg-orange-500 text-xs rounded-lg leading-none py-[2px] mb-3 text-center text-white w-72" data-aos="slide-right"></div>
         </div>

         <p className="text-white text-xl">Team 10%</p>
         <div className="w-full shadow bg-[#323F52] mt-5 rounded-lg">
            <div className="bg-green-500 text-xs rounded-lg leading-none py-[2px] mb-3 text-center text-white w-48" data-aos="slide-right"></div>
         </div>

         <p className="text-white text-xl">Airdrops 5%</p>
         <div className="w-full shadow bg-[#323F52] mt-5 rounded-lg">
            <div className="bg-red-500 text-xs rounded-lg leading-none py-[2px] mb-3 text-center text-white w-32" data-aos="slide-right"></div>
         </div>

         <p className="text-white text-xl">Rewards 18%</p>
         <div className="w-full shadow bg-[#323F52] mt-5 rounded-lg">
            <div className="bg-blue-500 text-xs rounded-lg leading-none py-[2px] mb-3 text-center text-white w-60" data-aos="slide-right"></div>
         </div>

         <p className="text-white text-xl">Locked 5%</p>
         <div className="w-full shadow bg-[#323F52] mt-5 rounded-lg">
            <div className="bg-cyan-500 rounded-lg text-xs leading-none py-[2px] mb-3 text-center text-white w-32" data-aos="slide-right"></div>
         </div>
      </div>
      </div>
   </div>
   
  )
}

export default Regiscoin