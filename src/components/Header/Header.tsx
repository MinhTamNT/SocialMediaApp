import React, { useState, useEffect } from 'react'
import { AiOutlineMenu, AiOutlineSearch, AiOutlineCloseCircle } from 'react-icons/ai'
import { FaEarthAfrica } from 'react-icons/fa6'
import { RiHome5Line } from 'react-icons/ri'
import { CiBellOn, CiLogin, CiUser, CiSettings, CiLogout } from 'react-icons/ci'
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined'
import { FaRegMessage } from 'react-icons/fa6'
import { images } from '~/assets/images/image'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import { SearchNewsItems } from '../Search/SearchNewsItems/SearchNewsItems'
import { Wrapper as PopperWrapper } from '../Propper/Wrapper'
import { Button } from '../Button/Button'
import { Menu } from '../Propper/Menu'
import { ToggleSwitch } from '../Propper/ToogleSwitch/ToggleSwitch'
interface IHomeProps {
  isMobile?: boolean
  setLogin: React.Dispatch<React.SetStateAction<boolean>>
}
let toggleSwitchComponent = <ToggleSwitch />
const MENU_ITEMS = [
  {
    iconLeft: <CiUser size='25' />,
    title: 'Profile'
  },
  {
    iconLeft: toggleSwitchComponent,
    title: 'OnLine status'
  },
  {
    iconLeft: <CiSettings size='25' />,
    title: ' User Setting',
    seperate: true
  },
  {
    iconLeft: <CiLogout size='25' />,
    title: ' Logout'
  }
]
export const Header: React.FC<IHomeProps> = (props) => {
  const { isMobile, setLogin } = props
  const currentUser = false
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
  const handlerToogleLogin = () => {
    setLogin(true)
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
              <div className='logo_website flex items-center gap-2'>
                <img src={images.logo} className='h-[32px]' />
                <p className='hidden md:block text-15 font-bold'>Open University</p>
              </div>
            </>
          )}
          <div className='md:ml-10 hidden md:border-[1px] md:flex items-center md:gap-2 md:px-10 md:py-2 font-bold text-text-color-weak hover:bg-hover-popper rounded-xl'>
            <RiHome5Line size={'25px'} />
            <span className='hidden md:block'>Home</span>
          </div>
        </div>
      </div>
      <div className='inner-header-action flex items-center gap-5'>
        {currentUser ? (
          <>
            <div className='search-action flex'>
              {isMobile ? (
                <> </>
              ) : (
                <>
                  <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(arrts) => (
                      <div className='result-search w-[660px]' tabIndex={-1} {...arrts}>
                        <PopperWrapper className='wrapper md:w-full md:bg-PopperWrapper-color-Tippy md:shadow-md md:rounded-lg'>
                          <SearchNewsItems />
                        </PopperWrapper>
                      </div>
                    )}
                  >
                    <div className='search relative md:w-[600px] w-[350px] h-[40px] pl-[16px] border-[1px] rounded-lg flex '>
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
              <div className='action_function flex items-center gap-1 relative md:mx-auto'>
                <Tippy content='Search' placement='bottom'>
                  <button className='default-button-icons md:hidden'>
                    <AiOutlineSearch size={'25px'} />
                  </button>
                </Tippy>
                <Tippy content='Message' placement='bottom'>
                  <div className='relative'>
                    <button className='default-button-icons'>
                      <FaRegMessage size={'25px'} />
                      <span className='badge absolute top-[-3px] leading-4 right-0  bg-primary rounded-full px-[6px] text-white h-4 text-center text-sm'>
                        12
                      </span>
                    </button>
                  </div>
                </Tippy>
                <Tippy content='Notifications' placement='bottom'>
                  <div className='relative'>
                    <button className='default-button-icons'>
                      <CiBellOn size={'25px'} />
                      <span className='badge absolute top-[-3px] leading-4 right-0  bg-primary rounded-full px-[6px] text-white h-4 text-center text-sm'>
                        12
                      </span>
                    </button>
                  </div>
                </Tippy>

                {isMobile ? (
                  <></>
                ) : (
                  <>
                    <Tippy content='Create the post' placement='bottom'>
                      <button className='default-button-icons'>
                        <CreateOutlinedIcon className='text-[25px]' />
                      </button>
                    </Tippy>

                    <Tippy content='Popular' placement='bottom'>
                      <button className='default-button-icons'>
                        <FaEarthAfrica className='text-[25px] text-avatar-color' />
                      </button>
                    </Tippy>
                  </>
                )}
              </div>
              <Menu items={MENU_ITEMS}>
                <div className='user md:w-[170px] relative flex items-center md:justify-between md:border-[1px] p-[8px] md:px-2 md:py-2 hover:bg-hover-popper md:rounded-lg mr-2'>
                  <div className='flex items-center gap-2'>
                    <img
                      src='https://styles.redditmedia.com/t5_2qinp/styles/communityIcon_ex2l6ktnrob51.png'
                      className='h-[32px] rounded-full object-cover'
                    />
                    <span className='w-[10px] h-[10px] absolute  text-avatar-color right-[2px] bottom-[-1px] rounded-full md:hidden '></span>
                  </div>
                  <span className='text-16 leading-3 md:block hidden'>Username</span>
                  <div className='icon hidden md:block'>
                    <span className='z-10 absolute w-[7px] h-[7px] bg-text-color-weak left-[10px] rounded-full bottom-[9px]'></span>
                  </div>
                </div>
              </Menu>
            </div>
          </>
        ) : (
          <>
            <div className='mr-3'>
              {isMobile ? (
                <>
                  <Button outline className='shadow-xl' onClick={handlerToogleLogin}>
                    Login in
                  </Button>
                </>
              ) : (
                <>
                  <Button primary LeftIcon={<CiLogin className='text-black text-20' />} onClick={handlerToogleLogin}>
                    Login in
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
