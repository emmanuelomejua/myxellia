import React, { FC } from 'react';

type btnType = {
    className: string;
    text: string;
}

const Button: FC<btnType> = ({className, text}) => {
  return (
    <div className='w-full flex'>
        <button className={className}>{text}</button>
    </div>
  )
}

export default Button;
