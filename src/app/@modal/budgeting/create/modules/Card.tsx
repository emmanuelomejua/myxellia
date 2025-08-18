import Images from '@/components/primitives/Images'
import Typography from '@/components/primitives/Typography'
import React from 'react';


type cardProp = {
    data: {
        icon: string;
        title: string;
        desc: string
    }
}

const Card = ({data}: cardProp) => {
  return (
    <div className='flex items-center gap-2 h-[74px] w-[344px]'>
        <Images src={data.icon} alt='' h={24} w={24}  />

        <div className="flex flex-col gap-[4px]">
            <Typography 
                text={data.title} 
                className='text-[#191919] text-[16px] font-[600] leading-[100%] tracking-[0%]' />

            <Typography 
                text={data.desc} 
                className='text-[#606060] text-[12px] font-[400] leading-[100%] tracking-[0%]' />
        </div>

        <button className='w-full '>Create Budget</button>

    </div>
  )
}

export default Card;
