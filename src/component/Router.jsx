import { useLink } from '../customHook/useLink'
import { Children } from 'react'
import { match } from 'path-to-regexp'
export function Router({ routes = [], defaul: DefaultScreen = () => null }) {
  const { path } = useLink()

  const routeparametro = {}

  const Scrn = routes.find(value => {
    if (value.path == path) return true

    const dinamic = match(value.path, { decode: decodeURIComponent })
    const matched = dinamic(path)

    if (!matched) return false

    routeparametro = matched.params
    return true
  })?.Component

  return Scrn ? <Scrn /> : <DefaultScreen />
}
