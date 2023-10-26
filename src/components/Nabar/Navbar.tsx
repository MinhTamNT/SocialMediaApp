import { Button } from '@mui/material'
import { AiOutlineMenu } from 'react-icons/ai'
import { BsSearch, BsPlusCircle, BsThreeDots } from 'react-icons/bs'
import { images } from '~/assets/images/image'
interface IPROP {
  setDetailProfile: React.Dispatch<React.SetStateAction<boolean>>
  setSearch: React.Dispatch<React.SetStateAction<boolean>>
}
export const Navbar: React.FC<IPROP> = (props) => {
  const user = false
  const { setDetailProfile, setSearch } = props
  const handleDetailProfile = () => {
    setDetailProfile(true)
  }
  const handlerToggleSearch = () => {
    setSearch(true)
  }
  return (
    <>
      <nav className=' flex justify-between items-center p-5 w-full '>
        <div className='flex items-center '>
          <div className='hambuger-menu'>
            <button className='w-[32px] h-[32px] rounded-md grid auto-cols-max   justify-center items-center mr-2 cursor-pointer hover:bg-hover-deafult '>
              <AiOutlineMenu size='20px' className='cursor-pointer' />
            </button>
          </div>
          <div className='w-[32px]'>
            <img src={images.logo} className='object-cover' />
          </div>
        </div>
        <div className='flex items-center flex-1 justify-end relative gap-2'>
          {user ? (
            <>
              {' '}
              <div className='search-navbar '>
                <button className=' default-button-icons'>
                  <BsSearch size={'20px'} className='cursor-pointer' onClick={handlerToggleSearch} />
                </button>
              </div>
              <div className='createPost'>
                <button className=' default-button-icons'>
                  <BsPlusCircle size={'20px'} className='cursor-pointer' />
                </button>
              </div>
              <div className='profileuser w-[32px]'>
                <img
                  src='https://scontent.fsgn8-3.fna.fbcdn.net/v/t39.30808-6/326403390_1522209771635250_7604274983211479574_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=KZug-0fjyVAAX_yLGv8&_nc_ht=scontent.fsgn8-3.fna&oh=00_AfAQZWJn7uMcx6L3ItpDS6-ueHlFAFeoGgtqbjb2ciZhDw&oe=653D050A'
                  alt='profile'
                  className='object-cover rounded-full  cursor-pointer'
                  onClick={handleDetailProfile}
                />
                <span className='status_nabar absolute bg-avatar-color w-[10px] h-[10px] rounded-full bottom-0 border-2 flex right-[-2px] cursor-pointer'></span>
              </div>
            </>
          ) : (
            <>
              <div className='flex items-center justify-end gap-2'>
                <Button variant='contained' className='rounded-full'>
                  SIGN IN
                </Button>
                <button className=' default-button-icons'>
                  <BsSearch size={'20px'} className='cursor-pointer ' onClick={handlerToggleSearch} />
                </button>
                <button className='default-button-icons'>
                  <BsThreeDots size={'22px'} className='cursor-pointer' onClick={handleDetailProfile} />
                </button>
              </div>
            </>
          )}
        </div>
      </nav>
    </>
  )
}
