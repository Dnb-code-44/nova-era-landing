# 📝 Changelog - Landing Page Nova Era

## ✨ Versão 1.1 - Ajustes de Imagens e Layout (15/01/2025)

### 🖼️ Imagens Ajustadas

#### Hero (Topo)
- **ANTES:** Imagem de capa com `object-cover` que cortava as laterais
- **AGORA:** Logo centralizada (`Logo.png`) com:
  - Fundo escuro elegante (`#191614`)
  - `object-contain` para preservar proporções
  - Sem cortes nas laterais
  - Padding interno para respiração visual

#### Card "O Diferencial Nova Era"
- **ANTES:** Imagem genérica repetida
- **AGORA:** Foto editorial "Conhecendo sua história" (`card 2.webp`) com:
  - Proporção `aspect-[4/5]` no mobile
  - `aspect-auto` com altura mínima no desktop
  - `object-cover` para preencher espaço

### 🎯 Botão Flutuante WhatsApp

- **ANTES:** Com animação de pulso (`animate-ping`) que podia distrair
- **AGORA:** 
  - Fixo no canto inferior direito (`fixed bottom-6 right-6 z-50`)
  - Sombra suave (`shadow-lg`) sem exageros
  - Hover suave com `scale-110`
  - Sem pulso animado (mais discreto e profissional)

### 🎨 Consistência Visual

✅ Fundo geral mantido em Areia Quente (`#F9F7F3`)
✅ Ícones dourados (`#B8924A`) com bom contraste
✅ Página enxuta, rápida e focada em conversão
✅ Mobile-first mantido em todas as seções

---

## 🚀 Versão 1.0 - Lançamento Inicial (15/01/2025)

### Funcionalidades Implementadas

- Header minimalista com logo e CTA
- Hero banner com chamada principal
- 4 atalhos rápidos para WhatsApp com mensagens pré-definidas
- Seção de diferenciais com checks dourados
- Footer com mapa, horários e informações de contato
- Botão flutuante do WhatsApp
- Design responsivo mobile-first
- Paleta de cores sofisticada (Off-White, Bege, Marrom, Dourado)
- Tipografia elegante (Cormorant Garamond + Plus Jakarta Sans)

### Stack Técnica

- React 18.3.1
- TypeScript 5.7.2
- Tailwind CSS 3.4.15
- Vite 6.0.1
- Lucide React 0.454.0

---

## 🔄 Histórico de Builds

### Build 1.1
```
dist/index.html                  1.04 kB │ gzip: 0.56 kB
dist/assets/Logo-C28VRqYJ.png    1,476.99 kB
dist/assets/index-DxJVrUEP.css   14.31 kB │ gzip: 3.52 kB
dist/assets/index-Dx6VLXl3.js    159.68 kB │ gzip: 50.53 kB
```

### Build 1.0
```
dist/index.html                  1.04 kB │ gzip: 0.56 kB
dist/assets/Logo-C28VRqYJ.png    1,476.99 kB
dist/assets/index-xE9U5tV6.css   14.27 kB │ gzip: 3.54 kB
dist/assets/index-BKAd15Yp.js    159.74 kB │ gzip: 50.53 kB
```

---

## 📋 Próximas Melhorias Planejadas

- [ ] Adicionar animações sutis no scroll
- [ ] Implementar lazy loading nas imagens
- [ ] Adicionar seção de depoimentos de pacientes
- [ ] Integrar Google Analytics
- [ ] Criar página "Sobre a Dra." (se aplicável)
- [ ] Adicionar FAQ expandível
- [ ] Implementar modo escuro (opcional)

---

**Mantido por:** Equipe Nova Era
**Última atualização:** 15/01/2025
