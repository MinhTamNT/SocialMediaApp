import React, { useEffect, useRef } from 'react'
import { BiLogIn } from 'react-icons/bi'
import { FcAbout } from 'react-icons/fc'
import { DetailProFileMenuItems } from '../DeatilProfileMenuItems/DetailProFileMenuItems'

interface IProp {
  isVisible: boolean
  setDetailProfile: React.Dispatch<React.SetStateAction<boolean>>
}

export const DetailProfile: React.FC<IProp> = (props) => {
  const user = true
  const { isVisible, setDetailProfile } = props
  const detailRelf = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handlerClickOutside = (e: any) => {
      if (detailRelf.current && !detailRelf.current.contains(e.target)) {
        setDetailProfile(false)
      }
    }

    document.addEventListener('mousedown', handlerClickOutside)

    return () => {
      document.removeEventListener('mousedown', handlerClickOutside)
    }
  }, [])

  const heightClass = user ? 'h-[35%]' : 'h-[15%]'

  return (
    <div
      ref={detailRelf}
      className={`w-full overflow-auto ${heightClass} rounded-lg fixed z-10 bottom-0 left-0 bg-gray-100 transform transition-transform duration-100 ease-in ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      {user ? (
        <>
          <div className='ViewProfile text-secondry'>
            <DetailProFileMenuItems />
          </div>
        </>
      ) : (
        <>
          <ul className='w-full my-[0.5rem] list-none py-4 flex flex-col '>
            <li className='li-defaulut'>
              <BiLogIn size={'30px'} color='#e9c46a' className='text-color-bg-detailprofile' />
              <span className='text-14'>Log In / Sign Up</span>
            </li>
            <li className='li-defaulut'>
              <FcAbout size={'30px'} className='text-color-bg-detailprofile' />
              <span className='text-14'>About us</span>
            </li>
          </ul>
        </>
      )}
    </div>
  )
}
