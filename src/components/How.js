import React from 'react'
import { FaStarOfLife } from 'react-icons/fa';
function How() {
  return (
    <div name='how' className="bg-[#FFFEFE]">
     <h1 className="text-5xl text-center mt-3 text-black font-bold tracking-wide mb-5">How it works</h1>
     <div className="grid lg:grid-cols-2">
        <div>
        <ul className="text-black m-10 font-[poppins]">
                <h3 className="text-3xl mb-3">NFT Marketplace</h3>
                <div className="flex mt-3">
                    <FaStarOfLife className="text-5xl text-[#75D95B]"/>
                    <li className="mx-4 text-x tracking-wide leading-8">Download the Regiz Dapp from your App/Play Store or Visit regiz.io from your web browser.</li>
                </div>
                <div className="flex mt-3">
                    <FaStarOfLife className="text-4xl text-[#75D95B]"/>
                    <li className="mx-4 text-x tracking-wide leading-8">Launch the app and connect your wallet E.g., Meta mask, Trust wallet.</li>
                </div>
                <div className="flex mt-4">
                    <FaStarOfLife className="text-4xl text-[#75D95B]"/>
                    <li className="mx-4 text-x tracking-wide leading-8">List your art for sale. </li>
                </div>
        </ul> 
        </div>

        <div className="flex items-center justify-center font-[poppins]">
            <div className="justify-center items-center lg:grid">
            <ul className="text-black m-10">
                <h3 className="text-3xl mb-3">DUI</h3>
                <div className="flex">
                    <FaStarOfLife className="text-4xl text-[#75D95B]"/>
                    <li className="mx-4 text-x tracking-wide leading-8">Download the Regiz Dapp from your App/Play Store native app</li>
                </div>

                <div className="flex  mt-3">
                    <FaStarOfLife className="text-4xl text-[#75D95B]"/>
                    <li className="mx-4 text-x tracking-wide leading-8">Launch the app and connect your wallet E.g., Meta mask, Trust wallet.</li>
                </div>

                <div className="flex  mt-3">
                    <FaStarOfLife className="text-4xl text-[#75D95B]"/>
                    <li className="mx-4 text-x tracking-wide leading-8">Complete your KYC/Verification Process.</li>
                </div>

                <div className="flex  mt-3">
                    <FaStarOfLife className="text-4xl text-[#75D95B] mt-2"/>
                    <li className="mx-4 text-x tracking-wide leading-8">Snap and upload your desired document in the selected format. E.g pdf </li>
                </div>

                <div className="flex  mt-3">
                    <FaStarOfLife className="text-5xl text-[#75D95B]"/>
                    <li className="mx-4 text-x tracking-wide leading-8">Click on mint Document to get a unique document I.D (Grade B) Genuine Unverified</li>
                </div>

                <div className="flex  mt-3">
                    <FaStarOfLife className="text-5xl text-[#75D95B]"/>
                    <li className="mx-4 text-x tracking-wide leading-8">Proceed to Verify the document from issuing body and upgrade to (Grade A) Genuine Verified.</li>
                </div>
            </ul>

            </div>

        </div> 
     </div>
       
    </div>
  )
}

export default How