import { createBrowserRouter } from 'react-router-dom'

import Landing from '@/Landing'

const routes = [
  {
    path: '/',
    element: <Landing />
  }
]

const router = createBrowserRouter(routes)

export default router
