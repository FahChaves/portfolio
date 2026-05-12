"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { ExternalLink } from "lucide-react"

const experiences = [
  {
    company: "Tech Corp",
    role: "Desenvolvedora Backend Senior",
    period: "2023 — Presente",
    url: "https://example.com",
    description: [
      "Liderança técnica de uma squad de 5 desenvolvedores focada em microsserviços",
      "Arquitetura e implementação de APIs que processam milhões de requisições diárias",
      "Migração de monolito para arquitetura de microsserviços, reduzindo latência em 40%",
      "Mentoria de desenvolvedores júnior e condução de code reviews",
    ],
    tech: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "Docker", "AWS"],
  },
  {
    company: "StartupXYZ",
    role: "Desenvolvedora Fullstack",
    period: "2021 — 2023",
    url: "https://example.com",
    description: [
      "Desenvolvimento de plataforma SaaS do zero até a produção",
      "Implementação de sistema de autenticação e autorização seguro",
      "Criação de pipelines CI/CD automatizados",
      "Integração com APIs de terceiros e serviços de pagamento",
    ],
    tech: ["Python", "Django", "React", "PostgreSQL", "Docker", "GCP"],
  },
  {
    company: "AgênciaDev",
    role: "Desenvolvedora Júnior",
    period: "2019 — 2021",
    url: "https://example.com",
    description: [
      "Desenvolvimento de aplicações web para diversos clientes",
      "Manutenção e otimização de sistemas legados",
      "Participação ativa em sprints ágeis e daily meetings",
      "Documentação técnica e testes automatizados",
    ],
    tech: ["PHP", "Laravel", "MySQL", "JavaScript", "Vue.js"],
  },
]

export function Experience() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="experience" className="py-24 px-6 lg:px-0">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-primary text-sm">02.</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Experiência</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
          {/* Tab list */}
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-visible border-b sm:border-b-0 sm:border-l border-border">
            {experiences.map((exp, index) => (
              <button
                key={exp.company}
                onClick={() => setActiveTab(index)}
                className={cn(
                  "px-4 py-3 text-sm font-mono whitespace-nowrap text-left transition-all",
                  "border-b-2 sm:border-b-0 sm:border-l-2 -mb-px sm:mb-0 sm:-ml-px",
                  activeTab === index
                    ? "text-primary border-primary bg-primary/5"
                    : "text-muted-foreground border-transparent hover:text-foreground hover:bg-secondary/50"
                )}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="flex-1 min-h-[300px]">
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={cn(
                  "transition-opacity duration-300",
                  activeTab === index ? "opacity-100" : "hidden opacity-0"
                )}
              >
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {exp.role}{" "}
                  <a
                    href={exp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center gap-1"
                  >
                    @ {exp.company}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </h3>
                <p className="text-sm text-muted-foreground font-mono mb-4">{exp.period}</p>
                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-muted-foreground text-sm flex gap-2">
                      <span className="text-primary mt-1.5">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-mono bg-secondary text-primary rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
