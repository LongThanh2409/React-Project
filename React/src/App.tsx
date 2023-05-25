import {Route, Routes, BrowserRouter} from 'react-router-dom'
import router from './routes'
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout'
function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
       {router.map((route, index) => {
       const Page = route.component
       let Layout = DefaultLayout
       
      return (
        <Route key={index} path={route.path} element={<Layout> <Page/> </Layout>} />
        )
      })}
       
     
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
