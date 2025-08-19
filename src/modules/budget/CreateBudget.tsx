'use client';

import { cal } from '@/constant/images';
import Image from 'next/image';
import React from 'react'
import Card from './Card';
import Button from '@/components/primitives/Button';



const budgetData = [
  {
    icon: '/budget/setting.svg', 
    title: 'Set up annual budgets by account category', 
    desc: 'Allocate funds across income and expense lines with full visibility.'
  },
  {
    icon: '/budget/adjust.svg', 
    title: 'Track actuals vs budget in real time', 
    desc: 'See how your community is performing against plan, month by month.'
  },
  {
    icon: '/budget/track.svg', 
    title: 'Adjust figures and forecast with ease', 
    desc: "Edit amounts, apply percentage changes, or roll forward last year’s data—all in one place."
  },
]

const CreateBuget = () => {

  return (
     <div className="h-[359px] z-[999] w-[438px] rounded-[10px] pb-[24px] border-t-[#0C2841] border-b-1 border-[#E4E4E4]">
        {/* Top Section */}
        <div className="bg-[#0C2841] z-[9999] rounded-t-[10px] border-x-[0.5] border-t-[0.5] h-[213px] w-full px-[16px] pt-[16px] border-b-[#E4E4E7] border-[0.5px]">
            <div className="bg-[#0916204D] h-full w-full flex items-center justify-center">
              <Image src={cal} alt='Calculator' height={80} width={80} />
            </div>
        </div>

          {/* Main Container */}
         <div className="h-full z-[9999] flex flex-col items-center p-[24px] gap-[8px] bg-[#FFFFFF] rounded-b-[10px]">
            {budgetData.map((data) => (
              <Card key={data.title} data={data}/>
            ))}

            <Button text='Create Budget' 
              className='rounded-full font-[500] text-[16px] leading-[140%] tracking-[1%] bg-[#18181B] text-[#FFFFFF] w-[344px] mx-auto p-[12px] cursor-pointer'/>
         </div>
     </div>
  )
}

export default CreateBuget;
