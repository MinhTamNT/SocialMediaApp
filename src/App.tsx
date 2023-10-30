import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRoutes } from './components/Routes'
import { DefaultLayout } from './Layouts/DefaultLayout/DefaultLayout'
import { Home } from './components/Pages/Home/Home'
export default function App() {
  return (
    // <Router>
    //   <div className='App relative h-screen w-full'>
    //     <Routes>
    //       {publicRoutes.map((route, index) => {
    //         const Page = DefaultLayout
    //         return <Route key={index} path={route.path} element />
    //       })}
    //     </Routes>
    //   </div>
    // </Router>
    <>
      <Home />
    </>
  )
}
