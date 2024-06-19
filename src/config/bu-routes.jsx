// routes.js
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ProtectedRoute from './utils/ProtectedRoute';
import PremiumRoute from '@utils/PremiumRoute';
import NotFound from './pages/NotFound/NotFound';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Dashboard from './Dashboard';
import Capitulos from './pages/Capitulos/Capitulos';

// Lazy-loaded components
const Resumen = lazy(() => import('./pages/Resumen/Resumen'));
const Examenes = lazy(() => import('./pages/Examenes/Examenes'));
const Detalles = lazy(() => import('./pages/Detalles/Detalles'));
const Temario = lazy(() => import('./pages/Temario/Temario'));
const Notas = lazy(() => import('./pages/Notas/Notas'));
const Novedades = lazy(() => import('./pages/Novedades/Novedades'));
const UnMinuto = lazy(() => import('./pages/Modalidades/UnMinuto/UnMinuto'));
const QuickTest = lazy(() => import('./pages/Modalidades/QuickTest/QuickTest'));
const VerdadFalso = lazy(() => import('./pages/Modalidades/VerdadFalso/VerdadFalso'));

// Definir las rutas como constantes
const routes = [
  {
    path: '/',
    element: (
      <ProtectedRoute
        element={
          <SidebarProvider>
            <Dashboard />
          </SidebarProvider>
        }
      />
    ),
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Resumen /> },
      { path: 'temario', element: <Temario /> },
      { path: 'examenes', element: <Examenes /> },
      { path: 'examenes/detalles/:id', element: <Detalles /> },
      { path: 'notas', element: <Notas /> },
      { path: 'novedades', element: <Novedades /> },
      { path: 'modalidades/quick-test', element: <PremiumRoute element={<QuickTest />} /> },
      { path: 'modalidades/un-minuto', element: <PremiumRoute element={<UnMinuto />} /> },
      { path: 'modalidades/verdad-falso', element: <PremiumRoute element={<VerdadFalso />} /> },
    ],
  },
  { path: '/capitulo', element: <ProtectedRoute element={<Capitulos />} /> },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
];

const router = createBrowserRouter(routes);

export default router;
