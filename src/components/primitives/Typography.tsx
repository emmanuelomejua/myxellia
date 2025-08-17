import React from 'react'

const Typography = ({className, text}: {className: string, text: string}) => {
  return (
   <span className={className}>{text}</span>
  )
}

export default Typography;
