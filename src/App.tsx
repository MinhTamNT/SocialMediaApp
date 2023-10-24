import { useState } from 'react'
import { Header } from './components/Header/Header'
import { DetailProfile } from './components/DetailProfile/DetailProfile'

export default function App() {
  const [isDetailProfileVisible, setDetailProfileVisible] = useState(false)

  return (
    <div className='relative'>
      <Header setDetailProfile={setDetailProfileVisible} />
      {isDetailProfileVisible && (
        <div className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-50'>
          <DetailProfile isVisible={isDetailProfileVisible} setDetailProfile={setDetailProfileVisible} />
        </div>
      )}
    </div>
  )
}
