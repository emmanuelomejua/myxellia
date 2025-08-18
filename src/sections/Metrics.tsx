import Slide1 from '@/modules/sliders/Slide1';
import Slide2 from '@/modules/sliders/Slide2';
import Slide3 from '@/modules/sliders/Slide3';
import React from 'react'

const Metrics = () => {
  return (
    <div className='flex justify-between items-center gap-[10px] h-[286px]'>
       <Slide1/>
       <Slide2/>
       <Slide3/>
    </div>
  )
}

export default Metrics;
