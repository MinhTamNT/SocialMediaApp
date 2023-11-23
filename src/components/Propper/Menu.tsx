import React from 'react'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import { Wrapper as PopperWrapper } from '../Propper/Wrapper'
import { MenuItems } from './MenuItems'
interface IMenuProp {
  children: React.ReactNode
  items: Array<object>
}

export const Menu: React.FC<IMenuProp> = (props) => {
  const { children, items } = props

  if (!React.isValidElement(children)) {
    return null
  }

  const renderItems = () => {
    return items.map((item, index) => <MenuItems key={index} data={item} />)
  }
  return (
    <Tippy
      interactive
      visible
      render={(arrts) => (
        <div className='shadow-sm bg-white w-[244px] rounded-md' tabIndex={-1} {...arrts}>
          <PopperWrapper className='pb-[8px]'>
            <header className='text-15 p-4 text-text-color-weak pointer-events-none'>My warehouse</header>
            {renderItems()}
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  )
}
