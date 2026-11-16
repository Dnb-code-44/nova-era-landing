const WHATSAPP_URL = 'https://wa.me/5511925441907'

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6 sm:pt-14 sm:pb-8">
      <div className="relative bg-bege-escuro rounded-3xl overflow-hidden shadow-2xl border border-dourado/20">

        {/* Cantos decorativos */}
        <span className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-dourado/50 rounded-tl-lg pointer-events-none" />
        <span className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-dourado/50 rounded-tr-lg pointer-events-none" />
        <span className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-dourado/50 rounded-bl-lg pointer-events-none" />
        <span className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-dourado/50 rounded-br-lg pointer-events-none" />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center p-8 sm:p-10 lg:p-14 relative z-10">

          {/* Conteúdo */}
          <div className="space-y-6">
            {/* Pílula de localização */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-dourado/15 border border-dourado/40 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-dourado" />
              <span className="font-jakarta font-semibold text-xs tracking-widest uppercase text-marrom">
                Bethaville I · Barueri, SP
              </span>
            </div>

            <h1 className="font-jakarta font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-[3.4rem] leading-[1.1] text-marrom">
              Saúde integrativa com cuidado e atenção que você merece
            </h1>

            <p className="font-jakarta font-medium text-base sm:text-lg text-marrom/75 leading-relaxed max-w-md">
              Investigamos a raiz do sintoma com escuta ativa e visão integrativa,
              sem pressa e sem receitas prontas.
            </p>

            <div className="flex items-center gap-4 pt-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-marrom text-white font-jakarta font-semibold text-base rounded-full hover:bg-dourado-escuro transition-colors shadow-lg"
              >
                Agendar pelo WhatsApp
                <span className="text-xl leading-none">›</span>
              </a>
              {/* Detalhe: linha + texto */}
              <div className="hidden sm:flex items-center gap-2 text-marrom/50">
                <span className="w-8 h-px bg-dourado/60" />
                <span className="font-jakarta text-xs font-medium">seg – sáb · 08h</span>
              </div>
            </div>
          </div>

          {/* Imagem com moldura decorativa */}
          <div className="relative">
            <div className="relative h-64 sm:h-80 lg:h-[420px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/imgs/Identidade Dourada Nova Era.png"
                alt="Nova Era - Saúde Integrativa"
                className="w-full h-full object-cover"
              />
              {/* Overlay sutil dourado na base */}
              <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-dourado/20 to-transparent pointer-events-none" />
            </div>
            {/* Bloco flutuante sobre a imagem */}
            <div className="absolute -bottom-5 -left-4 bg-white border border-dourado/30 rounded-xl px-5 py-3 shadow-lg hidden sm:block">
              <p className="font-jakarta font-semibold text-xs text-marrom/50 uppercase tracking-widest mb-0.5">Atendimento</p>
              <p className="font-cormorant font-semibold text-lg text-marrom leading-tight">Humanizado e sem pressa</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
