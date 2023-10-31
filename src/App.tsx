import React, { Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRoutes } from './components/Routes'
import { DefaultLayout } from './Layouts/DefaultLayout/DefaultLayout'

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          {publicRoutes.map((route, index) => {
            let Layout: any = route.layout === null ? Fragment : DefaultLayout
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

export default App
