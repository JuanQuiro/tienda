import './output.css'


import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";


// import required modules
import { FreeMode, Pagination, Autoplay } from "swiper";

// Import Swiper styles


export function NavBar() {


  

  const [count, setCount] = useState(0)

  

  

  return (
    <div className='h-full '>
    <div data-theme="valentine" className='backgroundsMain min-h-full min-w-full'>
    <div className= "header bg-transparent navbar bg-base-100 sticky top-0 ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Candy</a></li>
            <li><a>New</a></li>
            <li><a>Support</a></li>

      </ul>
    </div>
    <a href='#' className="pl-5 text-2xl font-bold text-primary-focus">Valentino Day❤️</a>
  </div>
  <div className="navbar-center hidden lg:flex shadow  rounded-full border-black">
    <ul className="menu menu-horizontal px-1 ">
      <li><a className='px-5 text-xl font-semibold text-primary-content'>Home</a></li>
      <li><a className='px-5 text-xl font-semibold text-primary-content'>About</a></li>
      <li><a className='px-5 text-xl font-semibold text-primary-content'>Candy</a></li>
      <li><a className='px-5 text-xl font-semibold text-primary-content'>New</a></li>
      <li ><a className='shadow hover:shadow-2xl px-5 text-xl border-2 border-secondary-focus text-secondary-content font-bold antialiased hover:bg-secondary-focus'>Support</a></li>
    </ul>
  </div>
  <div className="navbar-end ">
        <a href='#' className="pr-4 text-primary-focus ">
              <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path>
              </svg>
        </a>
  </div>

      
      </div>

      <h1 className='text-center text-2xl lg:text-5xl p-24 font-bold  text-primary-focus underline'>Besos y abrasos</h1>

      <div className=" grid justify-items-center place-content-center gap-16 grid-cols-[repeat(auto-fill,minmax(min(100%,25rem),1fr))]">
        
        <div className='productcont group relative cursor-pointer items-center  overflow-hidden    group ounded-3xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300  shadow-2xl hover:shadow-red-700 w-60 border-4 border-primary-focus rounded-3xl p-10   justify-center text-center bg-black gap-2'>
          <a href="">
          <img className='   transition ease-in-out delay-150  group-hover:-translate-y-1 hover:scale-110  duration-300     w-24 mx-auto bg-primary rounded-2xl p-2   ' src="https://cdn-icons-png.flaticon.com/512/2904/2904941.png" alt="" />
          <h2 className='text-primary-focus font-bold text-2xl mt-5'>Toffe</h2>
          <h3 className='text-white mb-3'>Description Here</h3>
          <span className='text-2xl  text-primary-focus mr-2'>$20.99</span>
              <span className=' line-through text-secondary-focus bg-gray-900 p-2 rounded-3xl'> $41.98</span>

              <div class="hover:scale-110 absolute bottom-0 -right-10 rounded-tl-lg bg-secondary-focus text-white p-2 transition-all group-hover:right-0 ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path></svg>

            </div>
          </a>
        </div>
              

          <div className='productcont group relative cursor-pointer items-center  overflow-hidden    group ounded-3xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300  shadow-2xl hover:shadow-red-700 w-60 border-4 border-primary-focus rounded-3xl p-10   justify-center text-center bg-black gap-2'>
          <a href="">
          <img className='   transition ease-in-out delay-150  group-hover:-translate-y-1 hover:scale-110  duration-300     w-24 mx-auto bg-primary rounded-2xl p-2   ' src="https://cdn-icons-png.flaticon.com/512/2904/2904941.png" alt="" />
          <h2 className='text-primary-focus font-bold text-2xl mt-5'>Toffe</h2>
          <h3 className='text-white mb-3'>Description Here</h3>
          <span className='text-2xl  text-primary-focus mr-2'>$20.99</span>
              <span className=' line-through text-secondary-focus bg-gray-900 p-2 rounded-3xl'> $41.98</span>

              <div class="hover:scale-110 absolute bottom-0 -right-10 rounded-tl-lg bg-secondary-focus text-white p-2 transition-all group-hover:right-0 ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path></svg>

            </div>
          </a>
          </div>
          
          <div className='productcont group relative cursor-pointer items-center  overflow-hidden    group ounded-3xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300  shadow-2xl hover:shadow-red-700 w-60 border-4 border-primary-focus rounded-3xl p-10   justify-center text-center bg-black gap-2'>
          <a href="">
          <img className='   transition ease-in-out delay-150  group-hover:-translate-y-1 hover:scale-110  duration-300     w-24 mx-auto bg-primary rounded-2xl p-2   ' src="https://cdn-icons-png.flaticon.com/512/2904/2904941.png" alt="" />
          <h2 className='text-primary-focus font-bold text-2xl mt-5'>Toffe</h2>
          <h3 className='text-white mb-3'>Description Here</h3>
          <span className='text-2xl  text-primary-focus mr-2'>$20.99</span>
              <span className=' line-through text-secondary-focus bg-gray-900 p-2 rounded-3xl'> $41.98</span>

              <div class="hover:scale-110 absolute bottom-0 -right-10 rounded-tl-lg bg-secondary-focus text-white p-2 transition-all group-hover:right-0 ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path></svg>

            </div>
          </a>
          </div>
          
          <div className='productcont group relative cursor-pointer items-center  overflow-hidden    group ounded-3xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300  shadow-2xl hover:shadow-red-700 w-60 border-4 border-primary-focus rounded-3xl p-10   justify-center text-center bg-black gap-2'>
          <a href="">
          <img className='   transition ease-in-out delay-150  group-hover:-translate-y-1 hover:scale-110  duration-300     w-24 mx-auto bg-primary rounded-2xl p-2   ' src="https://cdn-icons-png.flaticon.com/512/2904/2904941.png" alt="" />
          <h2 className='text-primary-focus font-bold text-2xl mt-5'>Toffe</h2>
          <h3 className='text-white mb-3'>Description Here</h3>
          <span className='text-2xl  text-primary-focus mr-2'>$20.99</span>
              <span className=' line-through text-secondary-focus bg-gray-900 p-2 rounded-3xl'> $41.98</span>

              <div class="hover:scale-110 absolute bottom-0 -right-10 rounded-tl-lg bg-secondary-focus text-white p-2 transition-all group-hover:right-0 ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path></svg>

            </div>
          </a>
          </div>
          
          <div className='productcont group relative cursor-pointer items-center  overflow-hidden    group ounded-3xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300  shadow-2xl hover:shadow-red-700 w-60 border-4 border-primary-focus rounded-3xl p-10   justify-center text-center bg-black gap-2'>
          <a href="">
          <img className='   transition ease-in-out delay-150  group-hover:-translate-y-1 hover:scale-110  duration-300     w-24 mx-auto bg-primary rounded-2xl p-2   ' src="https://cdn-icons-png.flaticon.com/512/2904/2904941.png" alt="" />
          <h2 className='text-primary-focus font-bold text-2xl mt-5'>Toffe</h2>
          <h3 className='text-white mb-3'>Description Here</h3>
          <span className='text-2xl  text-primary-focus mr-2'>$20.99</span>
              <span className=' line-through text-secondary-focus bg-gray-900 p-2 rounded-3xl'> $41.98</span>

              <div class="hover:scale-110 absolute bottom-0 -right-10 rounded-tl-lg bg-secondary-focus text-white p-2 transition-all group-hover:right-0 ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path></svg>

            </div>
          </a>
          </div>
          

          <div className='productcont group relative cursor-pointer items-center  overflow-hidden    group ounded-3xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300  shadow-2xl hover:shadow-red-700 w-60 border-4 border-primary-focus rounded-3xl p-10   justify-center text-center bg-black gap-2'>
          <a href="">
          <img className='   transition ease-in-out delay-150  group-hover:-translate-y-1 hover:scale-110  duration-300     w-24 mx-auto bg-primary rounded-2xl p-2   ' src="https://cdn-icons-png.flaticon.com/512/2904/2904941.png" alt="" />
          <h2 className='text-primary-focus font-bold text-2xl mt-5'>Toffe</h2>
          <h3 className='text-white mb-3'>Description Here</h3>
          <span className='text-2xl  text-primary-focus mr-2'>$20.99</span>
              <span className=' line-through text-secondary-focus bg-gray-900 p-2 rounded-3xl'> $41.98</span>

              <div class="hover:scale-110 absolute bottom-0 -right-10 rounded-tl-lg bg-secondary-focus text-white p-2 transition-all group-hover:right-0 ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path></svg>

            </div>
          </a>
        </div>
        </div>
        



        

        <h2 className='text-center text-2xl lg:text-5xl p-24 font-bold  text-primary-focus underline'>Los recién llegados</h2>


        <Swiper
        slidesPerView={4}
        spaceBetween={30}
          freeMode={{
            enabled: true,
            sticky: true,
            minimumVelocity:0.02
          }}
          autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          enabled: false,
          clickable: true,
        }}

        grabCursor={true}
       loop={true} 

          

          
        modules={[Autoplay,FreeMode, Pagination]}
        className="swiper-slide mySwiper my-24  grid justify-items-center justify-center place-content-center gap-16 "
      >
          <SwiperSlide>
            <div className='group relative cursor-pointer items-center  overflow-hidden     ounded-3xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-95  duration-300  shadow hover:shadow-red-700 w-60 border-4 border-primary-focus rounded-3xl p-10   justify-center text-center bg-black gap-2'>
          <a href="">
          <img className='   transition ease-in-out delay-150  group-hover:-translate-y-1 hover:scale-110  duration-300     w-24 mx-auto bg-primary rounded-2xl p-2   ' src="https://cdn-icons-png.flaticon.com/512/2904/2904941.png" alt="" />
          <h2 className='text-primary-focus font-bold text-2xl mt-5'>Toffe</h2>
          <h3 className='text-white mb-3'>Description Here</h3>
          <span className='text-2xl  text-primary-focus mr-2'>$20.99</span>
              <span className=' line-through text-secondary-focus bg-gray-900 p-2 rounded-3xl'> $41.98</span>

              <div class="hover:scale-110 absolute bottom-0 -right-10 rounded-tl-lg bg-secondary-focus text-white p-2 transition-all group-hover:right-0 ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path></svg>

                </div>
                <div class="absolute top-3 left-3 rounded-md bg-secondary-focus px-2 py-1 "><span class="text-center text-sm text-accent">New</span></div>
          </a>
              </div>
        </SwiperSlide>
          <SwiperSlide>
            <div className='group relative cursor-pointer items-center  overflow-hidden     ounded-3xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-95  duration-300  shadow hover:shadow-red-700 w-60 border-4 border-primary-focus rounded-3xl p-10   justify-center text-center bg-black gap-2'>
          <a href="">
          <img className='   transition ease-in-out delay-150  group-hover:-translate-y-1 hover:scale-110  duration-300     w-24 mx-auto bg-primary rounded-2xl p-2   ' src="https://cdn-icons-png.flaticon.com/512/2904/2904941.png" alt="" />
          <h2 className='text-primary-focus font-bold text-2xl mt-5'>Toffe</h2>
          <h3 className='text-white mb-3'>Description Here</h3>
          <span className='text-2xl  text-primary-focus mr-2'>$20.99</span>
              <span className=' line-through text-secondary-focus bg-gray-900 p-2 rounded-3xl'> $41.98</span>

              <div class="hover:scale-110 absolute bottom-0 -right-10 rounded-tl-lg bg-secondary-focus text-white p-2 transition-all group-hover:right-0 ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path></svg>

                </div>
                <div class="absolute top-3 left-3 rounded-md bg-secondary-focus px-2 py-1 "><span class="text-center text-sm text-accent">New</span></div>
          </a>
              </div>
        </SwiperSlide>
          <SwiperSlide>
            <div className='group relative cursor-pointer items-center  overflow-hidden     ounded-3xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-95  duration-300  shadow hover:shadow-red-700 w-60 border-4 border-primary-focus rounded-3xl p-10   justify-center text-center bg-black gap-2'>
          <a href="">
          <img className='   transition ease-in-out delay-150  group-hover:-translate-y-1 hover:scale-110  duration-300     w-24 mx-auto bg-primary rounded-2xl p-2   ' src="https://cdn-icons-png.flaticon.com/512/2904/2904941.png" alt="" />
          <h2 className='text-primary-focus font-bold text-2xl mt-5'>Toffe</h2>
          <h3 className='text-white mb-3'>Description Here</h3>
          <span className='text-2xl  text-primary-focus mr-2'>$20.99</span>
              <span className=' line-through text-secondary-focus bg-gray-900 p-2 rounded-3xl'> $41.98</span>

              <div class="hover:scale-110 absolute bottom-0 -right-10 rounded-tl-lg bg-secondary-focus text-white p-2 transition-all group-hover:right-0 ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path></svg>

                </div>
                <div class="absolute top-3 left-3 rounded-md bg-secondary-focus px-2 py-1 "><span class="text-center text-sm text-accent">New</span></div>
          </a>
              </div>
        </SwiperSlide>
          <SwiperSlide>
            <div className='group relative cursor-pointer items-center  overflow-hidden     ounded-3xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-95  duration-300  shadow hover:shadow-red-700 w-60 border-4 border-primary-focus rounded-3xl p-10   justify-center text-center bg-black gap-2'>
          <a href="">
          <img className='   transition ease-in-out delay-150  group-hover:-translate-y-1 hover:scale-110  duration-300     w-24 mx-auto bg-primary rounded-2xl p-2   ' src="https://cdn-icons-png.flaticon.com/512/2904/2904941.png" alt="" />
          <h2 className='text-primary-focus font-bold text-2xl mt-5'>Toffe</h2>
          <h3 className='text-white mb-3'>Description Here</h3>
          <span className='text-2xl  text-primary-focus mr-2'>$20.99</span>
              <span className=' line-through text-secondary-focus bg-gray-900 p-2 rounded-3xl'> $41.98</span>

              <div class="hover:scale-110 absolute bottom-0 -right-10 rounded-tl-lg bg-secondary-focus text-white p-2 transition-all group-hover:right-0 ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path></svg>

                </div>
                <div class="absolute top-3 left-3 rounded-md bg-secondary-focus px-2 py-1 "><span class="text-center text-sm text-accent">New</span></div>
          </a>
              </div>
        </SwiperSlide>
          <SwiperSlide>
            <div className='group relative cursor-pointer items-center  overflow-hidden     ounded-3xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-95  duration-300  shadow hover:shadow-red-700 w-60 border-4 border-primary-focus rounded-3xl p-10   justify-center text-center bg-black gap-2'>
          <a href="">
          <img className='   transition ease-in-out delay-150  group-hover:-translate-y-1 hover:scale-110  duration-300     w-24 mx-auto bg-primary rounded-2xl p-2   ' src="https://cdn-icons-png.flaticon.com/512/2904/2904941.png" alt="" />
          <h2 className='text-primary-focus font-bold text-2xl mt-5'>Toffe</h2>
          <h3 className='text-white mb-3'>Description Here</h3>
          <span className='text-2xl  text-primary-focus mr-2'>$20.99</span>
              <span className=' line-through text-secondary-focus bg-gray-900 p-2 rounded-3xl'> $41.98</span>

              <div class="hover:scale-110 absolute bottom-0 -right-10 rounded-tl-lg bg-secondary-focus text-white p-2 transition-all group-hover:right-0 ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path></svg>

                </div>
                <div class="absolute top-3 left-3 rounded-md bg-secondary-focus px-2 py-1 "><span class="text-center text-sm text-accent">New</span></div>
          </a>
              </div>
        </SwiperSlide>
          <SwiperSlide>
            <div className='group relative cursor-pointer items-center  overflow-hidden     ounded-3xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-95  duration-300  shadow hover:shadow-red-700 w-60 border-4 border-primary-focus rounded-3xl p-10   justify-center text-center bg-black gap-2'>
          <a href="">
          <img className='   transition ease-in-out delay-150  group-hover:-translate-y-1 hover:scale-110  duration-300     w-24 mx-auto bg-primary rounded-2xl p-2   ' src="https://cdn-icons-png.flaticon.com/512/2904/2904941.png" alt="" />
          <h2 className='text-primary-focus font-bold text-2xl mt-5'>Toffe</h2>
          <h3 className='text-white mb-3'>Description Here</h3>
          <span className='text-2xl  text-primary-focus mr-2'>$20.99</span>
              <span className=' line-through text-secondary-focus bg-gray-900 p-2 rounded-3xl'> $41.98</span>

              <div class="hover:scale-110 absolute bottom-0 -right-10 rounded-tl-lg bg-secondary-focus text-white p-2 transition-all group-hover:right-0 ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path></svg>

                </div>
                <div class="absolute top-3 left-3 rounded-md bg-secondary-focus px-2 py-1 "><span class="text-center text-sm text-accent">New</span></div>
          </a>
              </div>
        </SwiperSlide>
          <SwiperSlide>
            <div className='group relative cursor-pointer items-center  overflow-hidden     ounded-3xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-95  duration-300  shadow hover:shadow-red-700 w-60 border-4 border-primary-focus rounded-3xl p-10   justify-center text-center bg-black gap-2'>
          <a href="">
          <img className='   transition ease-in-out delay-150  group-hover:-translate-y-1 hover:scale-110  duration-300     w-24 mx-auto bg-primary rounded-2xl p-2   ' src="https://cdn-icons-png.flaticon.com/512/2904/2904941.png" alt="" />
          <h2 className='text-primary-focus font-bold text-2xl mt-5'>Toffe</h2>
          <h3 className='text-white mb-3'>Description Here</h3>
          <span className='text-2xl  text-primary-focus mr-2'>$20.99</span>
              <span className=' line-through text-secondary-focus bg-gray-900 p-2 rounded-3xl'> $41.98</span>

              <div class="hover:scale-110 absolute bottom-0 -right-10 rounded-tl-lg bg-secondary-focus text-white p-2 transition-all group-hover:right-0 ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path></svg>

                </div>
                <div class="absolute top-3 left-3 rounded-md bg-secondary-focus px-2 py-1 "><span class="text-center text-sm text-accent">New</span></div>
          </a>
              </div>
        </SwiperSlide>
          <SwiperSlide>
            <div className='group relative cursor-pointer items-center  overflow-hidden     ounded-3xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-95  duration-300  shadow hover:shadow-red-700 w-60 border-4 border-primary-focus rounded-3xl p-10   justify-center text-center bg-black gap-2'>
          <a href="">
          <img className='   transition ease-in-out delay-150  group-hover:-translate-y-1 hover:scale-110  duration-300     w-24 mx-auto bg-primary rounded-2xl p-2   ' src="https://cdn-icons-png.flaticon.com/512/2904/2904941.png" alt="" />
          <h2 className='text-primary-focus font-bold text-2xl mt-5'>Toffe</h2>
          <h3 className='text-white mb-3'>Description Here</h3>
          <span className='text-2xl  text-primary-focus mr-2'>$20.99</span>
              <span className=' line-through text-secondary-focus bg-gray-900 p-2 rounded-3xl'> $41.98</span>

              <div class="hover:scale-110 absolute bottom-0 -right-10 rounded-tl-lg bg-secondary-focus text-white p-2 transition-all group-hover:right-0 ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path></svg>

                </div>
                <div class="absolute top-3 left-3 rounded-md bg-secondary-focus px-2 py-1 "><span class="text-center text-sm text-accent">New</span></div>
          </a>
              </div>
        </SwiperSlide>
      </Swiper>

        <footer className="footer p-10  text-base-content">
  <div>
    <span className="footer-title opacity-100 text-secondary-focus">Services</span> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title opacity-100 text-secondary-focus">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="footer-title opacity-100 text-secondary-focus" >Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </div>
</footer> 
<footer className="footer px-10 py-4 border-t bg-primary-focus text-black border-base-300">
  <div className="items-center grid-flow-col">
    <p className='transition ease-in-out delay-150  group-hover:-translate-y-1 hover:scale-150  duration-300'>❤️</p>
    <p>ACME Industries Ltd. <br/>Providing reliable tech since 1992</p>
  </div> 
  <div className="md:place-self-center md:justify-self-end">
    <div className="grid grid-flow-col gap-4">
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current transition ease-in-out delay-150  group-hover:-translate-y-1 hover:scale-110  duration-300"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a> 
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current transition ease-in-out delay-150  group-hover:-translate-y-1 hover:scale-110  duration-300"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current transition ease-in-out delay-150  group-hover:-translate-y-1 hover:scale-110  duration-300"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
    </div>
  </div>
        </footer>


      </div>
      </div>
  )
}

export default NavBar
