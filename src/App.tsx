import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import TechStack from './components/TechStack'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Contact />
      </main>
      <footer className="border-t border-border py-8 text-center text-muted-foreground">
        <p className="font-mono text-sm">
          <span className="text-primary">{'</'}</span>
          Construído com Vite + React + TypeScript
          <span className="text-primary">{'>'}</span>
        </p>
      </footer>
    </div>
  )
}

export default App
