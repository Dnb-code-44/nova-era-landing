import { MessageCircle } from 'lucide-react'

const WHATSAPP_URL = 'https://wa.me/5511925441907'

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-dourado rounded-full shadow-lg hover:scale-110 hover:bg-dourado-claro transition-all border border-dourado/30"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 text-fundo" strokeWidth={1.5} fill="currentColor" />
    </a>
  )
}
