
interface Iprop {
  children: React.ReactNode
}

export const Wrapper: React.FC<Iprop> = ({ children }) => {
  return (
    <div className='wrapper sm:w-[649px] md:w-full md:bg-PopperWrapper-color-Tippy md:shadow-md md:rounded-lg '>
      {children}
    </div>
  )
}
