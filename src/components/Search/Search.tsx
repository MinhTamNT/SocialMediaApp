import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { GrLinkPrevious } from 'react-icons/gr'
interface Iprop {
  setSearch: React.Dispatch<React.SetStateAction<boolean>>
}
export const Search: React.FC<Iprop> = (props) => {
  const { setSearch } = props
  const [inputValue, setInputValue] = useState('')
  const handlerToggleBack = () => {
    setSearch(false)
  }
  const handlerPermisionValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    if (inputValue.length <= 50) setInputValue(inputValue)
  }
  return (
    <div className='z-10 top-0 left-0 absolute w-full px-4 py-2 bg-white'>
      <div className=' flex items-center relative'>
        <div className=''>
          <button className='w-[20px] h-[20px] rounded-md grid auto-cols-max justify-center items-center mr-2 hover:bg-hover-deafult'>
            <GrLinkPrevious size={'22px'} onClick={handlerToggleBack} />
          </button>
        </div>
        <input
          className='w-full h-10 pl-8 pr-4 rounded-lg border-none outline-none'
          placeholder='Search the news today'
          maxLength={50}
          onChange={handlerPermisionValue}
        />
        <span className='absolute right-0 top-[10px] mr-[-6px]'>
          <AiOutlineSearch size={'22px'} />
        </span>
      </div>
    </div>
  )
}
