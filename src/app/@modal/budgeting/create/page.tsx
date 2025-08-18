import { cal } from '@/constant/images';
import Image from 'next/image';
import React from 'react'

const CreateBuget = () => {
  return (
    <div className='h-screen w-full flex items-center justify-center'>
     <div className="h-[559px] w-[438px] rounded-t-[10px] pb-[24px] ">
        {/* Top Section */}
        <div className="bg-[#0C2841] rounded-t-[10px] border-x-[0.5] border-t-[0.5] h-[213px] w-full px-[16px] pt-[16px] border-b-[#E4E4E7] border-[0.5px]">
            <div className="bg-[#0916204D] h-full w-full flex items-center justify-center">
              <Image src={cal} alt='Calculator' height={80} width={80} />
            </div>
        </div>

          {/* Main Container */}
         <div className="h-full flex flex-col items-center justify-center">
          We are coming
         </div>
     </div>
    </div>
  )
}

export default CreateBuget;
