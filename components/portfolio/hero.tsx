"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl"
      >
        <p className="text-muted-foreground text-sm tracking-widest uppercase mb-4">
          Desenvolvedora Fullstack
        </p>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-balance mb-6">
          <span className="italic text-primary">Construindo sistemas robustos.</span>{" "}
          Desenvolvendo soluções escaláveis com foco em backend, arquitetura limpa e boas práticas.
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-8">
          Dev Plena com 2 anos de experiência em insurtech. Especializada em Node.js, TypeScript e infraestrutura cloud.
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors underline underline-offset-4"
          >
            GitHub
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors underline underline-offset-4"
          >
            LinkedIn
          </a>
          <a 
            href="mailto:seu@email.com"
            className="text-foreground hover:text-primary transition-colors underline underline-offset-4"
          >
            Email
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute bottom-12 left-6 md:left-12 lg:left-24"
      >
        <a 
          href="#sobre" 
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
        >
          <ArrowDown className="w-4 h-4 animate-bounce" />
          Role para explorar
        </a>
      </motion.div>
    </section>
  )
}
