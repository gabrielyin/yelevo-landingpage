import Image from 'next/image'

import Section from '@/components/Section'

import BusinessImage from '@/assets/business.png'
import SearchImage from '@/assets/search.png'
import SignUpImage from '@/assets/sign-up.png'
import RepresentanteButton from '@/components/ButtonRepresentante'
import BadgeRepresentante from '@/components/BadgeRepresentante'
import Link from 'next/link'

export default function Representante() {
  return (
    <div className="scroll-smooth pt-[80px]">
      <Section>
        <div className="flex flex-col gap-12 lg:flex-row">
          <div className="grid place-content-center gap-4 lg:flex-1">
            <BadgeRepresentante />

            <div className="grid gap-1">
              <p>A forma mais eficiente de encontrar e representar empresas</p>

              <h1 className="mb-2 text-5xl font-bold md:text-6xl">
                Encontrar e representar empresas
              </h1>

              <RepresentanteButton />
            </div>
          </div>

          <div className="hidden lg:block lg:flex-1">
            <Image src={BusinessImage} alt="Business handshake image" />
          </div>
        </div>
      </Section>

      <Section>
        <h1 className="leading-1 mb-2 text-center text-3xl font-medium">
          Como encontrar empresas na{' '}
          <span className="font-bold text-indigo-600">Yelevo?</span>
        </h1>

        <div className="flex flex-col gap-12 lg:flex-row">
          <div className="lg:flex-1">
            <Image src={SignUpImage} alt="Business handshake image" />
          </div>

          <div className="grid place-content-center gap-3 lg:flex-1">
            <span className="font-medium uppercase text-indigo-600">
              #1 Cadastro Gratuito
            </span>

            <h3 className="text-3xl font-bold text-gray-800">
              Registre-se Gratuitamente
            </h3>

            <p>
              Ao realizar o cadastro, insira as informações da sua empresa e
              alguns detalhes sobre você para criar a sua conta.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="flex flex-col gap-12 lg:flex-row">
          <div className="lg:flex-1">
            <Image src={SearchImage} alt="Business handshake image" />
          </div>

          <div className="grid place-content-center gap-3 lg:flex-1">
            <span className="font-medium uppercase text-indigo-600">
              #2 Buscar Empresas
            </span>

            <h3 className="text-3xl font-bold">Encontre a empresa ideal</h3>

            <p>
              Descubra empresas verificadas que correspondem ao seu perfil e
              candidate-se para representá-las na Yelevo
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="flex flex-col gap-12 lg:flex-row">
          <div className="lg:flex-1">
            <Image src={SearchImage} alt="Business handshake image" />
          </div>

          <div className="grid place-content-center gap-3 lg:flex-1">
            <span className="font-medium uppercase text-indigo-600">
              #3 Aguardar
            </span>

            <h3 className="text-3xl font-bold">Aguardar Contato</h3>

            <p>
              Após a análise dos currículos, a empresa entrará em contato com o
              representante para discutir os próximos passos.
            </p>
          </div>
        </div>
      </Section>

      <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-6xl bg-indigo-600 px-8 py-16 lg:rounded-3xl">
        <div className="mx-auto grid h-fit max-w-md gap-2">
          <h3 className="text-center text-3xl font-semibold text-white">
            Preços
          </h3>

          <p className="text-center text-white">
            Aqui na Yelevo, o cadastro para representantes é gratuito.
          </p>

          <div className="mt-4 grid place-content-center gap-6 rounded-3xl bg-gray-50 px-4 py-10">
            <p className="text-center text-2xl font-semibold text-indigo-900">
              Para Representantes
            </p>

            <div className="grid">
              <span className="text-center text-4xl font-bold text-indigo-900">
                R$ 0,00<span className="text-2xl font-normal">/mês</span>
              </span>
            </div>

            <div className="flex justify-center">
              <Link
                href="https://app.yelevo.com/signup"
                className="rounded-md bg-indigo-600 px-6 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 lg:w-fit"
              >
                Começar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
