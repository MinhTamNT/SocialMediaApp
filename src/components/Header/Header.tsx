import React, { useState, useEffect } from 'react'
import { Navbar } from '~/components/Nabar/NavbarMobile'
import { Search } from '~/components/Search/Search'
import { DetailProfile } from '~/components/DeatilProfileMenuItems/DetailProfile/DetailProfile'
import { AiOutlineCloseCircle, AiOutlineLoading3Quarters, AiOutlineHome, AiOutlineClose } from 'react-icons/ai'
import { BiLogIn, BiMessageAltMinus } from 'react-icons/bi'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { CgDetailsMore } from 'react-icons/cg'
import { images } from '~/assets/images/image'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import { SearchNewsItems } from '../Search/SearchNewsItems/SearchNewsItems'
import { Wrapper as PopperWrapper } from '../Propper/Wrapper'
import { Button } from '../Button/Button'
export const Header: React.FC = () => {
  const currentUser = true
  const [isDetailProfileVisible, setDetailProfileVisible] = useState(false)
  const [isSearch, setSearch] = useState(false)
  const [searchResult, setSearchResult] = useState([])
  const [isOpenSetting, setOpenSetting] = useState(false)
  const [isMobile, setMobile] = useState(false)
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  useEffect(() => {
    if (windowSize.width >= 500 && windowSize.width < 1024) {
      setMobile(true)
    } else if (windowSize.width < 500) {
      setMobile(true)
    } else {
      setMobile(false)
    }
  }, [windowSize])
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([])
    }, 0)
  }, [])
  const handlerToggleOpenSetiing = () => {
    setOpenSetting(!isOpenSetting)
  }
  return (
    <header className='wrapper md:flex md:justify-center w-full h-[60px] bg-color-deafult border-[1px] relative border-b-sm shadow-sm'>
      <div className='inner w-full md:w-[1350px] md:mr-3 md:ml-3 2xl:w-[1850px] md:flex md:items-center md:justify-between '>
        {isMobile ? (
          <>
            <Navbar setDetailProfileVisible={setDetailProfileVisible} setSearch={setSearch} isMobile={isMobile} />
            {isSearch && <Search setSearch={setSearch} />}
            {isDetailProfileVisible && (
              <div className='fixed inset-0 flex justify-center items-center bg-color-bg-detailprofile                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           '>
                <DetailProfile isVisible={isDetailProfileVisible} setDetailProfile={setDetailProfileVisible} />
              </div>
            )}
          </>
        ) : (
          <>
            <div className='flex items-center  '>
              <Tippy content='Home' placement='bottom'>
                <div className=''>
                  <div className='menu-bar'></div>
                  <div className='logo-webiste flex items-center w-[50px]'>
                    <img src={images.logo} alt='images' className='h-[32px] cursor-pointer object-cover mr-20' />
                  </div>
                </div>
              </Tippy>
              <span className='ml-3 text-16 leading-3'>Open Unviserty</span>
              {currentUser ? (
                <>
                  <div
                    className='name_page flex justify-between items-center 
                  text-xl font-bold gap-3 w-[200px] ml-10 cursor-pointer  px-4 py-2 hover:bg-hover-deafult rounded-md ease-in duration-300'
                  >
                    <div className='flex items-center gap-2'>
                      <button>
                        <AiOutlineHome size={'25px'} />
                      </button>
                      <span>Home</span>
                    </div>
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
            <div>
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
            </div>
            <div className='action ml-10 flex items-center'>
              {currentUser ? (
                <>
                  <Tippy content='Message' placement='bottom'>
                    <div className='flex cursor-pointer bg-transparent relative mr-5 '>
                      <BiMessageAltMinus size={'32px'} />
                      <span className='w-2 h-2 absolute bg-red-500 right-0 top-0 rounded-full'></span>
                    </div>
                  </Tippy>
                  <Tippy content='Notifications' placement='bottom'>
                    <div className='flex cursor-pointer bg-transparent relative'>
                      <IoIosNotificationsOutline size={'32px'} />
                      <span className='w-2 h-2 absolute bg-red-500 right-[5px] top-[2px] rounded-full'></span>
                    </div>
                  </Tippy>
                  <div
                    className='avatar_user w-[200px] object-cover border-[1px] flex items-center  
                  text-12 font-bold gap-3  ml-10 cursor-pointer mr-10 px-4 py-2 hover:bg-hover-deafult rounded-md ease-in duration-300'
                    onClick={handlerToggleOpenSetiing}
                  >
                    <img
                      src='https://avatars.githubusercontent.com/u/102682115?v=4'
                      className='rounded-full cursor-pointer w-[32px]'
                      alt='user_image'
                    />
                    <span className='name_user text-text-color-weak'>minhtam7895</span>
                    <div className='ease-in duration-300'>
                      {isOpenSetting ? (
                        <>
                          <AiOutlineClose size={'20px'} />
                        </>
                      ) : (
                        <>
                          <CgDetailsMore size={'32px'} />
                        </>
                      )}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <Button text className='hover:bg-hover-deafult hover:rounded-md text-16'>
                    Sign up
                  </Button>
                  <Button small rightIcon={<BiLogIn size='22px' />}>
                    Sign in
                  </Button>
                </>
              )}
            </div>
          </>
        )}
      </div>
    </header>
  )
}
