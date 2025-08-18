'use client';

import React from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    av: 200,
    uv: 40,
    pv: 140,
    amt: 240,
  },
  {
    name: 'Feb',
    av: 200,
    uv: 300,
    pv: 139,
    amt: 221,
  },
  {
    name: 'Mar',
    av: 50,
    uv: 200,
    pv: 180,
    amt: 229,
  },
  {
    name: 'Apr',
    av: 100,
    uv: 278,
    pv: 90,
    amt: 300,
  },
  {
    name: 'May',
    av: 200,
    uv: 109,
    pv: 400,
    amt: 218,
  },
  {
    name: 'Jun',
    av: 200,
    uv: 23,
    pv: 80,
    amt: 500,
  },
  {
    name: 'Jul',
    av: 200,
    uv: 49,
    pv: 130,
    amt: 110,
  },
  {
    name: 'Sep',
    av: 200,
    uv: 349,
    pv: 130,
    amt: 21,
  },
];

const BarchartComp = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} horizontal={false}/>
        <XAxis dataKey="name" axisLine={false}/>
        <YAxis axisLine={false}/>
        {/* <Tooltip /> */}
        <Bar dataKey="av" fill="#4545FE" barSize={4} activeBar={<Rectangle fill="pink" stroke="blue" />} />
        <Bar dataKey="pv" fill="#12B76A" barSize={4} activeBar={<Rectangle fill="pink" stroke="blue" />} />
        <Bar dataKey="uv" fill="#F04438" barSize={4} activeBar={<Rectangle fill="gold" stroke="purple" />} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarchartComp;
