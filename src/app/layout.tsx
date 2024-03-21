import { Navbar } from 'components'
import { ThemeProvider } from 'contexts'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import 'styles/globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  style: ['italic', 'normal'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Roraima Vagas',
  description: 'Plataforma de busca de empregos',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={poppins.className} suppressHydrationWarning={true}>
        <ThemeProvider>
          <main className='flex h-full w-full items-center justify-center bg-slate-200 dark:bg-gray-900'>
            <div className='flex h-full w-full max-w-[1980px] flex-col'>
              <Navbar />
              <div className='h-[calc(100vh-64px)] w-full'>{children}</div>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
