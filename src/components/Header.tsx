import logoImg from '../assets/Logo.png'

const WHATSAPP_URL = 'https://wa.me/5511925441907'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-fundo/95 backdrop-blur-sm border-b border-dourado/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">

          {/* Logo */}
          <img src={logoImg} alt="Nova Era" className="h-10 sm:h-12 w-auto object-contain" />

          {/* Nav decorativa — desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            {['Consultas', 'Manejo da Dor', 'Saúde da Mulher', 'Estética'].map(item => (
              <span
                key={item}
                className="font-jakarta font-medium text-sm text-cinza-medio hover:text-dourado-claro tracking-wide cursor-pointer transition-colors"
              >
                {item}
              </span>
            ))}
          </nav>

          {/* CTA */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 sm:px-7 py-2.5 bg-dourado text-fundo font-jakarta font-semibold text-sm sm:text-base rounded-full hover:bg-dourado-claro transition-colors"
          >
            <span className="hidden sm:inline">Agendar agora</span>
            <span className="sm:hidden">Agendar</span>
            <span className="text-lg leading-none">›</span>
          </a>
        </div>
      </div>

      {/* Faixa dourada fina */}
      <div className="h-px bg-gradient-to-r from-transparent via-dourado/40 to-transparent" />
    </header>
  )
}
