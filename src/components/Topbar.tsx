'use client';

import React, { useState } from 'react';
import Images from './primitives/Images';
import ModalComp from './modals/Modal';
import CreateBuget from '@/modules/budget/CreateBudget';
import MyCalendar from '@/modules/calendar/Calendar';



const Topbar = () => {

  const [openCal, setOpenCal] = useState(false);
  const [openBudgetModal, setOpenBudgetModal] = useState(false);


  return (
    <div className='h-[82px] mainBlack flex'>
        <div className="flex items-center justify-between max-w-[1284px] w-full mx-auto ">
        <Images src='/icons/logo.svg' alt='Logo' h={50} w={70}/>

        <div className="flex items-center gap-4">
            <Images src='/icons/not.svg' alt='Logo' h={32} w={32}/>
            <Images src='/icons/budgeting.svg' alt='Logo' onClick={() => setOpenBudgetModal(true)} h={32} w={32} className='cursor-pointer'/>
            <Images src='/icons/calendar.svg' alt='Logo' onClick={() => setOpenCal(true)} h={32} w={32} className='cursor-pointer'/>
            <Images src='/icons/message-notif.svg' alt='Logo' h={32} w={32}/>

            <Images src='/icons/profile.svg' alt='Logo' h={40} w={40} className='rounded-full object-cover cursor-pointer'/>
        </div>
        </div>

        {openBudgetModal &&
          <ModalComp open={openBudgetModal} onClose={() => setOpenBudgetModal(false)}>
              <CreateBuget/>
        </ModalComp>
        }

        {/* {openCal && 
        <div className="absolute top-[82px]">
          <MyCalendar/>
        </div>}
         */}
      
    </div>
  )
}

export default Topbar;

