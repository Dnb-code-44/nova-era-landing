import Header from './components/Header'
import Hero from './components/Hero'
import QuickActions from './components/QuickActions'
import Diferencial from './components/Diferencial'
import Acolhimento from './components/Acolhimento'
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
        <Footer />
      </main>
      <WhatsAppButton />
    </div>
  )
}

export default App
