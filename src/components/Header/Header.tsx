import React, { useState } from 'react'
import { Navbar } from '~/components/Nabar/Navbar'
import { Search } from '~/components/Search/Search'
interface IPROP {
  setDetailProfile: React.Dispatch<React.SetStateAction<boolean>>
  isMobile?: boolean
}

export const Header: React.FC<IPROP> = (props) => {
  const { setDetailProfile } = props
  const [isSearch, setSearch] = useState(false)

  return (
    <header className=' wrapper  md:flex md:justify-center w-full h-[60px] bg-color-deafult border-[1px] relative border-solid  border-boder-color-default border-b-sm '>
      <Navbar setDetailProfile={setDetailProfile} setSearch={setSearch} />
      {isSearch && <Search setSearch={setSearch} />}
    </header>
  )
}
