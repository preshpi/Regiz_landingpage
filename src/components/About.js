import React from 'react'

function About() {
  return (
    <div name='about' className="font-[poppins]">
      <div className="flex flex-col-reverse lg:flex-row text-white">
        <div className="container w-[200px]">
        <input type="checkbox" id="check"/>
        <p className="mt-32 text-x leading-7">
        Regiz is a generation alpha digital asset technology project that focuses on
        digitizing and authenticating digital or handwritten documents so that they
        can be electronically stored more compactly. It may be a passport, documents,
        certifications, bank statements, computerized receipts, work identification cards,
        or any suitable documents.        
        </p>
        <div className="content">
          <p className="text-x mt-3">
          The Document would be uploaded on the Regiz platform in selected formats. Every document that is uploaded will get a unique identification code, which will automatically make it a certified digital copy, thereby eradicating fake or ingenuine digital copies of a document.
          All documents that are issued by a registered institution that is recognized by the government will pass through a verification/confirmation process.
          </p>

          <p className="text-x mt-3">
          These documents can also be looked up by a third party, using the Regiz document authentication software (available on the Regiz platform) with authorization from the owner via passcode/OTP to confirm its genuinty anywhere in the world.
          Regiz will be a decentralized application Built on blockchain technology.
          These documents will then become digital assets with monetary value.
          </p>
        </div>
        <label for="check" className="px-3 py-3 rounded-full text-white btn hover:text-black hover:animate-bounce">READ MORE</label>
        </div>

        <div className="flex items-center justify-center">
         <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1664870255/8703799_eth_ethereum_cryptocurrency_blockchain_digital_currency_icon_vfqec0.png" className="w-[200px] "/>
        </div>
      </div> 
    </div>
  )
}

export default About