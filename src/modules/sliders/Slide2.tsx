import { pic2 } from '@/constant/images';
import Image from 'next/image';
import React from 'react'

const Slide2 = () => {
  return (
    <div className='slider'>
      <Image src={pic2} alt='' className='absolute h-fit w-fit' />
    </div>
  )
}

export default Slide2;
