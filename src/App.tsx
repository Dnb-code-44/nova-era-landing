import Header from './components/Header'
import Hero from './components/Hero'
import QuickActions from './components/QuickActions'
import Diferencial from './components/Diferencial'
import Acolhimento from './components/Acolhimento'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <QuickActions />
        <Diferencial />
        <Acolhimento />
        <FAQ />
        <Footer />
      </main>
      <WhatsAppButton />
    </div>
  )
}

export default App
