import React, { useState, useEffect } from 'react'
import { Navbar } from '~/components/Nabar/Navbar'
import { Search } from '~/components/Search/Search'
import { DetailProfile } from '~/components/DetailProfile/DetailProfile'
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
      <Navbar setDetailProfileVisible={setDetailProfileVisible} setSearch={setSearch} />
      {isSearch && <Search setSearch={setSearch} />}
      {isDetailProfileVisible && (
        <div className='fixed inset-0 flex justify-center items-center bg-color-bg-detailprofile '>
          <DetailProfile isVisible={isDetailProfileVisible} setDetailProfile={setDetailProfileVisible} />
        </div>
      )}
    </header>
  )
}
