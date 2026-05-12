import { Github, ExternalLink, Folder } from "lucide-react"

const featuredProjects = [
  {
    title: "API Gateway Platform",
    description:
      "Plataforma de API Gateway com rate limiting, autenticação OAuth2 e dashboard de monitoramento em tempo real. Processa mais de 1M de requisições por dia.",
    tech: ["Go", "Redis", "PostgreSQL", "Docker", "Prometheus"],
    github: "https://github.com",
    external: "https://example.com",
  },
  {
    title: "Microservices Boilerplate",
    description:
      "Template open source para arquitetura de microsserviços com service discovery, circuit breaker pattern e tracing distribuído.",
    tech: ["Node.js", "TypeScript", "RabbitMQ", "Kubernetes"],
    github: "https://github.com",
    external: null,
  },
  {
    title: "E-commerce Backend",
    description:
      "Sistema backend completo para e-commerce com processamento de pagamentos, gestão de inventário e sistema de notificações.",
    tech: ["Python", "FastAPI", "PostgreSQL", "Stripe", "Celery"],
    github: "https://github.com",
    external: "https://example.com",
  },
]

const otherProjects = [
  {
    title: "CLI Task Manager",
    description: "Ferramenta de linha de comando para gerenciamento de tarefas com sync em cloud.",
    tech: ["Rust", "SQLite"],
    github: "https://github.com",
  },
  {
    title: "Log Analyzer",
    description: "Ferramenta para análise e visualização de logs de aplicações distribuídas.",
    tech: ["Python", "Elasticsearch"],
    github: "https://github.com",
  },
  {
    title: "Database Migration Tool",
    description: "Utilitário para migrações de banco de dados com rollback automático.",
    tech: ["TypeScript", "PostgreSQL"],
    github: "https://github.com",
  },
  {
    title: "Auth Service",
    description: "Microsserviço de autenticação com suporte a JWT e OAuth2.",
    tech: ["Go", "Redis", "JWT"],
    github: "https://github.com",
  },
  {
    title: "Rate Limiter Library",
    description: "Biblioteca de rate limiting com múltiplos algoritmos implementados.",
    tech: ["Node.js", "Redis"],
    github: "https://github.com",
  },
  {
    title: "Config Server",
    description: "Servidor de configuração centralizado para microsserviços.",
    tech: ["Java", "Spring Boot"],
    github: "https://github.com",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 lg:px-0">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-primary text-sm">03.</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Projetos</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Featured Projects */}
        <div className="space-y-12 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`relative grid lg:grid-cols-12 gap-4 items-center ${
                index % 2 === 1 ? "lg:text-right" : ""
              }`}
            >
              {/* Project Image Placeholder */}
              <div
                className={`lg:col-span-7 aspect-video rounded-lg bg-card border border-border overflow-hidden ${
                  index % 2 === 1 ? "lg:col-start-6" : ""
                }`}
              >
                <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <code className="text-muted-foreground font-mono text-sm">
                    {`// ${project.title.toLowerCase().replace(/\s+/g, "-")}`}
                  </code>
                </div>
              </div>

              {/* Project Info */}
              <div
                className={`lg:col-span-6 lg:absolute ${
                  index % 2 === 1 ? "lg:left-0" : "lg:right-0"
                } lg:top-1/2 lg:-translate-y-1/2`}
              >
                <p className="font-mono text-primary text-sm mb-2">Projeto Destaque</p>
                <h3 className="text-xl font-bold text-foreground mb-4">{project.title}</h3>
                <div className="bg-card p-4 rounded-lg border border-border mb-4 shadow-lg">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <ul
                  className={`flex flex-wrap gap-2 mb-4 font-mono text-xs text-muted-foreground ${
                    index % 2 === 1 ? "lg:justify-start" : "lg:justify-end"
                  }`}
                >
                  {project.tech.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <div
                  className={`flex gap-4 ${index % 2 === 1 ? "lg:justify-start" : "lg:justify-end"}`}
                >
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.external && (
                    <a
                      href={project.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors"
                      aria-label="Link Externo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <h3 className="text-center text-xl font-semibold text-foreground mb-8">
          Outros Projetos
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherProjects.map((project) => (
            <div
              key={project.title}
              className="group p-6 bg-card rounded-lg border border-border hover:border-primary/50 hover:-translate-y-1 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <Folder className="w-8 h-8 text-primary" />
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
              <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h4>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <ul className="flex flex-wrap gap-2 font-mono text-xs text-muted-foreground">
                {project.tech.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
