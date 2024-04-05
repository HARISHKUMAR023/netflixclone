import React from 'react'

const Footer = () => {
  return (
    <div className='mt-10 text-zinc-400  pb-24 '>
         <hr className="border border-zinc-800 h-2 bg-zinc-800 w-full relative" />
         <div className='mx-24'>
         <div className='mt-10  mx-16'>
         <p>Questions? Call <span className='underline'>000-800-919-1694</span></p>
         <div className='flex justify-between pt-6 underline mr-80'>
            <div>
                <ol>
                    <li className='py-2' >FAQ</li>
                    <li className='py-2'>Investor Relations</li>
                    <li className='py-2'>Privacy</li>
                    <li className='py-2'>Speed Test</li>
                    
                </ol>
            </div>

            <div>
                <ol>
                    <li className='py-2'>Help Centre</li>
                    <li className='py-2'>Jobs</li>
                    <li className='py-2'>Cookie Preferences</li>
                    <li className='py-2'>Legal Notices</li>
                    
                </ol>
            </div>

            <div>
                <ol>
                    <li className='py-2'>Account</li>
                    <li className='py-2'>Ways to Watch</li>
                    <li className='py-2'>Corporate Information</li>
                    <li className='py-2'>Only on Netflix</li>
                    
                </ol>
            </div>
            <div>
                <ol>
                    <li className='py-2'>Media Centre</li>
                    <li className='py-2'>Terms of Use</li>
                    <li className='py-2'>Contact Us</li>
               
                    
                </ol>
            </div>

         </div>
         <select className='bg-transparent border border-1 border-slate-50 px-4 py-1 rounded mr-6 text-white mt-3' >
          <option className='text-black hover:text-white'>English</option>
          <option className='text-black hover:text-white'>हिंदी</option>
        </select>

        <p className='mt-7'>Netflix India</p>
         </div>
         </div>
        
       
    </div>
  )
}

export default Footer