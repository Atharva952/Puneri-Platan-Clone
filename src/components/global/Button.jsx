import React from 'react'

function Button({ children = 'Get Stared', style , className="" }) {
  return (
    <div style={{...style}}  className={`font-exo text-white bg-flame-orange -skew-x-12 font-semibold italic ${className}`}>{children}</div>
  )
}

export default Button