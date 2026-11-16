import { Check } from 'lucide-react'

const diferenciais = [
  'Escuta ativa sem pressa para investigar a raiz do sintoma',
  'Visão integrada entre nutrição, hormônios, dor e estética',
  'Nada de receitas prontas ou atendimentos mecânicos',
  'Localização prática em Bethaville I, Barueri',
]

export default function Diferencial() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
      <div className="relative bg-bege border-2 border-dourado/25 rounded-3xl overflow-hidden shadow-xl">

        {/* Faixa lateral dourada */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-dourado/60 to-transparent hidden lg:block" />

        <div className="grid lg:grid-cols-2 items-stretch">

          {/* Imagem */}
          <div className="relative w-full aspect-[4/5] lg:aspect-auto lg:min-h-[520px] order-2 lg:order-1">
            <img
              src="/imgs/card 2.webp"
              alt="Conhecendo sua história - Nova Era"
              className="w-full h-full object-cover"
            />
            {/* Overlay texto flutuante */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm border border-dourado/30 rounded-xl p-4 shadow-lg hidden lg:block">
              <p className="font-cormorant font-semibold text-xl text-marrom leading-snug">
                "Conhecendo sua história antes de qualquer receita."
              </p>
            </div>
          </div>

          {/* Conteúdo */}
          <div className="p-8 sm:p-10 lg:p-14 space-y-8 order-1 lg:order-2 flex flex-col justify-center">

            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <div className="w-6 h-px bg-dourado" />
              <span className="font-jakarta font-semibold text-[11px] tracking-[0.2em] uppercase text-dourado">
                Nossa abordagem
              </span>
            </div>

            <div className="space-y-3">
              <h2 className="font-cormorant font-semibold text-4xl sm:text-5xl lg:text-6xl leading-tight text-marrom">
                O diferencial Nova Era
              </h2>
              <p className="font-cormorant text-xl text-marrom/70 leading-relaxed">
                Mais que consultas: uma experiência de cuidado completo.
              </p>
            </div>

            <ul className="space-y-4">
              {diferenciais.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-7 h-7 flex items-center justify-center bg-dourado/15 rounded-lg mt-0.5 border border-dourado/40">
                    <Check className="w-4 h-4 text-dourado-escuro" strokeWidth={2.5} />
                  </div>
                  <span className="font-jakarta font-medium text-base sm:text-lg text-marrom leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
