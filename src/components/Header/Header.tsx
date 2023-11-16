import React, { useState, useEffect } from 'react'
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineCloseCircle,
  AiOutlineArrowUp,
  AiOutlineArrowDown
} from 'react-icons/ai'
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined'
import { FaRegMessage } from 'react-icons/fa6'
import { images } from '~/assets/images/image'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import { SearchNewsItems } from '../Search/SearchNewsItems/SearchNewsItems'
import { Wrapper as PopperWrapper } from '../Propper/Wrapper'
interface IHomeProps {
  isMobile?: boolean
}
export const Header: React.FC<IHomeProps> = (props) => {
  const { isMobile } = props
  const currentUser = true
  const [searchResult, setSearchResult] = useState([])
  const [isOpenSetting, setOpenSetting] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([])
    }, 0)
  }, [])
  const handlerToggleOpenSetiing = () => {
    setOpenSetting(!isOpenSetting)
  }
  return (
    <header className='h-[60px] fixed top-0 left-0 w-full z-10 flex shadow-sm items-center justify-between'>
      <div className='inner-header-menu px-[20px] flex items-center'>
        <div className='logowebiste_togglemenu flex items-center'>
          {isMobile ? (
            <>
              <div className='menu_mobile'>
                <button className='default-button-icons'>
                  <AiOutlineMenu size={'25'} />
                </button>
              </div>
              <div className='logo_website w-[50px]'>
                <img src={images.logo} className='h-[32px]' />
              </div>
            </>
          ) : (
            <>
              <div className='logo_website w-[50px]'>
                <img src={images.logo} className='h-[32px]' />
              </div>
            </>
          )}
        </div>
      </div>
      <div className='inner-header-action flex items-center gap-5'>
        <div className='search-action flex'>
          {isMobile ? (
            <>
              {' '}
              <Tippy content='Search' placement='bottom'>
                <button className='default-button-icons md:hidden'>
                  <AiOutlineSearch size={'25px'} />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Tippy
                interactive
                visible={searchResult.length > 0}
                render={(arrts) => (
                  <div className='result-search w-[660px]' tabIndex={-1} {...arrts}>
                    <PopperWrapper>
                      <SearchNewsItems />
                    </PopperWrapper>
                  </div>
                )}
              >
                <div className='search relative w-[600px] h-[40px] pl-[16px] border-[1px] rounded-lg flex '>
                  <input
                    placeholder='Search The News'
                    spellCheck={false}
                    className='text-lg bg-transparent outline-none p-4 h-full flex-1 caret-primary'
                  />
                  <button className='btn-close search-btn-loading-clear'>
                    <AiOutlineCloseCircle />
                  </button>
                  {/* <div className='loading search-btn-loading-clear'>
                  <AiOutlineLoading3Quarters />
                </div> */}
                  <button className='search-btn absolute left-2 top-3 w-[52px] '>
                    <svg
                      fill='currentColor'
                      height='16'
                      icon-name='search-outline'
                      viewBox='0 0 20 20'
                      width='16'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M19.5 18.616 14.985 14.1a8.528 8.528 0 1 0-.884.884l4.515 4.515.884-.884ZM1.301 8.553a7.253 7.253 0 1 1 7.252 7.253 7.261 7.261 0 0 1-7.252-7.253Z'></path>{' '}
                    </svg>
                  </button>
                </div>
              </Tippy>
            </>
          )}
        </div>
        <div
          className='handler-action flex items-center transition-all ease-out cursor-pointer'
          onClick={handlerToggleOpenSetiing}
        >
          <div className='action_function flex items-center gap-2'>
            <Tippy content='Message' placement='bottom'>
              <div className='relative'>
                <button className='default-button-icons'>
                  <FaRegMessage size={'25px'} />
                  <span className='badge absolute top-[-3px] leading-4 right-0 bg-primary rounded-full px-[6px] text-white h-4 text-center text-sm'>
                    12
                  </span>
                </button>
              </div>
            </Tippy>
            <Tippy content='Create the post' placement='bottom'>
              <button className='default-button-icons'>
                <CreateOutlinedIcon className='text-[25px]' />
              </button>
            </Tippy>
            <Tippy content='Create the post' placement='bottom'>
              <button className='default-button-icons md:block hidden'>
                <CreateOutlinedIcon className='text-[25px]' />
              </button>
            </Tippy>
            <Tippy content='Create the post' placement='bottom'>
              <button className='default-button-icons md:block hidden'>
                <CreateOutlinedIcon className='text-[25px]' />
              </button>
            </Tippy>
          </div>
          <div className='user md:w-[170px] relative flex items-center md:justify-between md:border-[1px] md:px-2 md:py-2 hover:bg-hover-popper md:rounded-lg'>
            <div className='flex items-center gap-2'>
              <img
                src='https://styles.redditmedia.com/t5_2qinp/styles/communityIcon_ex2l6ktnrob51.png'
                className='h-[32px] rounded-full object-cover'
              />
              <span className='w-[6px] h-[6px] absolute bg-green-300 right-[2px] bottom-[-1px] rounded-full md:hidden '></span>
              <span className='text-16 leading-3 md:block hidden'>Username</span>
            </div>
            <div className='icon hidden md:block'>
              {isOpenSetting ? (
                <>
                  <AiOutlineArrowUp size='25' />
                </>
              ) : (
                <>
                  {' '}
                  <AiOutlineArrowDown size='25' />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
