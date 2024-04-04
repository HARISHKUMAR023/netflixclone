import React from 'react'
import Image from 'next/image'
import Home from '@/components/Home';
import Enjoy from '@/components/Enjoy';
import Show from '@/components/Show';
import Watch from '@/components/Watch';
import Kids from '@/components/Kids';
import FaqPage from '../Faq';
// import Faq from '@/components/Faq';

const Main = () => {
   // Marking this component as client-side

  return (
    <div className='bg-netflix'>
   <Home/>
   <Enjoy/>
<Show/>
<Watch/>
<Kids/>
<FaqPage/>
{/* <Faq/> */}
    </div>
  )
}

export default Main