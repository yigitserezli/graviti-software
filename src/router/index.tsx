import { createBrowserRouter } from 'react-router-dom'
import Layout from '../layout/Layout'
import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import Contact from '../pages/Contact'
import NotFound from '../pages/NotFound'
import OurProducts from '../pages/OurProducts'

const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '', element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'services', element: <Services /> },
        { path: 'contact', element: <Contact /> },
        { path: 'our-products', element: <OurProducts /> },
        { path: '*', element: <NotFound /> },
      ],
    },
  ])
  
  export default router