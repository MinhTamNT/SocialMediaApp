import React, { ReactNode } from 'react'
import { Header } from '~/components/Header/Header'
import { Content } from '../components/Content/Content'

interface DefaultLayoutProps {
  children: ReactNode
}

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div className='wrapper md:flex m:justify-center md:flex-col md:items-center overflow-x-hidden overflow-y-auto'>
      <Header />
      <div className='containner md:w-[1150px] md:flex md:mt-2 md:min-h-[100px]'>
        <Content />
        <div className='information_pages md:flex-1 md: md:min-h-[1000px] '>{children}</div>
      </div>
    </div>
  )
}
