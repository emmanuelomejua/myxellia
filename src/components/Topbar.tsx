'use client';

import React, { useState } from 'react'
import Images from './primitives/Images';
import Link from 'next/link';

const Topbar = () => {

  const [openCal, setOpenCal] = useState(false)


  return (
    <div className='h-[82px] mainBlack flex'>
        <div className="flex items-center justify-between max-w-[1284px] w-full mx-auto ">
        <Images src='/icons/logo.svg' alt='Logo' h={50} w={70}/>

        <div className="flex items-center gap-4">
            <Images src='/icons/not.svg' alt='Logo' h={32} w={32}/>
            <Link href='/budgeting/create'>
              <Images src='/icons/budgeting.svg' alt='Logo' h={32} w={32} className='cursor-pointer'/>
            </Link>
            <Images src='/icons/calendar.svg' alt='Logo' h={32} w={32} className='cursor-pointer'/>
            <Images src='/icons/message-notif.svg' alt='Logo' h={32} w={32}/>

            <Images src='/icons/profile.svg' alt='Logo' h={40} w={40} className='rounded-full object-cover cursor-pointer'/>
        </div>
        </div>
    </div>
  )
}

export default Topbar;

