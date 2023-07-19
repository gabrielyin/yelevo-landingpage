import { ReactNode } from 'react'

interface SectionInterface {
  children: ReactNode
}

export default function Section({ children }: SectionInterface) {
  return (
    <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-6xl place-content-center px-8 py-16">
      {children}
    </div>
  )
}
