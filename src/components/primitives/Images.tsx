import Image from 'next/image';
import React, { FC } from 'react';

type ImageProps = {
    h: number;
    w: number;
    alt: string;
    src: string
    className?: string;
    onClick?: () => void;
}

const Images: FC<ImageProps> = ({h, w, alt, src, className, onClick}) => {
  return (
    <Image 
        src={src} alt={alt} 
        height={h} width={w} 
        onClick={onClick} 
        className={className}
    />
  )
}

export default Images;
