import TextField from '@/components/primitives/TextField';
import Typography from '@/components/primitives/Typography';
import Image from 'next/image';
import React, { FC } from 'react';


interface widgetProps {
    amt: string;
    amtColor: string;
    desc: string;
    icon: string;
    percent: string | number;
    percentColor: string
}

const Widget: FC<widgetProps> = ({amt, amtColor, desc, icon, percent, percentColor}) => {
  return (
    <div className='flex flex-col justify-between px-[18px] py-[13px] w-[189px] h-[73px] bg-[#FFFFFF] rounded-[12px] border-1 border-[#E4E4E4]'>
        <TextField text={`₦${amt}`} className={`text-[19px] font-[600] leading-[100%] tracking-[0%] ${amtColor}`}/>

        <div className="flex items-center gap-1">
            <Typography text={desc} className='font-[500] text-[10px] leading-[100%] text-[#3D3D3D] tracking-[0%]' />
            <Image src={icon} alt='Icon' width={14} height={14} />
            <p className={`font-[400] text-[10px] leading-[100%] tracking-[0%] ${percentColor}`}>{percent}%</p>
        </div>
    </div>
  )
}

export default Widget;
