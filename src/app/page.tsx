import Image from 'next/image'

import Button from '@/components/Button'
import Section from '@/components/Section'
import Badge from '@/components/Badge'

import BusinessImage from '@/assets/business.png'
import AnaliseImage from '@/assets/analise.png'
import SearchImage from '@/assets/search.png'
import SignUpImage from '@/assets/sign-up.png'
import DisclosureFAQ from '@/components/DisclosureFAQ'

export default function Home() {
  return (
    <div className="scroll-smooth pt-[80px]">
      <Section>
        <div className="flex flex-col gap-12 lg:flex-row">
          <div className="grid place-content-center gap-4 lg:flex-1">
            <Badge />

            <div className="grid gap-1">
              <h1 className="text-5xl font-bold md:text-6xl">
                Encontre e se conecte com empresas
              </h1>

              <p className="mb-2">
                Encontre e conecte com representantes empresas de diversos ramos
              </p>

              <Button />
            </div>
          </div>

          <div className="hidden lg:block lg:flex-1">
            <Image src={BusinessImage} alt="Business handshake image" />
          </div>
        </div>
      </Section>

      {/* Cadastro */}
      <Section>
        <h1 className="mb-2 text-center text-6xl font-medium">
          <span className="font-bold text-indigo-600">Como</span> funciona?
        </h1>

        <div className="flex flex-col gap-12 lg:flex-row">
          <div className="lg:flex-1">
            <Image src={SignUpImage} alt="Business handshake image" />
          </div>

          <div className="grid place-content-center gap-3 lg:flex-1">
            <span className="font-medium uppercase text-indigo-600">
              #1 Cadastro
            </span>

            <h3 className="text-3xl font-bold">
              Fazer cadastro como empresa ou representante
            </h3>

            <p>
              Nossa plataforma é o ponto de encontro perfeito para
              representantes comerciais e empresas. Ao se cadastrar como
              &apos;Representante&apos;, seu objetivo será encontrar empresas em
              busca de representação comercial. Já os usuários que se
              cadastrarem como &apos;Empresa&apos; terão como objetivo encontrar
              representantes para impulsionar seus negócios.
            </p>
          </div>
        </div>
      </Section>

      {/* Encontrar empresa */}
      <Section>
        <div className="flex flex-col gap-12 lg:flex-row">
          <div className="lg:flex-1">
            <Image src={SearchImage} alt="Business handshake image" />
          </div>

          <div className="grid place-content-center gap-3 lg:flex-1">
            <span className="font-medium uppercase text-indigo-600">
              Encontrar Empresa
            </span>

            <h3 className="text-3xl font-bold">
              Encontre empresas com o seu perfil
            </h3>

            <p>
              Após fazer o cadastro na plataforma, o representante será
              recomendado a empresas com base em seu perfil, ou poderá buscar
              empresas utilizando os filtros de pesquisa disponíveis na
              plataforma. Caso o representante tenha interesse em representar
              alguma empresa ele podera demonstrar seu interesse eviar o seu
              curriculo na propria plataforma.
            </p>
          </div>
        </div>
      </Section>

      {/* Analise */}
      <Section>
        <div className="flex flex-col gap-12 lg:flex-row">
          <div className="lg:flex-1">
            <Image src={AnaliseImage} alt="Business handshake image" />
          </div>

          <div className="grid place-content-center gap-3 lg:flex-1">
            <span className="font-medium uppercase text-indigo-600">
              Análise
            </span>

            <h3 className="text-3xl font-bold">Análise de currículo</h3>

            <p>
              Após o representante demonstrar seu interesse dentro da plataforma
              as empresas vão ser notificadas dos candidatos e a partir dai a
              empresa vai ter acesso ao curriculo e perfil do representate
              dentro da plataforma.
            </p>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-6xl place-content-start px-8 py-16">
        <div className="flex w-full flex-col gap-12 lg:flex-row">
          <div className="h-full lg:flex-1">
            <h1 className="mb-2 text-center text-6xl font-medium xl:text-left">
              <span className="font-bold text-indigo-600">Perguntas</span>{' '}
              frequentes
            </h1>
          </div>

          <div className="flex-col gap-3 lg:flex-1">
            <DisclosureFAQ />
          </div>
        </div>
      </div>

      {/* Contact */}
      <div
        id="contact"
        className="mx-auto grid min-h-[calc(100vh-80px)] max-w-6xl px-8 py-16"
      >
        <div className="grid place-items-center rounded-3xl bg-indigo-50">
          <div className="grid gap-4">
            <h1 className="text-center text-6xl font-medium xl:text-left">
              <span className="font-bold text-indigo-600">Entrar em</span>{' '}
              contato
            </h1>
            <p className="text-center text-sm font-normal uppercase tracking-wider text-gray-500">
              Solicitar mais informações
            </p>
            <form>
              <div className="flex justify-center gap-3">
                <input
                  type="text"
                  placeholder="Email"
                  className="block w-1/2 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 lg:w-fit">
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
