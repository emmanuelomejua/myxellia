import Image from 'next/image';
import React from 'react'

const Topbar = () => {
  return (
    <div className='h-[82px] bg-[#191919] flex'>
        <div className="flex items-center justify-between max-w-[1200px] w-full mx-auto ">
        <Image src='/icons/logo.svg' alt='Logo' height={50} width={70}/>

        <div className="flex items-center gap-4">
            <Image src='/icons/not.svg' alt='Logo' height={32} width={32}/>
            <Image src='/icons/budgeting.svg' alt='Logo' height={32} width={32}/>
            <Image src='/icons/calendar.svg' alt='Logo' height={32} width={32}/>
            <Image src='/icons/message-notif.svg' alt='Logo' height={32} width={32}/>

            <Image src='/icons/profile.svg' alt='Logo' height={40} width={40} className='rounded-full object-cover'/>
        </div>
        </div>
    </div>
  )
}

export default Topbar;

