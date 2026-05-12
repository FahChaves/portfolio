"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const experiences = [
  {
    period: "2024 — Presente",
    title: "Desenvolvedora Fullstack Plena",
    company: "Insurtech",
    description: "Desenvolvimento e manutenção de sistemas de gestão de apólices e sinistros. Criação de APIs RESTful, integrações com parceiros e otimização de queries. Implementação de pipelines CI/CD e containerização com Docker.",
    technologies: ["Node.js", "TypeScript", "PostgreSQL", "Docker", "AWS"],
    link: "#"
  },
  {
    period: "2022 — 2024",
    title: "Desenvolvedora Fullstack Júnior",
    company: "Insurtech",
    description: "Início da carreira desenvolvendo features no sistema legado e participando da migração para arquitetura de microsserviços. Implementação de testes automatizados e documentação de APIs.",
    technologies: ["Node.js", "Vue.js", "MySQL", "Jest", "Git"],
    link: "#"
  },
]

export function Experience() {
  return (
    <section id="experiencia" className="px-6 md:px-12 lg:px-24 py-24 border-t border-border">
      <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm font-medium tracking-widest uppercase text-muted-foreground sticky top-24">
            Experiência
          </h2>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="grid md:grid-cols-[140px_1fr] gap-4 md:gap-8">
                <span className="text-sm text-muted-foreground font-mono">
                  {exp.period}
                </span>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors inline-flex items-center gap-2">
                      {exp.title} · {exp.company}
                      <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 text-xs font-mono bg-secondary text-secondary-foreground rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
