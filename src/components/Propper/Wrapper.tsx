import React from 'react'

interface Iprop {
  children: React.ReactNode
}

export const Wrapper: React.FC<Iprop> = ({ children }) => {
  return <div className='wrapper sm:w-[649px] md:w-[800px] lg:w-[800px] xl:w-[800px] 2xl:w-[800px]'>{children}</div>
}
