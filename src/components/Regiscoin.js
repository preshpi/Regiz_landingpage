import React from 'react';

function Regiscoin() {

  return (
    <div name='Regiscoin' className="pt-5 dark:bg-[#070909] bg-[#fff]">
    <h1 className="text-5xl text-center dark:text-white text-black font-bold tracking-wide mb-5 p-5">Regiscoin</h1> 
   
    <div className="grid lg:grid-cols-2 lg:m-10 m-5 ">
        <div data-aos="fade-left">
            <p className=" dark:text-white text-black tracking-wide leading-9 lg:text-start text-x  lg:text-xl w-[330px] md:w-[400px] lg:w-[600px] text-center">
             Regiscoin is a token owned by Regiz LLC.
            </p>

            <p className=" dark:text-white text-black mt-3 tracking-wide leading-9 lg:text-start text-sm  lg:text-xl w-[330px] md:w-[400px] lg:w-[600px] text-center">
             Regiscoin will be used for payments to access services on the platform.
             Either on the Documentation Technology platform or Social Marketplace,
              Regiscoin will be our acceptable transaction currency. The purpose of 
              the coin is for easy accessibility and usage of the platform, It makes
               the platform accessible to users globally.
            </p>

        </div>

        <div className="mt-5 lg:mt-0 flex items-center justify-center" data-aos="fade-right">
       <div className=" bg-[#66CC7B] text-center mx-5 mb-3 rounded-lg h-[630px] w-[300px] md:w-[500px]  lg:w-[500px] ">
         <div className="flex text-black justify-between m-5 text-xl hover:animate-pulse hover:text-white transition-colors duration-200">
            <p>Token Name</p>
            <p className="text-end">Regis coin</p>
         </div>
         <hr className="border-black border-1"/>
         <div className="flex text-black gap-5 justify-between m-5 text-xl hover:animate-pulse hover:text-white transition-colors duration-200">
            <p>Token Symbol</p>
            <p>rgz</p>
         </div>
         <hr className="border-black border-1"/>
         <div className="flex text-black gap-5 justify-between m-5 text-xl hover:animate-pulse hover:text-white transition-colors duration-200">
            <p>Token Supply</p>
            <p>100 billion rgz</p>
         </div>
         <hr className="border-black border-1"/>
         <div className="flex text-black gap-5 justify-between m-5 text-xl hover:animate-pulse hover:text-white transition-colors duration-200">
            <p>Total in Circulation</p>
            <p>57%</p>
         </div>
         <hr className="border-black border-1"/>
         <div className="flex text-black gap-5 justify-between m-5 text-xl hover:animate-pulse hover:text-white transition-colors duration-200">
            <p>Liquidity Fee</p>
            <p>4%</p>
         </div>
         <hr className="border-black border-1"/>
         <div className="flex text-black gap-5 justify-between m-5 text-xl hover:animate-pulse hover:text-white transition-colors duration-200">
            <p>Tax</p>
            <p>10%</p>
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

      <div className="dark:bg-[#0C1017] bg-gray-100 p-8">
      <h1 className="text-5xl text-center mt-3 dark:text-white font-bold tracking-wide mb-5 pt-5 text-black">Token Distribution</h1> 
      <div className="lg:m-20 text-start m-5">
         <p className="dark:text-white text-black text-xl">Presale 12%</p>
         <div className="w-full shadow bg-[#323F52] mt-3 rounded-lg" >
            <div className="bg-blue-500 rounded-lg text-xs leading-none py-[2px] mb-3 text-center dark:text-white text-black w-20 lg:w-[12%]" data-aos="slide-right"></div>
         </div>

         <p className="dark:text-white text-black text-xl">Liquidity 50%</p>
         <div className="w-full shadow bg-[#323F52] mt-5 rounded-lg">
            <div className="bg-orange-500 text-xs rounded-lg leading-none py-[2px] mb-3 text-center dark:text-white text-black w-36 lg:w-[50%]" data-aos="slide-right"></div>
         </div>

         <p className="dark:text-white text-black text-xl">Team 10%</p>
         <div className="w-full shadow bg-[#323F52] mt-5 rounded-lg">
            <div className="bg-green-500 text-xs rounded-lg leading-none py-[2px] mb-3 text-center dark:text-white text-black w-14 lg:w-[10%]" data-aos="slide-right"></div>
         </div>

         <p className="dark:text-white text-black text-xl">Airdrops 5%</p>
         <div className="w-full shadow bg-[#323F52] mt-5 rounded-lg">
            <div className="bg-red-500 text-xs rounded-lg leading-none py-[2px] mb-3 text-center dark:text-white text-black w-12 lg:w-[5%]" data-aos="slide-right"></div>
         </div>

         <p className="dark:text-white text-black text-xl">Rewards 18%</p>
         <div className="w-full shadow bg-[#323F52] mt-5 rounded-lg">
            <div className="bg-blue-500 text-xs rounded-lg leading-none py-[2px] mb-3 text-center dark:text-white text-black w-24 lg:w-[18%]" data-aos="slide-right"></div>
         </div>

         <p className="dark:text-white text-black text-xl">Locked 5%</p>
         <div className="w-full shadow bg-[#323F52] mt-5 rounded-lg">
            <div className="bg-cyan-500 rounded-lg text-xs leading-none py-[2px] mb-3 text-center text-white w-12 lg:w-[5%]" data-aos="slide-right"></div>
         </div>
      </div>
      </div>
   </div>
   
  )
}

export default Regiscoin