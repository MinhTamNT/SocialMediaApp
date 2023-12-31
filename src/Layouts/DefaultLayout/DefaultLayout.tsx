import React, { ReactNode, useState, useEffect } from 'react'
import { Header } from '~/components/Header/Header'
import { Content } from '../components/Content/Content'
import { SiginInOrSignUp } from '~/components/SignInOrSiguUp/SiginInOrSignUp.1'

interface DefaultLayoutProps {
  children: ReactNode
}

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  const [isMobile, setMobile] = useState(false)
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })
  const [isLogin, setLogin] = useState(false)

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
    <div className='wrapper md:flex md:justify-center flex-col md:items-center md:overflow-x-hidden md:overflow-y-auto relative '>
      <Header isMobile={isMobile} setLogin={setLogin} />
      <div className='containner mx-auto md:w-[1150px] md:flex md:mt-2 md:min-h-[100px] pt-[60px]'>
        <Content />
        <div className='information_pages md:flex-1 md:min-h-[1000px]'>{children}</div>
      </div>
      {isLogin && <SiginInOrSignUp isMobile={isMobile} setLogin={setLogin} />}
    </div>
  )
}
