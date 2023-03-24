import React from "react";
import img1 from '../Asset/2.png'
const Nav = () => {
  return (
    <div>
      <header class="text-gray-600 body-font bg-white">
        <div class="container mx-auto flex flex-wrap p-5 justify-between md:flex-row items-center">
          <div className="text-white ">
            <img src={img1} alt="" width={100}
            height={100}/>
            
          </div>
         
          <nav class="hidden  md:ml-auto md:mr-auto md:flex flex-wrap items-center capitalize text-base justify-center text-black font-bold font-fontfirst">
            <a class="mr-5 hover:text-[rgb(255,76,48)] cursor-pointer">About</a>
            <a class="mr-5 hover:text-[rgb(255,76,48)] cursor-pointer">Service</a>
            <a class="mr-5 hover:text-[rgb(255,76,48)] cursor-pointer">Blog</a>
            <a class="mr-5 hover:text-[rgb(255,76,48)] cursor-pointer">Our team</a>
            <a class="mr-5 hover:text-[rgb(255,76,48)] cursor-pointer">Testimonial</a>
            <a class="mr-5 hover:text-[rgb(255,76,48)] cursor-pointer">contact</a>
           
          </nav>


          <button class="hidden  lg:inline-flex items-center bg-[rgb(255,76,48)] border-0 py-1 px-3 focus:outline-none text-white hover:bg-black rounded text-base mt-4 md:mt-0 font-other">
            Sign In
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>

          <button class="flex-col h-[2rem] justify-between md:hidden lg:hidden items-center bg-[rgb(255,76,48)] border-0 px-3 py-2 focus:outline-none text-white hover:bg-black rounded text-base  md:mt-0 font-other ">
            <div className="flex-col items-center text-center">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
            </div>
      
           
          
          </button>
         
        </div>
      </header>
    </div>
  );
};

export default Nav;
