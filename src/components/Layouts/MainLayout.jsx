'use client'
import FooterSection from 'components/Footer'
import NavbarComponent from 'components/Navbar'
import { ThemeProvider } from 'contexts/ThemeProvider'

function MainLayout({ children }) {
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='system'
      enableSystem
      disableTransitionOnChange
    >
      <main className='flex h-screen w-full justify-center bg-slate-100 dark:bg-gray-900'>
        <div className='flex h-full w-full max-w-[1980px] flex-col'>
          <NavbarComponent />
          <div className='w-full'>{children}</div>
          <FooterSection />
        </div>
      </main>
    </ThemeProvider>
  )
}

export default MainLayout
