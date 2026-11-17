import { ArrowRight } from 'lucide-react'
import clinicaImg from '../assets/clinica-de-estetica-franquia.jpg'

const WHATSAPP_URL = 'https://wa.me/5511925441907'

export default function Acolhimento() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-10">
      <div className="relative bg-card-alt rounded-3xl overflow-hidden border border-dourado/20 shadow-[0_8px_48px_rgba(0,0,0,0.5)]">

        {/* Cantos decorativos */}
        <span className="absolute top-5 left-5 w-10 h-10 border-t border-l border-dourado/40 rounded-tl-lg pointer-events-none" />
        <span className="absolute bottom-5 right-5 w-10 h-10 border-b border-r border-dourado/40 rounded-br-lg pointer-events-none" />

        <div className="grid lg:grid-cols-2 gap-0 items-stretch">

          {/* Conteúdo */}
          <div className="p-6 sm:p-12 lg:p-16 space-y-6 sm:space-y-7 flex flex-col justify-center order-2 lg:order-1">

            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <div className="w-6 h-px bg-dourado" />
              <span className="font-jakarta font-semibold text-[11px] tracking-[0.2em] uppercase text-dourado">
                Quem cuida de você
              </span>
            </div>

            <h2 className="font-cormorant font-semibold text-4xl sm:text-5xl lg:text-[3.2rem] leading-tight text-branco">
              Um espaço pensado para você desacelerar e cuidar da sua saúde por inteiro
            </h2>

            {/* Separador dourado */}
            <div className="w-16 h-px bg-gradient-to-r from-dourado to-transparent" />

            <p className="font-jakarta font-medium text-base sm:text-lg text-cinza-claro leading-relaxed">
              Aqui, cada atendimento é individualizado e sem pressa. Investigamos a raiz das suas
              queixas — seja no manejo da dor, na saúde da mulher ou na estética funcional — para
              oferecer um cuidado que vai além do sintoma.
            </p>

            <p className="font-jakarta font-medium text-base sm:text-lg text-cinza-claro leading-relaxed">
              Nossa abordagem integrativa conecta nutrição, hormônios e bem-estar, respeitando
              seu tempo e sua história.
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-jakarta font-semibold text-base text-dourado hover:text-dourado-claro transition-colors group w-fit border-b border-dourado/40 hover:border-dourado pb-1"
            >
              Conheça nossa forma de atendimento
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
            </a>
          </div>

          {/* Imagem */}
          <div className="relative order-1 lg:order-2 h-64 sm:h-96 lg:h-auto lg:min-h-[540px]">
            <img
              src={clinicaImg}
              alt="Ambiente Nova Era"
              className="w-full h-full object-cover"
            />
            {/* Overlay escuro para harmonizar com tema dark */}
            <div className="absolute inset-0 bg-black/40 pointer-events-none" />
            {/* Fade lateral */}
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-card-alt to-transparent hidden lg:block pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  )
}
