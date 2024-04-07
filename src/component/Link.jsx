import { useLink } from '../customHook/useLink'

function navigate(href) {
  window.history.pushState({}, '', href)
  const pust = new Event('pushState')
  window.dispatchEvent(pust)
}
export function Link({ to, children, target, ...props }) {
  const { setPath } = useLink()

  const handleClick = event => {
    const isMain = event.button == 0
    const isManegable = target == undefined || target == '_self'
    const isModified = event.metaKey || event.altKey || event.ctrlKey

    if (isManegable && isMain && !isModified) {
      event.preventDefault()
      navigate(to)
    }
  }

  return (
    <a onClick={handleClick} href={to} target={target} {...props}>
      {children}
    </a>
  )
}
