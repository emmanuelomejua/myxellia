'use client';

import Images from '@/components/primitives/Images';
import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom';

const Chatbox = () => {

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true)
    },[])

    if (!mounted) return null;

  return (
    <>
    {createPortal(
    <div className='z-[999] flex items-center justify-between cursor-pointer bg-[#242526] p-[16.8px] h-[50px] w-[50px] absolute top-[590px] right-5 rounded-full'>
        <Images src='/icons/chatbox.svg' alt='Chat' h={14} w={24} onClick={() => {}} />
    </div>, document.body
    )}
    </>
  )
}

export default Chatbox;
