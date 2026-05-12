import { motion } from 'framer-motion'
import { ArrowDown, Terminal } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      {/* Gradient Orb */}
      <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
      
      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Terminal Prompt */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm">
            <Terminal size={16} className="text-primary" />
            <span className="font-mono text-sm text-muted-foreground">
              ~/portfolio
            </span>
            <span className="text-primary font-mono text-sm">$</span>
            <span className="font-mono text-sm">whoami</span>
          </div>

          {/* Main Title */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-5xl md:text-7xl font-bold tracking-tight"
            >
              <span className="text-muted-foreground">Olá, sou</span>
              <br />
              <span className="text-foreground">Desenvolvedora</span>
              <br />
              <span className="text-primary">Fullstack</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
            >
              Especializada em <span className="text-foreground font-medium">backend</span> e arquitetura de sistemas escaláveis. 
              Transformando café em código há 2+ anos.
            </motion.p>
          </div>

          {/* Code Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="code-block rounded-lg p-4 max-w-lg font-mono text-sm"
          >
            <div className="flex items-center gap-2 mb-3 pb-3 border-b border-border">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-2 text-muted-foreground text-xs">developer.ts</span>
            </div>
            <pre className="text-muted-foreground">
              <code>
                <span className="text-primary">const</span>{' '}
                <span className="text-foreground">developer</span> = {'{'}
                {'\n'}  <span className="text-muted-foreground">role:</span>{' '}
                <span className="text-green-400">{'"Dev Pleno"'}</span>,
                {'\n'}  <span className="text-muted-foreground">focus:</span>{' '}
                <span className="text-green-400">{'"Backend"'}</span>,
                {'\n'}  <span className="text-muted-foreground">experience:</span>{' '}
                <span className="text-yellow-400">2</span>,
                {'\n'}  <span className="text-muted-foreground">available:</span>{' '}
                <span className="text-primary">true</span>
                {'\n'}{'}'};
              </code>
            </pre>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Entre em contato
            </a>
            <a
              href="#stack"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-medium hover:bg-card transition-colors"
            >
              Ver tecnologias
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowDown className="text-muted-foreground" size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
