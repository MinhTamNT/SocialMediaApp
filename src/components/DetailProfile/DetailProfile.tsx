import { useSpring, animated } from 'react-spring'
import React, { useEffect, useRef } from 'react'
interface IProp {
  isVisible: boolean
  setDetailProfile: React.Dispatch<React.SetStateAction<boolean>>
}
export const DetailProfile: React.FC<IProp> = (props) => {
  const { isVisible, setDetailProfile } = props
  const springProps = useSpring({
    transform: isVisible ? 'translateY(0%)' : 'translateY(100%)'
  })
  const detailRelf = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handlerCLickOutSide = (e: any) => {
      if (detailRelf.current && 'contains' in detailRelf.current && !detailRelf.current.contains(e.target)) {
        setDetailProfile(false)
      }
    }

    document.addEventListener('mousedown', handlerCLickOutSide)

    return () => {
      document.removeEventListener('mousedown', handlerCLickOutSide)
    }
  }, [detailRelf, setDetailProfile])

  return (
    <animated.div
      style={springProps}
      className='detail-profile w-full overflow-auto h-[70%] fixed z-10 bottom-0 left-0 bg-gray-100'
      ref={detailRelf}
    >
      <div>Hello</div>
    </animated.div>
  )
}
