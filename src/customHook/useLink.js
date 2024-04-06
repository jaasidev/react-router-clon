import { useState, useEffect } from 'react'

export function useLink() {
  const [path, setPath] = useState(window.location.pathname)

  console.log(path)
  useEffect(() => {
    const locationpath = () => {
      setPath(window.location.pathname)
    }

    window.addEventListener('pushState', locationpath)
    window.addEventListener('popstate', locationpath)

    return () => {
      window.removeEventListener('pushState', locationpath)
      window.removeEventListener('popstate', locationpath)
    }
  }, [])

  return {
    path,
    setPath,
  }
}
