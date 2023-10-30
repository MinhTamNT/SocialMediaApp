import React from 'react'

interface Iprop {
  children: React.ReactNode
}

export const Wrapper: React.FC<Iprop> = ({ children }) => {
  return <div className='wrapper sm:w-[649px]'>{children}</div>
}
