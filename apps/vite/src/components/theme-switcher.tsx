import * as React from 'react'

import { useConfig } from '@/hooks/use-config'

export function ThemeSwitcher() {
  const [config] = useConfig()
  const segment = window.location.pathname.split('/')[1]

  React.useEffect(() => {
    document.body.classList.forEach(className => {
      if (className.match(/^theme.*/)) {
        document.body.classList.remove(className)
      }
    })

    const theme = segment === 'themes' ? config.theme : null
    if (theme) {
      return document.body.classList.add(`theme-${theme}`)
    }
  }, [segment, config])

  return null
}
