import { AiOutlineMenu } from 'react-icons/ai'
import { images } from '~/assets/images/image'
interface IPROP {
  setSearch: React.Dispatch<React.SetStateAction<boolean>>
  setDetailProfileVisible: React.Dispatch<React.SetStateAction<boolean>>
  isMobile?: boolean
}
export const Navbar: React.FC<IPROP> = (props) => {
  const user = true
  const { setDetailProfileVisible, setSearch, isMobile } = props

  const handleDetailProfile = () => {
    setDetailProfileVisible(true)
  }
  const handlerToggleSearch = () => {
    setSearch(true)
  }
  return (
    <nav className='inner_header w-full flex justify-between items-center p-3'>
      <div className='flex items-center '>
        <div className='hambuger-menu'>
          <button
            className={`w-[32px] h-[32px] rounded-md grid auto-cols-max justify-center items-center mr-2 cursor-pointer hover:bg-hover-deafult ${
              isMobile ? 'md:block' : 'md:hidden'
            }`}
          >
            <AiOutlineMenu size='20px' className='cursor-pointer' />
          </button>
        </div>
        <div className=''>
          <img src={images.logo} className='object-cover h-[32px]' />
        </div>
      </div>
    </nav>
  )
}
