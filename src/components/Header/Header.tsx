import { Navbar } from '~/components/Nabar/Navbar'

export const Header = () => {
  return (
    <div className='w-full h-[60px] bg-color-deafult border-[1px]  border-soild flex pointer-events-none border-boder-color-default border-b-sm'>
      <Navbar />
    </div>
  )
}
