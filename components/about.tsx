import { Server, Database, Code2, Terminal } from "lucide-react"

const skills = [
  {
    category: "Backend",
    icon: Server,
    items: ["Node.js", "Bun", "TypeScript"],
  },
  {
    category: "Banco de Dados",
    icon: Database,
    items: ["PostgreSQL", "Drizzle", "Prisma", "MySQL"],
  },
  {
    category: "DevOps",
    icon: Terminal,
    items: ["Docker", "AWS", "CI/CD"],
  },
  {
    category: "Frontend",
    icon: Code2,
    items: ["React", "Next.js", "TypeScript", "Tailwind"],
  },
]

export function About() {
  return (
    <section id="about" className="py-24 px-6 lg:px-0">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-primary text-sm">01.</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Sobre Mim</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Text content */}
          <div className="lg:col-span-3 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Olá! Sou uma desenvolvedora fullstack com paixão especial pelo backend. 
              Minha jornada na programação começou há mais de 4 anos, quando descobri 
              a magia de transformar linhas de código em sistemas funcionais.
            </p>
            <p>
              Atualmente, foco em construir <span className="text-foreground">APIs RESTful</span>, 
              {" "}<span className="text-foreground">microsserviços</span> e arquiteturas escaláveis. 
              Tenho experiência sólida com diversas tecnologias e sempre busco aprender novas 
              ferramentas para resolver problemas complexos.
            </p>
            <p>
              Quando não estou codando, gosto de contribuir para projetos open source, 
              escrever artigos técnicos e participar de comunidades de desenvolvimento.
            </p>
          </div>

          {/* Terminal-style code block */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-lg border border-border overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="ml-2 text-xs text-muted-foreground font-mono">developer.ts</span>
              </div>
              <pre className="p-4 text-sm font-mono overflow-x-auto">
                <code>
                  <span className="text-primary">const</span>{" "}
                  <span className="text-foreground">dev</span>{" "}
                  <span className="text-primary">=</span> {"{"}
                  {"\n"}  <span className="text-muted-foreground">name:</span>{" "}
                  <span className="text-green-400">{'"Fabiana Chaves"'}</span>,
                  {"\n"}  <span className="text-muted-foreground">role:</span>{" "}
                  <span className="text-green-400">{'"Fullstack Dev"'}</span>,
                  {"\n"}  <span className="text-muted-foreground">focus:</span>{" "}
                  <span className="text-green-400">{'"Backend"'}</span>,
                  {"\n"}  <span className="text-muted-foreground">available:</span>{" "}
                  <span className="text-primary">true</span>
                  {"\n"}{"}"};
                </code>
              </pre>
            </div>
          </div>
        </div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {skills.map((skill) => (
            <div
              key={skill.category}
              className="p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center gap-2 mb-3">
                <skill.icon className="w-4 h-4 text-primary" />
                <span className="font-medium text-foreground text-sm">{skill.category}</span>
              </div>
              <ul className="space-y-1">
                {skill.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground font-mono flex items-center gap-2">
                    <span className="text-primary">▹</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
