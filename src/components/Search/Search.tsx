import React, { useEffect, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { BiTrendingUp } from 'react-icons/bi'
import { GrLinkPrevious } from 'react-icons/gr'
import Tippy from '@tippyjs/react/headless'
import { Wrapper as PopperWrapper } from '../Propper/Wrapper'
import { SearchNewsItems } from '../SearchNewsItems/SearchNewsItems'

interface Iprop {
  setSearch: React.Dispatch<React.SetStateAction<boolean>>
}

export const Search: React.FC<Iprop> = (props) => {
  const { setSearch } = props
  const [inputValue, setInputValue] = useState('')
  const [searchNews, setSearchNews] = useState<number[] | string[]>([1, 2, 3])

  useEffect(() => {
    setSearchNews([1, 2, 3])
  }, [])

  const handlerToggleBack = () => {
    setSearch(false)
  }

  const handlerPermissionValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  return (
    <div className='z-10 top-0 left-0 absolute px-4 py-2 bg-white w-full h-screen lg:w-[800px]'>
      <Tippy
        interactive
        placement='bottom-start'
        visible={searchNews.length > 0}
        className='z-20'
        render={(attrs) => (
          <div className=' w-[361px] lg:w-[800px] xl:w-[800px] 2xl:w-[800px]' tabIndex={1} {...attrs}>
            <PopperWrapper>
              <div className='ml-2 mb-2 mt-3 text-text-color-weak flex items-center gap-2'>
                <BiTrendingUp size='22px' />
                <p className='text-13'>TRENDING TODAY</p>
              </div>
              <SearchNewsItems />
            </PopperWrapper>
          </div>
        )}
      >
        <div className='flex items-center relative'>
          <div className=''>
            <button className='w-5 h-5 rounded-md grid auto-cols-max justify-center items-center mr-2 hover:bg-gray-100'>
              <GrLinkPrevious size={'22px'} onClick={handlerToggleBack} />
            </button>
          </div>
          <input
            className='w-full h-10 pl-8 pr-4 rounded-lg border-none outline-none'
            placeholder='Search the news today'
            maxLength={50}
            value={inputValue}
            onChange={handlerPermissionValue}
          />
          <span className='absolute right-0 top-2 mr-2'>
            <AiOutlineSearch size={'22px'} />
          </span>
        </div>
      </Tippy>
    </div>
  )
}
