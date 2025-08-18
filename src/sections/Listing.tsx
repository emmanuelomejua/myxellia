import Stats from '@/modules/Stats';
import React from 'react';
import { stat1, stat2 } from '@/data/data';

const Listing = () => {

  return (
    <div className='w-[401px] flex flex-col justify-between gap-1'>
      <Stats icon='/chart/home.svg' title='Listings Overview' stats={stat1}/>
      <Stats icon='/chart/profile.svg' title='Users Overview' stats={stat2}/>
    </div>
  )
}

export default Listing;
