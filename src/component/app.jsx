import { About } from './about'
import { Header } from './header'
import { Router } from './Router'
import { Link } from './Link'
import { DefaultPage } from './404'

export function App() {
  return (
    <>
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
        ]}
        defaul={DefaultPage}
      />
      <Link to='/about'>Ir al About</Link>
      <br />
      <Link to='/'>Volver</Link>
    </>
  )
}
