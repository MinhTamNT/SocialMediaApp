import { Navbar } from '~/components/Nabar/Navbar'
import { AiOutlineMenu } from 'react-icons/ai'
interface IPROP {
  setDetailProfile: React.Dispatch<React.SetStateAction<boolean>>
}
export const Header: React.FC<IPROP> = (props) => {
  const { setDetailProfile } = props
  return (
    <div className=' w-full h-[60px] bg-color-deafult border-[1px]  border-soild flex  border-boder-color-default border-b-sm'>
      <Navbar setDetailProfile={setDetailProfile} />
    </div>
  )
}
