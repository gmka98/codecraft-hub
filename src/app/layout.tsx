import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CodeCraft Hub',
  description: 'Explore the intersection of software development, data science, DevOps, and cybersecurity with CodeCraft Hub. Engage with insightful articles, tutorials, and discussions to enhance your skills and stay abreast of the latest trends in the dynamic world of technology.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='mx-auto max-w-screen-lg'>
          <div className='flex min-h-screen flex-col items-center p-24'>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
