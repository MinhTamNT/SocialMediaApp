import React, { ReactNode } from 'react'
import { Header } from '~/components/Header/Header'
import { Content } from '../components/Content/Content'

interface DefaultLayoutProps {
  children: ReactNode
}

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div className='wrapper'>
      <Header />
      <div className='containner'>
        <Content />
        <div className='information_pages'>{children}</div>
      </div>
    </div>
  )
}
