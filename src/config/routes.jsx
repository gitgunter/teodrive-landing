import { createBrowserRouter } from 'react-router-dom'

import Landing from '@/Landing'
import Legal from '@pages/Legal/Legal'
import TermsOfService from '@/pages/TermsOfService/TermsOfService'
import Privacy from '@/pages/Privacy/Privacy'

const routes = [
  {
    path: '/',
    element: <Landing />
  },
  {
    path: '/legal',
    element: <Legal />
  },
  { path: '/legal/terminos-de-servicio', element: <TermsOfService /> },
  {
    path: '/legal/politica-de-privacidad',
    element: <Privacy />
  }
]

const router = createBrowserRouter(routes)

export default router
