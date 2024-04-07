import { Header } from './header'
import { Router } from './Router'
import { Link } from './Link'
import { DefaultPage } from './404'
import { Suspense, lazy } from 'react'

const About = lazy(() => import('./about.jsx'))

export function App() {
  return (
    <Suspense>
      <Router
        routes={[
          {
            path: '/',
            Component: Header,
          },
          {
            path: '/about',
            Component: About,
          },
          {
            path: '/search/:query',
            Component: value => (
              <h1>Has buscado {value.routeparametro.query}</h1>
            ),
          },
        ]}
        defaul={DefaultPage}
      />
      <Link to='/about'>Ir al About</Link>
      <br />
      <Link to='/'>Volver</Link>
    </Suspense>
  )
}
