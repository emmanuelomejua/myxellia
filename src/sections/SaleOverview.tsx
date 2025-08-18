'use client'

import TextField from '@/components/primitives/TextField';
import Typography from '@/components/primitives/Typography';
import React, { useState } from 'react'
import Widget from '../modules/Widget';
import BarchartComp from '@/modules/barchart/BarChart';

const SaleOverview = () => {

  const list = ['1 Week', '1 Month', '1 Year'];

  const [active, setActive] = useState('1 Year');

  return (
    <div className='border-1 border-[#E4E4E4] bg-[#FFFFFF] rounded-[16px] flex flex-col w-[857px]'>
      <div className="flex flex-col gap-4 w-full border-b-1 border-[#E4E4E4] py-[14px]">
        <div className="flex justify-between px-[20px]">
            <div className="flex flex-col gap-[20px]">
                <TextField className='textColor' text='Sales Overview' />
                <Typography text='Showing overview Jan 2022 - Sep 2022' className='text-[#606060] text-[12px] font-[400] leading-[100%]' />
            </div>

             <div className="p-4 border-1 border-[#D6D6D6] rounded-[72px] w-[177px] h-[46px] flex items-center justify-center">
                <Typography text='View Transactions' className='text-[#191919] text-[12px] font-[500] leading-[100%]' />
             </div>
        </div>

        <div className="flex items-center justify-end px-[20px] gap-[10px]">
          {list.map((l, index)=> (
            <Typography 
              key={index}
              text={l} 
              onClick={() => setActive(l)}
              className={`text-[#3D3D3D] cursor-pointer text-[14px] leading-[100%]  ${active === l ? 'bg-[#F5F5F5] font-[600]': 'font-[400]'} rounded-[8px] h-[38px] w-[80px] flex items-center justify-center`} />
          ))}
        </div>
      </div>

        <div className="px-[20px] py-[14px] flex">
          <div className="flex-1">
            <BarchartComp />
          </div>

          <div className="flex-1 flex items-center flex-wrap justify-between gap-2 ml-8">
            <Widget amt='120,000,000.00' amtColor='text-[#4545FE]' percent={2.5} percentColor='text-[#4545FE]' icon='/chart/green.svg' desc='Total Inflow'/>
            <Widget amt='50,000,000.00' amtColor='text-[#12B76A]' percent={2.5} percentColor='text-[#12B76A]' icon='/chart/green.svg' desc='MRR'/>
            <Widget amt='200,000,000.00' amtColor='text-[#14B8A6]' percent={0.5} percentColor='text-[#14B8A6]' icon='/chart/blue.svg' desc='Commission Revenue'/>
            <Widget amt='100,000,000.00' amtColor='text-[#F04438]' percent={0.5} percentColor='text-[#F04438]' icon='/chart/red.svg' desc='GMV'/>
          </div>
        </div>
    </div>
  )
}

export default SaleOverview;
