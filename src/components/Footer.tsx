import { MapPin, Clock, Phone, Instagram } from 'lucide-react'

const WHATSAPP_URL = 'https://wa.me/5511925441907'
const INSTAGRAM_URL = 'https://instagram.com/clinica.novaera'

export default function Footer() {
  return (
    <footer className="bg-marrom text-white mt-6">

      {/* Faixa dourada de entrada */}
      <div className="h-1 bg-gradient-to-r from-transparent via-dourado to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10 sm:pt-16 sm:pb-12">

        {/* Topo do footer: logo + tagline */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 pb-10 border-b border-white/10">
          <div className="space-y-2">
            <img src="/imgs/Logo.png" alt="Nova Era" className="h-12 w-auto object-contain brightness-0 invert opacity-90" />
            <p className="font-jakarta font-medium text-sm text-white/50 tracking-wide">
              Saúde Integrativa · Bethaville I, Barueri - SP
            </p>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-dourado/60 text-dourado rounded-full font-jakarta font-semibold text-sm hover:bg-dourado hover:text-marrom transition-all w-fit"
          >
            Agendar pelo WhatsApp
            <span className="text-lg leading-none">›</span>
          </a>
        </div>

        {/* Informações em grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-4 h-4 text-dourado" strokeWidth={1.5} />
              <h3 className="font-cormorant font-semibold text-lg">Localização</h3>
            </div>
            <p className="font-jakarta font-medium text-sm text-white/65 leading-relaxed">
              Bethaville I<br />Barueri — SP
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3">
              <Clock className="w-4 h-4 text-dourado" strokeWidth={1.5} />
              <h3 className="font-cormorant font-semibold text-lg">Horários</h3>
            </div>
            <p className="font-jakarta font-medium text-sm text-white/65 leading-relaxed">
              Segunda a Sábado<br />A partir das 08h
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3">
              <Phone className="w-4 h-4 text-dourado" strokeWidth={1.5} />
              <h3 className="font-cormorant font-semibold text-lg">WhatsApp</h3>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-jakarta font-medium text-sm text-white/65 hover:text-dourado transition-colors"
            >
              (11) 92544-1907
            </a>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3">
              <Instagram className="w-4 h-4 text-dourado" strokeWidth={1.5} />
              <h3 className="font-cormorant font-semibold text-lg">Instagram</h3>
            </div>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-jakarta font-medium text-sm text-white/65 hover:text-dourado transition-colors"
            >
              @clinica.novaera
            </a>
          </div>
        </div>

        {/* Mapa */}
        <div className="rounded-2xl overflow-hidden h-64 sm:h-80 border border-white/10 mb-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.0735449486875!2d-46.876321!3d-23.502778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf0252e5e5e5e5%3A0x5e5e5e5e5e5e5e5e!2sBethaville%20I%2C%20Barueri%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização da Clínica Nova Era"
          />
        </div>

        {/* Rodapé final */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8 border-t border-white/10">
          <p className="font-jakarta font-medium text-xs text-white/40">
            © {new Date().getFullYear()} Nova Era — Saúde Integrativa. Todos os direitos reservados.
          </p>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-dourado/50 to-transparent" />
        </div>

      </div>
    </footer>
  )
}
