import { BiEditAlt,BiLogOut } from 'react-icons/bi'
import { FiSettings } from 'react-icons/fi'

export const DetailProFileMenuItems = () => {
  return (
    <ul className='flex flex-col w-full p-0 m-0 list-none'>
      <li className='relative list-none'>
        <a className='flex items-center gap-2 p-[1rem] text-secondry cursor-pointer'>
          <div className='profileuser w-[32px] relative'>
            <img
              src='https://www.redditstatic.com/avatars/defaults/v2/avatar_default_0.png'
              alt='profile'
              className='object-cover rounded-full cursor-pointer'
            />
            <span className='status_nabar absolute bg-avatar-color w-[10px] h-[10px] rounded-full bottom-0 border-2 flex right-[-2px] cursor-pointer'></span>
          </div>
          <span className='flex flex-col justify-center min-w-0 shrink'>
            <span className='text-12'>Marshall1502</span>
          </span>
        </a>
      </li>
      <li className='border-b border-solid border-gray-300 border-opacity-50'></li>
      <li className='relative list-none'>
        <a className='flex items-center gap-2 p-[1rem] text-secondry cursor-pointer'>
          <BiEditAlt size={'22px'} />
          <span className='flex flex-col justify-center min-w-0 shrink'>
            <span className='text-12'>Edit Profile</span>
          </span>
        </a>
      </li>
      <li className='relative list-none'>
        <a className='flex items-center gap-2 p-[1rem] text-secondry cursor-pointer'>
          <FiSettings size={'22px'} />
          <span className='flex flex-col justify-center min-w-0 shrink'>
            <span className='text-12'>Setting</span>
          </span>
        </a>
      </li>
      <li className='border-b border-solid border-gray-300 border-opacity-50'></li>
      <li className='relative list-none'>
        <a className='flex items-center gap-2 p-[1rem] text-secondry cursor-pointer'>
          <BiLogOut size={'22px'} />
          <span className='flex flex-col justify-center min-w-0 shrink'>
            <span className='text-12'>Log Out</span>
          </span>
        </a>
      </li>
    </ul>
  )
}
