import React from 'react';

const listMenu = [
    {icon: '', text: 'Dashboard'},
    {icon: '', text: 'Listings'},
    {icon: '', text: 'Users'},
    {icon: '', text: 'Request'},
    {icon: '', text: 'Applications'},
]

const Navbar = () => {
  return (
    <div className='mt-[7px] flex items-center justify-between'>
        {listMenu.map((menu, index) => (
            <div className="flex items-center gap-[10px] w-[170px] h-[38px] rounded-[8px] py-[7px] px-[28px]">
                H
            </div>
        ))}
        <div className="flex items-center">
            <input type="text" placeholder='Search... properties, customers here' className="" />
        </div>
    </div>
  )
}

export default Navbar;
