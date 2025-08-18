import Image from 'next/image';
import { pic1 } from '@/constant/images';
import React from 'react'

const Slide1 = () => {
  return (
    <div className='slider'>
        <Image src={pic1} alt='' className='absolute h-fit w-fit' />
    </div>
  )
}

export default Slide1;
