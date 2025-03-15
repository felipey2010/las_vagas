import MainLayout from 'components/Layouts/MainLayout'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import 'styles/output.css'
import { cn } from 'utils'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  style: ['italic', 'normal'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Las Vagas',
  description: 'Plataforma de busca de empregos',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pt-BR' suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen w-full bg-black antialiased',
          poppins.className,
          poppins.variable
        )}
      >
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  )
}
