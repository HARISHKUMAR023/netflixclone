import React from 'react'
import Header from './Header'
import Image from 'next/image'
import { BiChevronRight } from "react-icons/bi";
const Home= () => {
  return (
    <div className="h-[700px]">
   
    <Header/>
  
   <div >
   <Image  src="/nextbg.jpg"alt="Netflix Logo" className='netflix-bg-img z-20 h-[700px] w-full absolute top-0 brightness-50'
        width={1200}
        height={300} ></Image> 

        
   </div>
   <div className='bg-gradent z-30 h-[700px] w-full absolute top-0'></div>
   <div className=' z-40 relative flex flex-col justify-items-center  items-center mt-52 '>
   <h1 className='text-white text-5xl  font-black text-center ' >Unlimited movies, TV shows and more</h1>
   <p className='text-white text-2xl font-normal mt-4'>Watch anywhere. Cancel anytime.</p>
   <p className='text-white text-xl font-normal mt-6'>Ready to watch? Enter your email to create or restart your membership.</p>
   <div className='flex mt-4 justify-items-start  items-start'>
    <div className='w-[100%] min-w-[12.5rem]'>
      <input autoComplete='email' minLength={5} maxLength={50}  type='email' className='bg-transparent border border-1 border-slate-50  pt-6 px-4 pb-2 rounded mr-2  text-white  ' placeholder='Email Address'></input>
    </div>
    <div>
      <button className='bg-btn-primary text-white ml-1 rounded font-semibold w-52 py-3 px-4 text-2xl flex items-center'>Get Started <BiChevronRight className='text-4xl' /> </button>
    </div>
   </div>
   </div>
  
  
    </div>
  )
}

export default Home