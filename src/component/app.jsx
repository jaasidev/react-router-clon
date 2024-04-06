import { Link } from './Link'
import { useLink } from '../customHook/useLink'
import { About } from './about'
import { Header } from './header'

export function App() {
  const { path } = useLink()
  return (
    <>
      {path == '/' && <Header />}
      <Link to='/about'>Ve aca</Link>
      {path == '/about' && <About />}
      <Link to='/'>Regresa</Link>
    </>
  )
}
