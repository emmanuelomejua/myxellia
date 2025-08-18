import React from 'react'

const Typography = ({className, text, onClick}: {className: string, text: string, onClick?: () => void}) => {
  return (
   <span className={className} onClick={onClick}>{text}</span>
  )
}

export default Typography;
