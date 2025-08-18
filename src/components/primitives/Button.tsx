import React, { FC } from 'react';

type btnType = {
    className: string;
    text: string;
    onClick?: () => void;
}

const Button: FC<btnType> = ({className, text, onClick}) => {
  return (
    <div className='w-full flex'>
        <button className={className} onClick={onClick}>{text}</button>
    </div>
  )
}

export default Button;
