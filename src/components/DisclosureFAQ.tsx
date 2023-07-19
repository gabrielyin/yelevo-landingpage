'use client'

import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

export default function DisclosureFAQ() {
  return (
    <div className="w-full">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full items-center justify-between border-b-2 border-gray-200 px-6 py-6">
              <span className="text-lg font-semibold">O que é a Yelevo</span>
              <ChevronUpIcon
                className={`
                ${open ? 'rotate-180 transform' : ''} h-6 w-6 text-indigo-600`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-6 py-3 text-gray-500">
              A Yelevo é uma plataforma onde representantes podem encontrar
              empresas que procuram representantes baseados no seu perfil e um
              lugar onde empresas pode encontrar representantes pelo Brasil.
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full items-center justify-between border-b-2 border-gray-200 px-6 py-6">
              <span className="text-lg font-semibold">
                Quais empresas podem usar a Yelevo?
              </span>
              <ChevronUpIcon
                className={`
                ${open ? 'rotate-180 transform' : ''} h-6 w-6 text-indigo-600`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-6 py-3 text-gray-500">
              Todos os tipos de empresa que procuram ou já trabalham com
              representantes comerciais.
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full items-center justify-between border-b-2 border-gray-200 px-6 py-6">
              <span className="text-lg font-semibold">
                Qualquer pessoa pode utilizar a Yelevo?
              </span>
              <ChevronUpIcon
                className={`
                ${open ? 'rotate-180 transform' : ''} h-6 w-6 text-indigo-600`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-6 py-3 text-gray-500">
              A plataforma é exclusiva para representantes comerciais e
              empresas. Na hora do cadastro tanto empresas quanto representantes
              passam por um processo de autenticação para certificar que somente
              pessoas autorizadas podem acessar a plataforma.
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  )
}
