import React from 'react'

function About() {
  return (
    <div name='about' className="pt-5">
      <h1 className="text-5xl text-center mt-3 text-white font-bold tracking-wide mb-5 pt-5" data-aos="flip-up">About Regiz</h1>
      <div className="text-white font-[poppins]" data-aos="slide-up">
        <div className="box text-start">
        <input type="checkbox" id="check"/>
        <p className="text-x leading-8 tracking-wide" data-aos="slide-up">
        Regiz is a generation alpha digital asset technology project that focuses on digitizing and authenticating digital or handwritten documents so that they can be electronically stored more compactly. it may be a passport, documrnts, certifications, bank statements, computerized receipts, work identification cards, or any suitable documents.     
        </p>
        <div className="content">
          <p className="text-x mt-3 leading-8 tracking-wide">
          The Document would be uploaded on the Regiz platform in selected formats. Every document that is uploaded will get a unique identification code, which will automatically make it a certified digital copy, thereby eradicating fake or ingenuine digital copies of a document.
          All documents that are issued by a registered institution that is recognized by the government will pass through a verification/confirmation process.
          </p>

          <p className="text-x mt-3 leading-8 tracking-wide">
          These documents can also be looked up by a third party, using the Regiz document authentication software (available on the Regiz platform) with authorization from the owner via passcode/OTP to confirm its genuinty anywhere in the world.
          Regiz will be a decentralized application Built on blockchain technology.
          These documents will then become digital assets with monetary value.
          </p>
        </div>
        <label for="check" className="px-3 py-3 rounded-full text-white  hover:text-black bg-[#66CC7B] hover:[#] hover:animate-bounce">READ MORE</label>
        </div> 
      </div> 
    </div>
  )
}

export default About