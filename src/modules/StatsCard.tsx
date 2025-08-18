import Typography from '@/components/primitives/Typography';
import React from 'react'


interface propsType {
    prop: {stat: string, val: string}
}

const StatsCard = ({prop}: propsType) => {
  return (
    <div className='flex flex-col gap-[8px] w-[100px]'>
        <Typography className='font-[500] text-[14px] leading-[20px] text-[#525252] tracking-[0%]' text={prop.stat} />
        <Typography className='font-[600] text-[24px] leading-[38px] text-[#141414] tracking-[0%]' text={prop.val} />
    </div>
  )
}

export default StatsCard;
