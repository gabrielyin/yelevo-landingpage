'use client'

import Image from 'next/image'

import Button from '@/components/Button'
import Logo from '@/assets/logo.png'
import Link from 'next/link'
import { useState } from 'react'
import MobileNav from './MobileNav'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="fixed h-[80px] w-full border-b bg-white">
      <header className="mx-auto flex h-full max-w-6xl items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Image src={Logo} height={25} alt="Yelevo Logo" />

          <nav className="hidden justify-center gap-4 font-medium md:flex">
            <Link href="/representante">Representantes</Link>

            <Link href="/empresa">Empresas</Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Link href="https://api.whatsapp.com/send/?phone=5521983728281&text=Ol%C3%A1+me+chamo+%5BSEU+NOME%5D%2C+%5BDEIXE+AQUI+A+SUA+D%C3%9AVIDA%5D.&type=phone_number&app_absent=0">
            <Button />
          </Link>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6 cursor-pointer md:hidden"
            onClick={() => setIsMenuOpen(true)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </header>

      <MobileNav isOpen={isMenuOpen} setMenuOpenFalse={setIsMenuOpen} />
    </div>
  )
}
