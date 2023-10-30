import { useEffect, useState } from 'react'
import { Header } from '~/components/Header/Header'
import { DetailProfile } from '~/components/DetailProfile/DetailProfile'
export const Home = () => {
  const [isDetailProfileVisible, setDetailProfileVisible] = useState(false)
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
    <>
      <Header setDetailProfile={setDetailProfileVisible} isMobile={isMobile} />
      {isDetailProfileVisible && (
        <div className='fixed inset-0 flex justify-center items-center bg-color-bg-detailprofile '>
          <DetailProfile isVisible={isDetailProfileVisible} setDetailProfile={setDetailProfileVisible} />
        </div>
      )}
    </>
  )
}
