import Stats from '@/modules/Stats';
import React from 'react'

const Listing = () => {
  const stat1 = [{stat: 'Total', val: '1.8k'}, {stat: 'Active', val: '80'}, {stat: 'Archived', val: '1k'}];

  const stat2 = [{stat: 'Total', val: '20.7k'}, {stat: 'Riders', val: '8.5k'}, {stat: 'Subscribers', val: '7.5k'}];

  return (
    <div className='w-[401px] flex flex-col justify-between gap-1'>
      <Stats icon='/chart/home.svg' title='Listings Overview' stats={stat1}/>
      <Stats icon='/chart/profile.svg' title='Users Overview' stats={stat2}/>
    </div>
  )
}

export default Listing;
