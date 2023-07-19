import Image from 'next/image'

import Button from '@/components/Button'
import Logo from '@/assets/logo.png'
import Link from 'next/link'

export default function Header() {
  return (
    <div className="fixed h-[80px] w-full border-b bg-white">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-4">
        <Image src={Logo} height={25} alt="Yelevo Logo" />

        <Link href="#contact">
          <Button />
        </Link>
      </div>
    </div>
  )
}
