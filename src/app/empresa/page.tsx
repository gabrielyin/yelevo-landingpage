import Image from 'next/image'

import Section from '@/components/Section'

import BusinessImage from '@/assets/business.png'
import SearchImage from '@/assets/search.png'
import SignUpImage from '@/assets/sign-up.png'
import EmpresaButton from '@/components/ButtonEmpresa'
import Link from 'next/link'

export default function Empresa() {
  return (
    <div className="scroll-smooth pt-[80px]">
      <Section>
        <div className="flex flex-col gap-12 lg:flex-row">
          <div className="grid place-content-center gap-4 lg:flex-1">
            <div className="grid gap-1">
              <p>A maneira mais eficiente de encontrar representantes</p>

              <h1 className="mb-2 text-5xl font-bold md:text-6xl">
                Potencialize suas vendas com representantes
              </h1>

              <EmpresaButton />
            </div>
          </div>

          <div className="hidden lg:block lg:flex-1">
            <Image src={BusinessImage} alt="Business handshake image" />
          </div>
        </div>
      </Section>

      <Section>
        <h1 className="leading-1 mb-2 text-center text-3xl font-medium">
          Como encontrar representantes na{' '}
          <span className="font-bold text-indigo-600">Yelevo?</span>
        </h1>

        <div className="flex flex-col gap-12 lg:flex-row">
          <div className="lg:flex-1">
            <Image src={SignUpImage} alt="Business handshake image" />
          </div>

          <div className="grid place-content-center gap-3 lg:flex-1">
            <span className="font-medium uppercase text-indigo-600">
              #1 Cadastro
            </span>

            <h3 className="text-3xl font-bold text-gray-800">Registre-se</h3>

            <p>
              Ao se cadastrar, insira informações relevantes sobre sua empresa
              para atrair os representantes ideais.
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
              #2 análise
            </span>

            <h3 className="text-3xl font-bold">Análise de currículos</h3>

            <p>
              Após os representantes se candidatarem, o recrutador poderá
              visualizar as candidaturas de cada representante e, a partir daí,
              seguir com o processo seletivo.
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
            Na Yelevo, oferecemos o plano ideal para empresas de todos os tipos.
          </p>

          <div className="mt-4 grid place-content-center gap-6 rounded-3xl bg-gray-50 px-4 py-10">
            <p className="text-center text-2xl font-semibold text-indigo-900">
              Para Empresas
            </p>

            <div className="grid">
              <span className="text-center text-4xl font-bold text-indigo-900">
                R$ 0,00<span className="text-2xl font-normal">/mês</span>
              </span>
              <span className="text-center text-xs text-indigo-900">
                *Oferta com duração limitada para os primeiros usuários
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
