import React from 'react';
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';

function Regiscoin() {
   const data = [
      {name: "Presale", value:12},
      {name: "Liquidity", value:50 },
      {name: "Team", value:10 },
      {name: "Airdrops", value:5 },
      {name: "Rewards", value:18 },
      {name: "Locked", value:5},
   ]
  return (
    <div name='Regiscoin' className="mt-8 p-5">
    <h1 className="text-5xl text-center mt-3 text-white font-bold tracking-wide mb-5">Regiscoin</h1> 
   
    <div className="grid lg:grid-cols-2 md:grid-cols-2 lg:m-10">
        <div>
            <p className="font-[poppins] text-white tracking-wider leading-8 text-start text-xl">Regiscoin is a token owned by Regiz, which will be used for payments while using the services on the platform. Either
                on the document minting platform or NFT Marketplace. Regiscoin will be our acceptable transcation token. The purpose of the coin is for easy accessibility and usage of the plaform. 
                it helps remove barries in currency choice, payment and transcation time. It makes the platform accessibile to users globally.
            </p>
        </div>

        <div className="mt-5 lg:mt-0 flex items-center justify-center">
       <div className=" bg-[#0ACC5A] text-center mx-5 mb-3 rounded-lg h-[550px] w-[360px] md:w-[500px]  lg:w-[600px] ">
         <div className="flex text-black justify-between m-5 text-xl">
            <p>Token Name</p>
            <p className="text-end">Regiscoin Token</p>
         </div>
         <hr className="border-gray-300 border-1"/>
         <div className="flex text-black gap-5 justify-between m-5 text-xl">
            <p>Token Symbol</p>
            <p>Rgz</p>
         </div>
         <hr className="border-gray-300 border-1"/>
         <div className="flex text-black gap-5 justify-between m-5 text-xl">
            <p>Token Supply</p>
            <p>20 billion</p>
         </div>
         <hr className="border-gray-300 border-1"/>
         <div className="flex text-black gap-5 justify-between m-5 text-xl">
            <p>Tax</p>
            <p>10%</p>
         </div>
         <hr className="border-gray-300 border-1"/>
         <div className="flex text-black gap-5 justify-between m-5 text-xl">
            <p>Liquidify Fee</p>
            <p>4%</p>
         </div>
         <hr className="border-gray-300 border-1"/>
         <div className="flex text-black gap-5 justify-between m-5 text-xl">
            <p>Marketing Fee</p>
            <p>2%</p>
         </div>
         <hr className="border-gray-300 border-1"/>
         <div className="flex text-black gap-5 justify-between m-5 text-xl">
            <p>Developer Fee</p>
            <p>2%</p>
         </div>
         <hr className="border-gray-300 border-1"/>
         <div className="flex text-black gap-5 justify-between m-5 text-xl">
            <p>Charity Fee</p>
            <p>2%</p>
         </div>
       </div>

        </div>
    </div>

   <div>
   <h1 className="text-5xl text-center mt-3 text-white font-bold tracking-wide mb-5">Token Distribution</h1> 
   </div>
   </div>
  )
}

export default Regiscoin