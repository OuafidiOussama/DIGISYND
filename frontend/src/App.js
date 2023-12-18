import React from 'react'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Layout from './components/layout/Layout'
import routes from './routes'
import NotFound from './pages/NotFound'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: routes,
    errorElement: <NotFound />
  }
])

export default function App() {
  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  )
}
