import React from 'react'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Layout from './components/layout/Layout'
import routes from './routes'
import NotFound from './pages/NotFound'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: routes,
    errorElement: <NotFound />
  }
])

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
