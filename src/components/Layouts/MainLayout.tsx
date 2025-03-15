'use client'
import { NextAuthProvider } from 'contexts/NextAuthProvider'
import { ThemeProvider } from 'contexts/ThemeProvider'

interface Props {
  children: React.ReactNode
}

function MainLayout({ children }: Props) {
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='system'
      enableSystem
      disableTransitionOnChange
    >
      <main className='flex min-h-screen w-full justify-center bg-slate-100 dark:bg-gray-900'>
        <NextAuthProvider>
          <div className='h-full w-full max-w-[1980px]'>{children}</div>
        </NextAuthProvider>
      </main>
    </ThemeProvider>
  )
}

export default MainLayout
