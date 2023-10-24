import { AiFillLayout, AiOutlineMenu } from 'react-icons/ai'
import { BsSearch, BsPlusCircle } from 'react-icons/bs'
import { images } from '~/assets/images/image'
export const Navbar = () => {
  return (
    <nav className=' flex justify-between items-center p-[16px] w-full'>
      <div className='flex items-center gap-1 '>
        <div className='hambuger-menu'>
          <button className='w-[32px] h-[32px] rounded-md grid auto-cols-max  border-solid border-[1px] justify-center items-center mr-2 hover:bg-hover-deafult cursor-pointer '>
            <AiOutlineMenu size={'20px'} />
          </button>
        </div>
        <div className='w-[32px]'>
          <img src={images.logo} className='object-cover' />
        </div>
      </div>
      <div className='flex items-center flex-1 justify-end relative gap-4'>
        <div className='search-navbar '>
          <button className='grid auto-cols-max justify-center items-center mr-2'>
            <BsSearch size={'20px'} className='cursor-pointer' />
          </button>
        </div>
        <div className='createPost'>
          <BsPlusCircle size={'20px'} />
        </div>
        <div className='profileuser w-[32px]'>
          <img
            src='https://scontent.fsgn8-3.fna.fbcdn.net/v/t39.30808-6/326403390_1522209771635250_7604274983211479574_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=KZug-0fjyVAAX_yLGv8&_nc_ht=scontent.fsgn8-3.fna&oh=00_AfAQZWJn7uMcx6L3ItpDS6-ueHlFAFeoGgtqbjb2ciZhDw&oe=653D050A'
            alt='profile'
            className='object-cover rounded-full'
          />
          <span className='status_nabar absolute bg-avatar-color w-[10px] h-[10px] rounded-full bottom-0 border-2 flex right-[-2px] cursor-pointer'></span>
        </div>
      </div>
    </nav>
  )
}
