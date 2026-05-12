"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Github } from "lucide-react"

const projects = [
  {
    title: "API de Processamento de Apólices",
    description: "Sistema de alta disponibilidade para processamento de apólices de seguro em tempo real. Arquitetura baseada em filas com RabbitMQ e cache distribuído.",
    technologies: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "Docker"],
    github: "#",
    demo: "#"
  },
  {
    title: "Dashboard de Métricas",
    description: "Painel administrativo para visualização de KPIs e métricas de negócio. Integração com múltiplas fontes de dados e relatórios automatizados.",
    technologies: ["Vue.js", "TypeScript", "Tailwind", "Chart.js", "AWS"],
    github: "#",
    demo: "#"
  },
  {
    title: "CLI para Automação de Deploy",
    description: "Ferramenta de linha de comando para automatizar processos de deploy e rollback. Integração com GitHub Actions e notificações via Slack.",
    technologies: ["Bun", "TypeScript", "GitHub API", "Docker"],
    github: "#",
  },
  {
    title: "Sistema de Notificações",
    description: "Microsserviço de notificações multicanal (email, SMS, push). Arquitetura event-driven com processamento assíncrono e retry automático.",
    technologies: ["Node.js", "Prisma", "AWS SES", "SNS", "SQS"],
    github: "#",
    demo: "#"
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
}

export function Projects() {
  return (
    <section id="projetos" className="px-6 md:px-12 lg:px-24 py-24 border-t border-border">
      <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm font-medium tracking-widest uppercase text-muted-foreground sticky top-24">
            Projetos
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {projects.map((project, index) => (
            <motion.article
              key={index}
              variants={item}
              className="group p-6 -mx-6 rounded-lg hover:bg-card transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center gap-3 shrink-0">
                    {project.github && (
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="Ver no GitHub"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.demo && (
                      <a 
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="Ver demo"
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 text-xs font-mono bg-secondary text-secondary-foreground rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
