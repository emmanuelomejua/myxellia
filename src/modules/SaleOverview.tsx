import TextField from '@/components/primitives/TextField';
import React from 'react'

const SaleOverview = () => {
  return (
    <div className='border-1 border-[#E4E4E4] bg-[#FFFFFF] p-4 rounded-[16px] flex flex-col w-[857px]'>
        <div className="flex justify-between">
            <div className="flex flex-col">
                <TextField className='textColor' text='Sales Overview' />
            </div>
             <div className=""></div>
        </div>

        <div className=""></div>
    </div>
  )
}

export default SaleOverview;
