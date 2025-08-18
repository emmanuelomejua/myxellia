'use client';

import Image from 'next/image';
import React, { useState } from 'react';

const listMenu = [
    {icon: '/general/home.svg', text: 'Dashboard'},
    {icon: '/general/toolbox.svg', text: 'Listings'},
    {icon: '/general/user.svg', text: 'Users'},
    {icon: '/general/article.svg', text: 'Request'},
    {icon: '/general/scroll.svg', text: 'Applications'},
]

const Navbar = () => {

    const [active, setActive] = useState('Dashboard');

  return (
    <div className='bg-[#FFFFFF] h-[67px] border-b-1 border-[#F4F4F5]'>
        <div className="flex items-center justify-between gap-1.5 max-w-[1284px] w-full h-full mx-auto">
        <div className="flex items-center gap-2">
            {listMenu.map((menu) => {
            const isActive = active === menu.text;
            return (
                <button
                key={menu.text}
                onClick={() => setActive(menu.text)}
                className={`flex items-center gap-2 w-[170px] h-[38px] rounded-lg px-4 py-2 transition-colors
                    ${isActive ? 'bg-[#F5F5F5] text-[#3D3D3D] font-semibold' : 'text-[#191919] font-medium hover:bg-gray-100'}
                `}
                >
                <Image src={menu.icon} alt={menu.text} width={20} height={20} />
                <span className="text-sm">{menu.text}</span>
                </button>
            );
            })}
        </div>

            <div className="flex items-center h-[43px] w-[319px] gap-2 border-1 border-[#E4E4E4] rounded-[12px] px-3 py-1 bg-[#F5F5F5]">
            <Image src="/general/search.svg" alt="Search" width={20} height={20} />
            <input
            type="text"
            placeholder="Search... properties, customers here"
            className="outline-none text-[12px] font-[300] text-[#919191]"
            />
        </div>

        </div>
    </div>
  )
}

export default Navbar;
