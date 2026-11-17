import { Calendar, Activity, Heart, Sparkles, ChevronRight } from 'lucide-react'

const WHATSAPP_BASE = 'https://wa.me/5511925441907?text='

const actions = [
  {
    icon: Calendar,
    title: 'Agendar Consulta',
    description: 'Investigação completa e sem pressa',
    message: 'Olá! Gostaria de agendar uma consulta na Nova Era.',
    tag: 'Mais procurado',
  },
  {
    icon: Activity,
    title: 'Manejo da Dor',
    description: 'Regeneração tecidual e alívio',
    message: 'Olá! Tenho interesse em tratamento para manejo da dor.',
    tag: null,
  },
  {
    icon: Heart,
    title: 'Saúde da Mulher',
    description: 'Hormônios e menopausa',
    message: 'Olá! Gostaria de saber mais sobre saúde da mulher.',
    tag: null,
  },
  {
    icon: Sparkles,
    title: 'Estética & Botox',
    description: 'Abordagem natural e terapêutica',
    message: 'Olá! Tenho interesse em procedimentos estéticos.',
    tag: null,
  },
]

export default function QuickActions() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">

      {/* Cabeçalho com ornamento */}
      <div className="flex flex-col items-center gap-3 mb-8 sm:mb-10">
        <div className="flex items-center gap-3 w-full max-w-sm">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-dourado/50" />
          <span className="font-jakarta font-semibold text-[11px] tracking-[0.2em] uppercase text-dourado">
            Como ajudamos
          </span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-dourado/50" />
        </div>
        <h2 className="font-cormorant font-semibold text-3xl sm:text-4xl lg:text-5xl text-center text-branco">
          Como podemos cuidar de você hoje?
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {actions.map((action, index) => {
          const Icon = action.icon
          return (
            <a
              key={index}
              href={`${WHATSAPP_BASE}${encodeURIComponent(action.message)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-4 p-4 sm:p-6 bg-card border border-dourado/20 rounded-2xl hover:border-dourado/60 hover:bg-card-alt transition-all overflow-hidden glow-dourado"
            >
              {/* Tag */}
              {action.tag && (
                <span className="absolute top-3 right-3 bg-dourado text-fundo font-jakarta font-bold text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-full">
                  {action.tag}
                </span>
              )}

              {/* Ícone */}
              <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center bg-dourado/10 border border-dourado/30 rounded-2xl group-hover:border-dourado/60 group-hover:bg-dourado/20 transition-all">
                <Icon className="w-6 h-6 text-dourado" strokeWidth={1.5} />
              </div>

              {/* Texto */}
              <div className="flex-1 min-w-0">
                <h3 className="font-cormorant font-semibold text-xl text-branco mb-0.5">
                  {action.title}
                </h3>
                <p className="font-jakarta font-medium text-sm text-cinza-medio">
                  {action.description}
                </p>
              </div>

              {/* Seta */}
              <ChevronRight
                className="flex-shrink-0 w-5 h-5 text-dourado opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                strokeWidth={2}
              />

              {/* Linha decorativa inferior no hover */}
              <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-dourado/60 to-transparent group-hover:w-full transition-all duration-500" />
            </a>
          )
        })}
      </div>
    </section>
  )
}
