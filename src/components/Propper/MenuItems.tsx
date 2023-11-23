import React from 'react'
import { Button } from '../Button/Button'

interface MenuItemsProp {
  data: any
}

export const MenuItems: React.FC<MenuItemsProp> = (props) => {
  const { data } = props

  const renderSeparator = () => {
    return <hr className='my-2 border-gray-200' /> // Adjust the styling as needed
  }

  return (
    <div className=''>
      <Button
        className='hover:bg-hover-popper text-16 gap-3 w-full justify-start rounded-none'
        LeftIcon={data.iconLeft}
        rightIcon={data.iconRight}
        to={data.to}
      >
        {data.title}
      </Button>
      {data.seperate && renderSeparator()}
    </div>
  )
}
