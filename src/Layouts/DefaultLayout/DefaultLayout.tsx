import React from 'react'
import { Content } from '../components/Content/Content'
import { InformationPages } from '../components/InformationPages/InformationPages'
import { Header } from '~/components/Header/Header'

export const DefaultLayout: React.FC = () => {
  return (
    <div className='wrapper'>
      <Header />
      <div className='containner'>
        <Content />
        <div className='information_pages'>
          <InformationPages />
        </div>
      </div>
    </div>
  )
}
