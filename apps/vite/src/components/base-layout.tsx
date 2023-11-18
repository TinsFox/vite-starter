import { Outlet } from 'react-router-dom'
import { Toaster as DefaultToaster } from 'ui'

import { useUserInfo } from '@/hooks/query/use-user'

import { ThemeProvider } from './providers'
import { TailwindIndicator } from './tailwind-indicator'
import { ThemeSwitcher } from './theme-switcher'

export function BaseLayout() {
  const { userInfo } = useUserInfo()
  console.log('userInfo: ', userInfo)
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <div className="relative flex flex-col min-h-screen">
          <div className="flex-1">
            <Outlet></Outlet>
          </div>
        </div>
        <TailwindIndicator />
      </ThemeProvider>
      <ThemeSwitcher />
      <DefaultToaster />
    </>
  )
}
