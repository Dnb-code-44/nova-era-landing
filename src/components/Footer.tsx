import { MapPin, Clock, Phone, Instagram } from 'lucide-react'
import logoImg from '../assets/Logo.png'

const WHATSAPP_URL = 'https://wa.me/5511925441907'
const INSTAGRAM_URL = 'https://instagram.com/clinica.novaera'

export default function Footer() {
  return (
    <footer className="bg-card mt-6">

      {/* Faixa dourada de entrada */}
      <div className="h-px bg-gradient-to-r from-transparent via-dourado/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10 sm:pt-16 sm:pb-12">

        {/* Topo: logo + botão */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 pb-10 border-b border-dourado/10">
          <div className="space-y-2">
            <img src={logoImg} alt="Nova Era" className="h-12 w-auto object-contain" />
            <p className="font-jakarta font-medium text-sm text-cinza-medio tracking-wide">
              Saúde Integrativa · Bethaville I, Barueri - SP
            </p>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-dourado/60 text-dourado rounded-full font-jakarta font-semibold text-sm hover:bg-dourado hover:text-fundo transition-all w-fit"
          >
            Agendar pelo WhatsApp
            <span className="text-lg leading-none">›</span>
          </a>
        </div>

        {/* Grid de informações */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {[
            { Icon: MapPin,    label: 'Localização', content: <>Bethaville I<br />Barueri — SP</> },
            { Icon: Clock,     label: 'Horários',    content: <>Segunda a Sábado<br />A partir das 08h</> },
            { Icon: Phone,     label: 'WhatsApp',    href: WHATSAPP_URL,    text: '(11) 92544-1907' },
            { Icon: Instagram, label: 'Instagram',   href: INSTAGRAM_URL,   text: '@clinica.novaera' },
          ].map(({ Icon, label, content, href, text }) => (
            <div key={label} className="space-y-2">
              <div className="flex items-center gap-2 mb-3">
                <Icon className="w-4 h-4 text-dourado" strokeWidth={1.5} />
                <h3 className="font-cormorant font-semibold text-lg text-branco">{label}</h3>
              </div>
              {content
                ? <p className="font-jakarta font-medium text-sm text-cinza-medio leading-relaxed">{content}</p>
                : <a href={href} target="_blank" rel="noopener noreferrer"
                    className="font-jakarta font-medium text-sm text-cinza-medio hover:text-dourado transition-colors">
                    {text}
                  </a>
              }
            </div>
          ))}
        </div>

        {/* Mapa */}
        <div className="rounded-2xl overflow-hidden h-64 sm:h-80 border border-dourado/15 mb-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.0735449486875!2d-46.876321!3d-23.502778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf0252e5e5e5e5%3A0x5e5e5e5e5e5e5e5e!2sBethaville%20I%2C%20Barueri%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890"
            width="100%" height="100%"
            style={{ border: 0 }}
            allowFullScreen loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização da Clínica Nova Era"
          />
        </div>

        {/* Rodapé final */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8 border-t border-dourado/10">
          <p className="font-jakarta font-medium text-xs text-cinza-medio/60">
            © {new Date().getFullYear()} Nova Era — Saúde Integrativa. Todos os direitos reservados.
          </p>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-dourado/40 to-transparent" />
        </div>
      </div>
    </footer>
  )
}
