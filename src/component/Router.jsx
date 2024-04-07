import { useLink } from '../customHook/useLink'
export function Router({ routes = [], defaul: DefaultScreen = () => null }) {
  const { path } = useLink()

  const Scrn = routes.find(value => {
    return value.path == path
  })?.Component

  return Scrn ? <Scrn /> : <DefaultScreen />
}
