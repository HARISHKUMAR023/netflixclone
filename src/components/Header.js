import React from 'react'
import Image from 'next/image'
const Header = () => {
  return (
    <div className=' justify-between relative top-0 z-40 '>
      <div className='flex justify-between py-5 px-44'>
      <div>
      <Image className=''
        src="/netflixlogo.svg"
        alt="Netflix Logo"
        width={150}
        height={200}
      />
      </div>
      <div>
        <select className='bg-transparent border border-1 border-slate-50 px-4 py-1 rounded mr-6 text-white' >
          <option className='text-black hover:text-white'>English</option>
          <option className='text-black hover:text-white'>हिंदी</option>
        </select>
        <button className='bg-btn-primary text-white p-1 px-4 rounded font-bold text-sm'>Sign In</button>
      </div>
      </div>

    </div>
  )
}

export default Header