# 🎯 Landing Page Nova Era - Instruções

## ✅ O que foi criado

Landing page **curta, enxuta e direta** para a clínica Nova Era, inspirada no dr.consulta.

### Estrutura (4 seções)

1. **Header Minimalista**
   - Logo Nova Era com ícone de lótus dourado
   - Botão CTA "Agendar agora" fixo

2. **Hero + Barra Rápida "Como podemos cuidar de você hoje?"**
   - Banner compacto com título, subtítulo e CTA
   - 4 cards clicáveis que abrem WhatsApp com mensagem pré-definida:
     - Agendar Consulta
     - Manejo da Dor
     - Saúde da Mulher
     - Estética & Botox

3. **O Diferencial Nova Era**
   - 2 colunas: foto + 4 tópicos com check dourado
   - Foco na abordagem humanizada e integrativa

4. **Localização, Horários e Rodapé**
   - Informações práticas (endereço, horário, contatos)
   - Mapa do Google Maps embutido
   - Links para WhatsApp e Instagram

5. **Botão Flutuante WhatsApp**
   - Fixo no canto inferior direito
   - Animação de pulso sutil

## 🎨 Paleta de Cores

- **Off-White Areia:** `#F9F7F3` (fundo principal)
- **Branco:** `#FFFFFF` (cards)
- **Bege Suave:** `#EFECE6` (hero banner)
- **Marrom Carvão:** `#1E1B18` (textos e botões)
- **Dourado Fosco:** `#B8924A` (detalhes e destaques)
- **Borda:** `#E5DFD5` (bordas sutis)

## 🔤 Tipografia

- **Cormorant Garamond:** Títulos (elegante e sofisticado)
- **Plus Jakarta Sans:** Corpo de texto e botões (clean e legível)

## 🚀 Como Usar

### Desenvolvimento Local

```bash
npm install   # Instalar dependências (já feito)
npm run dev   # Rodar servidor local (http://localhost:5173)
```

### Build para Produção

```bash
npm run build   # Gerar arquivos otimizados na pasta /dist
npm run preview # Visualizar build de produção
```

### Deploy

A pasta `dist/` contém todos os arquivos prontos para deploy:
- Hospedagem estática (Vercel, Netlify, GitHub Pages)
- Servidor web (Apache, Nginx)

## 📂 Estrutura de Pastas

```
Nova era 2/
├── src/
│   ├── components/
│   │   ├── Header.tsx           # Cabeçalho com logo e CTA
│   │   ├── Hero.tsx             # Banner principal
│   │   ├── QuickActions.tsx     # 4 atalhos para WhatsApp
│   │   ├── Diferencial.tsx      # Seção de diferenciais
│   │   ├── Footer.tsx           # Rodapé com mapa e info
│   │   └── WhatsAppButton.tsx   # Botão flutuante
│   ├── App.tsx                  # Componente principal
│   ├── main.tsx                 # Entry point
│   └── index.css                # Estilos globais
├── imgs/                        # Imagens da clínica
├── dist/                        # Build de produção
└── package.json                 # Dependências
```

## 📱 Responsivo

- **Mobile-first:** Otimizado para celular (bio do Instagram)
- **Tablet:** Layout adaptado com grid responsivo
- **Desktop:** Experiência completa com 2 colunas

## 🔗 Links Importantes

- **WhatsApp:** `https://wa.me/5511925441907`
- **Instagram:** `@clinica.novaera`
- **Localização:** Bethaville I, Barueri - SP

## ⚙️ Personalizações

### Alterar Textos

Edite os componentes em `src/components/`:
- Títulos e descrições no `Hero.tsx`
- Diferenciais no `Diferencial.tsx`
- Informações de contato no `Footer.tsx`

### Trocar Imagens

Imagens atuais na pasta `imgs/`:
- **Hero (topo):** `Logo.png` - Centralizada com fundo escuro elegante (`#191614`) usando `object-contain`
- **Diferencial (seção inferior):** `card 2.webp` - Foto editorial "Conhecendo sua história" com `aspect-[4/5]`
- **Favicon:** `Logo.png`

Para substituir, mantenha os mesmos nomes ou ajuste os caminhos nos componentes.

### Ajustar Cores

Edite `tailwind.config.js` na seção `colors`:

```js
colors: {
  'offwhite': '#F9F7F3',
  'bege': '#EFECE6',
  'marrom': '#1E1B18',
  'dourado': '#B8924A',
}
```

### Alterar Mapa

No `Footer.tsx`, atualize o `src` do iframe com o embed do Google Maps da localização exata.

## 🎯 Foco em Conversão

Todos os elementos levam para o WhatsApp:
- Botão no header
- CTA no hero
- 4 cards de atalho rápido
- Links no footer
- Botão flutuante

Cada card de atalho rápido já inclui uma mensagem pré-definida para facilitar o contato.

## ✨ Diferenciais da Implementação

✅ Zero enrolação - apenas o essencial
✅ Visual clean, sem gradientes genéricos de IA
✅ Navegação rápida inspirada no dr.consulta
✅ Foco total em agendamento via WhatsApp
✅ Mobile-first para acesso pela bio do Instagram
✅ Tipografia sofisticada e harmoniosa
✅ Paleta de cores elegante e profissional

---

**Pronto para usar!** 🚀

O servidor de desenvolvimento está rodando em: http://localhost:5173
