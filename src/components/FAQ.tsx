import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    pergunta: 'Como funciona a consulta integrativa na Nova Era?',
    resposta:
      'A consulta na Nova Era é um atendimento investigativo e sem pressa. Antes de qualquer prescrição, dedicamos tempo real para ouvir sua história — seus sintomas, seu estilo de vida, seus exames e suas queixas emocionais. A partir daí, unimos nutrição, equilíbrio hormonal, manejo da dor e bem-estar em um plano individualizado. Nada de receitas prontas: o foco é encontrar a raiz do problema, não apenas mascarar o sintoma.',
  },
  {
    pergunta: 'Preciso seguir dietas restritivas ou cortar carboidratos?',
    resposta:
      'Não. Nossa abordagem é baseada em reeducação alimentar sustentável, sem terrorismo nutricional. Acreditamos que restrições rígidas criam ansiedade, culpa e efeito rebote. O que fazemos é entender a sua relação com a comida, ajustar escolhas de forma gradual e realista, e construir um emagrecimento que dure — porque faz sentido para a sua vida, não porque é uma regra imposta.',
  },
  {
    pergunta: 'Como a clínica aborda a saúde do intestino e das emoções?',
    resposta:
      'O intestino é frequentemente chamado de "segundo cérebro" — e não é exagero. Desequilíbrios na microbiota intestinal estão diretamente ligados a ansiedade, fadiga, inflamação e até desequilíbrios hormonais. Na Nova Era, avaliamos essa conexão de forma integrada: saúde digestiva, estado emocional e bem-estar físico não são tratados em separado. Um cuidado completo precisa olhar para todos esses eixos ao mesmo tempo.',
  },
]

export default function FAQ() {
  const [aberto, setAberto] = useState<number | null>(null)

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
      <div className="max-w-3xl mx-auto">

        {/* Cabeçalho */}
        <div className="flex flex-col items-center gap-3 mb-10">
          <div className="flex items-center gap-3 w-full max-w-xs">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-dourado/50" />
            <span className="font-jakarta font-semibold text-[11px] tracking-[0.2em] uppercase text-dourado">
              Tire suas dúvidas
            </span>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-dourado/50" />
          </div>
          <h2 className="font-cormorant font-semibold text-3xl sm:text-4xl lg:text-5xl text-center text-branco">
            Dúvidas frequentes
          </h2>
        </div>

        {/* Acordeão */}
        <ul className="space-y-3">
          {faqs.map((faq, index) => {
            const estaAberto = aberto === index
            return (
              <li key={index}>
                <button
                  onClick={() => setAberto(estaAberto ? null : index)}
                  className="w-full text-left group"
                  aria-expanded={estaAberto}
                >
                  <div className={`
                    relative p-5 sm:p-6 rounded-2xl border transition-all duration-300
                    ${estaAberto
                      ? 'bg-card-alt border-dourado/50 shadow-[0_0_24px_rgba(212,175,55,0.1)]'
                      : 'bg-card border-dourado/15 hover:border-dourado/35 hover:bg-card-alt'
                    }
                  `}>

                    {/* Linha dourada esquerda quando aberto */}
                    <div className={`absolute left-0 top-4 bottom-4 w-px bg-dourado rounded-full transition-opacity duration-300 ${estaAberto ? 'opacity-100' : 'opacity-0'}`} />

                    <div className="flex items-start justify-between gap-4 pl-3">
                      <h3 className={`font-cormorant font-semibold text-xl sm:text-2xl leading-snug transition-colors duration-200 ${estaAberto ? 'text-dourado-claro' : 'text-branco group-hover:text-dourado-claro'}`}>
                        {faq.pergunta}
                      </h3>
                      <div className={`
                        flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border transition-all duration-300 mt-0.5
                        ${estaAberto
                          ? 'bg-dourado/20 border-dourado/60 rotate-0'
                          : 'bg-dourado/10 border-dourado/25 group-hover:border-dourado/50'
                        }
                      `}>
                        {estaAberto
                          ? <Minus className="w-4 h-4 text-dourado" strokeWidth={2} />
                          : <Plus  className="w-4 h-4 text-dourado" strokeWidth={2} />
                        }
                      </div>
                    </div>

                    {/* Resposta com animação */}
                    <div className={`overflow-hidden transition-all duration-300 ${estaAberto ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                      <p className="font-jakarta font-medium text-base text-cinza-claro leading-relaxed pl-3 border-l border-dourado/20">
                        {faq.resposta}
                      </p>
                    </div>

                  </div>
                </button>
              </li>
            )
          })}
        </ul>

      </div>
    </section>
  )
}
