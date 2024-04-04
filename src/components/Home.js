import React from 'react'
import Header from './Header'
import Image from 'next/image'
const Home= () => {
  return (
    <div className="">
   
    <Header/>
   {/* bg-[url('/nextbg.jpg')] bg-no-repeat bg-local brightness-50  h-[600px] */}
   <div >
   <Image src="/nextbg.jpg"alt="Netflix Logo" className='z-30 w-full h-[670px] fixed top-0 brightness-50'
        width={1200}
        height={500}></Image> 
        
   </div>
  {/* <div className='z-20 w-screen h-[670px] fixed top-0 bg-gradient-to-b from-zinc-900 via-slate-50 to-zinc-900'></div> */}
    </div>
  )
}

export default Home