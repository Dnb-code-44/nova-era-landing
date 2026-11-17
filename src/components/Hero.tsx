import identidadeImg from '../assets/Identidade Dourada Nova Era.png'

const WHATSAPP_URL = 'https://wa.me/5511925441907'

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6 sm:pt-14 sm:pb-8">
      <div className="relative bg-card rounded-3xl overflow-hidden border border-dourado/20 shadow-[0_8px_48px_rgba(0,0,0,0.6)] glow-dourado">

        {/* Cantos decorativos */}
        <span className="absolute top-4 left-4 w-8 h-8 border-t border-l border-dourado/40 rounded-tl-lg pointer-events-none" />
        <span className="absolute top-4 right-4 w-8 h-8 border-t border-r border-dourado/40 rounded-tr-lg pointer-events-none" />
        <span className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-dourado/40 rounded-bl-lg pointer-events-none" />
        <span className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-dourado/40 rounded-br-lg pointer-events-none" />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center p-8 sm:p-10 lg:p-14 relative z-10">

          {/* Conteúdo */}
          <div className="space-y-6">
            {/* Pílula de localização */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-dourado/10 border border-dourado/30 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-dourado" />
              <span className="font-jakarta font-semibold text-xs tracking-widest uppercase text-dourado">
                Bethaville I · Barueri, SP
              </span>
            </div>

            <h1 className="font-cormorant font-semibold text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.1] text-branco">
              Saúde integrativa com cuidado e atenção que você merece
            </h1>

            <p className="font-jakarta font-medium text-base sm:text-lg text-cinza-claro leading-relaxed max-w-md">
              Investigamos a raiz do sintoma com escuta ativa e visão integrativa,
              sem pressa e sem receitas prontas.
            </p>

            <div className="flex items-center gap-4 pt-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-dourado text-fundo font-jakarta font-bold text-base rounded-full hover:bg-dourado-claro transition-colors shadow-lg"
              >
                Agendar pelo WhatsApp
                <span className="text-xl leading-none">›</span>
              </a>
              <div className="hidden sm:flex items-center gap-2">
                <span className="w-8 h-px bg-dourado/50" />
                <span className="font-jakarta text-xs font-medium text-cinza-medio">seg – sáb · 08h</span>
              </div>
            </div>
          </div>

          {/* Imagem com moldura */}
          <div className="relative">
            <div className="relative h-64 sm:h-80 lg:h-[420px] rounded-2xl overflow-hidden shadow-2xl border border-dourado/20">
              <img
                src={identidadeImg}
                alt="Nova Era - Saúde Integrativa"
                className="w-full h-full object-cover"
              />
              {/* Overlay escuro suave na base */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
            </div>
            {/* Badge flutuante */}
            <div className="absolute -bottom-5 -left-4 bg-card border border-dourado/30 rounded-xl px-5 py-3 shadow-xl hidden sm:block">
              <p className="font-jakarta font-semibold text-xs text-dourado uppercase tracking-widest mb-0.5">Atendimento</p>
              <p className="font-cormorant font-semibold text-lg text-branco leading-tight">Humanizado e sem pressa</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
