import { cal } from '@/constant/images';
import Image from 'next/image';
import React from 'react'
import Card from './modules/Card';
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
    <div className='h-screen w-fullabsolute w-screen top-0 left-0 z-20 bg-[#293139a6] flex items-center justify-center'>
     <div className="h-[559px] w-[438px] rounded-[10px] pb-[24px] border-1 border-[#E4E4E4] ">
        {/* Top Section */}
        <div className="bg-[#0C2841] rounded-t-[10px] border-x-[0.5] border-t-[0.5] h-[213px] w-full px-[16px] pt-[16px] border-b-[#E4E4E7] border-[0.5px]">
            <div className="bg-[#0916204D] h-full w-full flex items-center justify-center">
              <Image src={cal} alt='Calculator' height={80} width={80} />
            </div>
        </div>

          {/* Main Container */}
         <div className="h-full flex flex-col items-center p-[24px] gap-[8px]">
            {budgetData.map((data, index) => (
              <Card key={index} data={data}/>
            ))}

            <Button text='Create Budget' 
              className='rounded-full font-[500] text-[16px] leading-[140%] tracking-[1%] bg-[#18181B] text-[#FFFFFF] w-[344px] mx-auto p-[12px] cursor-pointer'/>
         </div>
     </div>
    </div>
  )
}

export default CreateBuget;
