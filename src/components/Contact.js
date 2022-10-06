import React from 'react'
import { BsApple } from 'react-icons/bs';
import { DiAndroid } from 'react-icons/di';
import { BsTwitter, BsTelegram, BsWhatsapp } from 'react-icons/bs';
import { HiMail, HiOutlineChevronUp } from 'react-icons/hi';
import { CgFacebook } from 'react-icons/cg';
import { SiMicrosoftoutlook } from 'react-icons/si';
import { AiFillInstagram, AiFillLinkedin} from 'react-icons/ai';
import { Link, animateScroll as scroll } from 'react-scroll';
import ScrollToTop from "react-scroll-to-top";

function Contact() {
  return (
    <div name='contact' className="mt-8">
 

      <footer className="m-10 flex items-center justify-center">
        <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-5 text-center">
          
          <div className="mb-6">
          <div className="flex">
           <img src={require('../images/loreg.png')} className="w-32"/>
           <h1 className="font-bold text-3xl flex items-center justify-center text-[#FFFEFE]">Regiz</h1>
          </div>

           <div className="mb-5 grid-cols-4 grid">
            <a href="" type="button" class="rounded-lg border-2 hover:border-[#66CC7B] border-[#FFFEFE] text-[#FFFEFE] leading-normal uppercase hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-10 h-10 m-2">
            <CgFacebook href="https://facebook.com/Regizofficial" className="text-center  mt-3 text-xl"/>
            </a>
            <a href="https://twitter.com/Regizofficial" type="button" class="rounded-lg border-2 hover:border-[#66CC7B] border-[#FFFEFE] text-[#FFFEFE] leading-normal uppercase hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-12 h-12 m-2">
              <BsTwitter className="text-center mt-3 text-xl"/>
            </a>
            <a href="https://www.linkedin.com/in/Regiz/" type="button" class="rounded-lg border-2 hover:border-[#66CC7B] border-[#FFFEFE] text-[#FFFEFE] leading-normal uppercase hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-12 h-12 m-2">
            <AiFillLinkedin className="text-center  mt-3 text-xl"/>
            </a>
            <a href="https://instagram.com/Regizofficial" type="button" class="rounded-lg border-2 hover:border-[#66CC7B] border-[#FFFEFE] text-[#FFFEFE] leading-normal uppercase hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-12 h-12 m-2">
              <AiFillInstagram className="text-center  mt-3 text-xl"/>
            </a>
            <a href="mailto:regizcoin.io@gmail.com" type="button" class="rounded-lg border-2 hover:border-[#66CC7B] border-[#FFFEFE] text-[#FFFEFE] leading-normal uppercase hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-12 h-12 m-2">
            <HiMail className="text-center mt-3 text-xl"/>
            </a>
            <a href="mailto:regizofficial@outlook.com" type="button" class="rounded-lg border-2 hover:border-[#66CC7B] border-[#FFFEFE] text-[#FFFEFE] leading-normal uppercase hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-12 h-12 m-2">
            <SiMicrosoftoutlook className="text-center  mt-3 text-xl"/>
            </a>
            <a href="tel: +234 803 211 3990" type="button" class="rounded-lg border-2 hover:border-[#66CC7B] border-[#FFFEFE] text-[#FFFEFE] leading-normal uppercase hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-12 h-12 m-2">
            <BsWhatsapp className="text-center  mt-3 text-xl"/>
            </a>
            <a href="https://telegram.com/Regizofficial" type="button" class="rounded-lg border-2 hover:border-[#66CC7B] border-[#FFFEFE] text-[#FFFEFE] leading-normal uppercase hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-12 h-12 m-2">
            <BsTelegram className="text-center  mt-3 text-xl"/>
            </a>
           </div>

           <div className="mb-5 text-center ">
            <p className="text-gray-300 text-2xl ">Avaiable on web and also</p>
            <div className="gap-5 mt-3 flex items-center justify-center">
            <button class="inline-flex items-center h-10 px-5 py-7 text-indigo-100 transition-colors duration-150 bg-[#1a1b1d] rounded-lg">
              <span className="text-2xl">ios</span>
            <BsApple className="text-2xl mx-2 hover:text-[#66CC7B]"/>
            </button>
            
            <button class="inline-flex items-center h-10 px-5 py-7 text-indigo-100 transition-colors duration-150 bg-[#1A1C1F] rounded-lg">
              <span className="text-2xl">Android</span>
              <DiAndroid className="text-2xl mx-2 hover:text-[#66CC7B]"/>
            </button>         
            </div>

          </div>
          </div>

            <div class="mb-6 lg:mt-8 lg:mx-5">
            <h1 className="text-3xl  uppercase mb-2.5  mt-3 text-[#FFFEFE] font-bold tracking-wide">Categories</h1> 
            
              <ul class="list-none mb-0">
                <li>
                  <a href="#!" class="text-[#FFFEFE]">
                  <Link to="Regiscoin"  smooth={true}  duration={500} className="mb-3 mt-5 text-xl hover:text-[#66CC7B]"> What is Regiscoin</Link>
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-[#FFFEFE]">  <Link to="how"  smooth={true}  duration={500} class="mt-3 mb-3 text-xl hover:text-[#66CC7B]">How it works</Link></a>
                </li>
                <li>
                  <a href="#!" class="text-[#FFFEFE]"><Link to="roadmap"  smooth={true} offset={-100} duration={500} class="mt-3 mb-3 text-xl hover:text-[#66CC7B]">Roadmap</Link></a>
                </li>
              </ul>
            </div>

            <div class="mb-6 lg:mt-8">
            <h1 className="text-3xl  uppercase mb-2.5  mt-3 text-[#FFFEFE] font-bold tracking-wide">Pages</h1> 

              <ul class="list-none mb-0">
                <li>
                  <a href="#!" class="text-[#FFFEFE]"><Link to="about"  smooth={true}  duration={500} class="mt-5 mb-3 text-xl hover:text-[#66CC7B]">About</Link></a>
                </li>
                <li>
                  <a href="#!" class="text-[#FFFEFE]"> <Link to="feature"  smooth={true}  duration={500} class="mt-3 mb-3 text-xl hover:text-[#66CC7B]">Features</Link></a>
                </li>
                <li>
                  <a href="#!" class="text-[#FFFEFE]"><Link to="benefit"  smooth={true}  duration={500} class="mt-3 mb-3 text-xl hover:text-[#66CC7B]">Benefit</Link></a>
                </li>
              </ul>
            </div>
         </div>
      </footer>

      <hr className="border-[#FFF]"/>
       <div class="text-center p-4">
            © 2022 Regiz
            <p class="text-[#FFFEFE] text-xl"> - All Rights Reserved.</p>
       </div>


       <ScrollToTop  
        smooth
        width=""
        component={<p><HiOutlineChevronUp className="text-[#66CC7B] w-10 text-3xl"/></p>}/>

       
    </div>
  )
}

export default Contact