import Typography from '@/components/primitives/Typography';
import Image from 'next/image';
import React from 'react'
import StatsCard from './StatsCard';


interface statType {
    stats: {stat: string, val: string}[];
    icon: string;
    title: string
}

const Stats = ({stats, icon, title}: statType) => {
  return (
    <div className='h-[152px] flex flex-col border-1 border-[#E4E4E4] rounded-[16px] bg-[#FFFFFF]'>
        <div className="h-[50px] flex items-center justify-between px-[16px] py-[13px] bg-[#F9FAFB] rounded-t-[16px] border-b-1 border-[#E4E4E4]">
            <div className="flex items-center gap-[10px]">
                <Image src={icon} alt='' width={24} height={24} />
                <Typography text={title} className='text-[14px] leading-[100%] tracking-[0%] font-[500] text-[#292929]' />
            </div>

            <div className="flex items-center text-[#4545FE]">
                <Typography text='View all' className='text-[12px] font-[500] leading-[100%] tracking-[0%]' />
                <Image src='/chart/right.svg' alt='' width={18} height={18} />
            </div>
        </div>

        <div className="flex justify-between p-[16px] ">
            {stats.map((stat, index) => (
                <StatsCard prop={stat} key={index}/>
            ))}
        </div>
    </div>
  )
}

export default Stats;
