import Image from 'next/image'
import Link from 'next/link'

import Logo from '@/assets/logo.png'
import { Dispatch, SetStateAction } from 'react'

interface MobileNavPropsInterface {
  isOpen: boolean
  setMenuOpenFalse: Dispatch<SetStateAction<boolean>>
}

export default function MobileNav({
  isOpen,
  setMenuOpenFalse,
}: MobileNavPropsInterface) {
  return (
    <div
      className={`fixed inset-0   
      ${isOpen ? 'translate-y-0' : '-translate-y-full'}
       z-20 overflow-y-hidden bg-white transition-all duration-500 ease-in-out`}
    >
      <header className="relative flex h-[70px] items-center justify-between border-b px-4">
        <Link href="/">
          <Image src={Logo} height={25} alt="Yelevo Logo" />
        </Link>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
          onClick={() => setMenuOpenFalse(false)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </header>

      <nav className="grid gap-4 p-4">
        <Link onClick={() => setMenuOpenFalse(false)} href="/representante">
          Representantes
        </Link>

        <Link onClick={() => setMenuOpenFalse(false)} href="/empresa">
          Empresas
        </Link>

        <Link onClick={() => setMenuOpenFalse(false)} href="/precos">
          Preços
        </Link>
      </nav>
    </div>
  )
}
