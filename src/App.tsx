import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRoutes } from './components/Routes'
import { DefaultLayout } from './Layouts/DefaultLayout/DefaultLayout'
import { Fragment } from 'react'
export default function App() {
  return (
    <Router>
      <div className='App relative h-screen w-full'>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Layout: any = route.layout === null ? Fragment :DefaultLayout
            const Page = route.component
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            )
          })}
        </Routes>
      </div>
    </Router>
  )
}
