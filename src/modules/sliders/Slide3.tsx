import { pic3 } from '@/constant/images';
import Image from 'next/image';
import React from 'react'

const Slide3 = () => {
  return (
    <div className='slider'>
      <Image src={pic3} alt='' className='absolute h-fit w-fit' />
    </div>
  )
}

export default Slide3;
