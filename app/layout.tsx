import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Crystal Panda',
  description: 'Developed by Emad',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + ' px-10'}>
        <header className="text-gray-600 body-font">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <Link href='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-3 text-xl">Crystal Panda</span>
            </Link>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
              <Link href="/menu" className="mr-5 hover:text-gray-900">Menu</Link>
              <Link href="/favorites" className="mr-5 hover:text-gray-900">My Favorites</Link>
              <Link href="/meal-generator" className="mr-5 hover:text-gray-900">Meal Generator</Link>
              <Link href="/about-me" className="mr-5 hover:text-gray-900">About Me</Link>
              <Link href="/contact" className=" hover:text-gray-900">Contact</Link>
            </nav>
          </div>
        </header>
        {children}</body>
    </html>
  )
}
