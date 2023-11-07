import React, { useState, useEffect } from 'react'
import { Navbar } from '~/components/Nabar/NavbarMobile'
import { Search } from '~/components/Search/Search'
import { DetailProfile } from '~/components/DetailProfile/DetailProfile'
import { AiOutlineCloseCircle, AiOutlineLoading3Quarters } from 'react-icons/ai'
import { images } from '~/assets/images/image'
export const Header: React.FC = () => {
  const [isDetailProfileVisible, setDetailProfileVisible] = useState(false)
  const [isSearch, setSearch] = useState(false)
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
    if (windowSize.width >= 500 && windowSize.width < 768) {
      setMobile(true)
    } else if (windowSize.width < 500) {
      setMobile(true)
    } else {
      setMobile(false)
    }
  }, [windowSize])
  return (
    <header className='wrapper md:flex md:justify-center w-full h-[60px] bg-color-deafult border-[1px] relative border-solid border-boder-color-default border-b-sm '>
      <div className={`inner ${isMobile ? 'w-full' : 'w-[1350px]'} md:flex md:items-center md:justify-between `}>
        {isMobile ? (
          <>
            <Navbar setDetailProfileVisible={setDetailProfileVisible} setSearch={setSearch} />
            {isSearch && <Search setSearch={setSearch} />}
            {isDetailProfileVisible && (
              <div className='fixed inset-0 flex justify-center items-center bg-color-bg-detailprofile                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           '>
                <DetailProfile isVisible={isDetailProfileVisible} setDetailProfile={setDetailProfileVisible} />
              </div>
            )}
          </>
        ) : (
          <>
            <div className='logo_webiste'>
              <img src={images.logo} alt='images' className='h-[48px]' />
            </div>
            <div className='search relative w-[600px] h-[40px] pl-[16px] border-[1px] rounded-full flex '>
              <input
                placeholder='Search The News'
                spellCheck={false}
                className='text-lg bg-transparent outline-none p-4 h-full flex-1 caret-primary'
              />
              <button className='btn-close search-btn-loading-clear'>
                <AiOutlineCloseCircle classNames='' />
              </button>
              <div className='loading search-btn-loading-clear'>
                <AiOutlineLoading3Quarters classNames='absolute' />
              </div>
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
            <div className='action'></div>
          </>
        )}
      </div>
    </header>
  )
}
