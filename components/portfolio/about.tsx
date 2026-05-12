"use client"

import { motion } from "framer-motion"

export function About() {
  return (
    <section id="sobre" className="px-6 md:px-12 lg:px-24 py-24 border-t border-border">
      <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm font-medium tracking-widest uppercase text-muted-foreground sticky top-24">
            Sobre
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-6"
        >
          <p className="text-lg md:text-xl text-foreground leading-relaxed">
            Sou uma desenvolvedora fullstack apaixonada por criar sistemas que realmente funcionam. 
            Meu foco principal está no <span className="text-primary font-medium">backend</span>, 
            onde me sinto mais confortável trabalhando com arquiteturas de microsserviços, 
            APIs RESTful e bancos de dados relacionais.
          </p>

          <p className="text-lg md:text-xl text-foreground leading-relaxed">
            Atualmente trabalho como <span className="text-primary font-medium">Dev Plena</span> em 
            uma insurtech, onde desenvolvo e mantenho sistemas críticos de processamento de apólices 
            e sinistros. Tenho experiência sólida com integrações de terceiros, filas de mensagens 
            e deploy automatizado.
          </p>

          <p className="text-lg md:text-xl text-foreground leading-relaxed">
            Formada em <span className="text-primary font-medium">Análise e Desenvolvimento de Sistemas</span>, 
            estou sempre buscando aprender novas tecnologias e aprimorar minhas habilidades. 
            Acredito que código limpo e bem documentado faz toda a diferença no longo prazo.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
