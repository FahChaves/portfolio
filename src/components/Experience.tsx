import { motion } from 'framer-motion'
import { Calendar, MapPin, ExternalLink } from 'lucide-react'

const experiences = [
  {
    period: '2024 — Presente',
    role: 'Desenvolvedora Fullstack Pleno',
    company: 'Insurtech',
    location: 'Remoto',
    description: [
      'Desenvolvimento e manutenção de APIs REST robustas utilizando Node.js e TypeScript',
      'Implementação de integrações com sistemas externos e seguradoras parceiras',
      'Otimização de queries e modelagem de banco de dados PostgreSQL',
      'Criação de pipelines de CI/CD para automação de deploys',
      'Participação em decisões arquiteturais e code reviews',
    ],
    technologies: ['Node.js', 'TypeScript', 'PostgreSQL', 'Docker', 'AWS', 'Prisma'],
  },
  {
    period: '2022 — 2024',
    role: 'Desenvolvedora Fullstack Júnior',
    company: 'Insurtech',
    location: 'Remoto',
    description: [
      'Desenvolvimento de features no backend utilizando Node.js',
      'Criação de interfaces utilizando React e Next.js',
      'Manutenção e evolução de sistemas legados',
      'Implementação de testes unitários e de integração',
    ],
    technologies: ['Node.js', 'TypeScript', 'React', 'Next.js', 'MySQL', 'Jest'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-primary text-sm">03.</span>
            <h2 className="text-3xl font-bold">Experiência</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.period}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className={`relative pl-8 md:pl-0 pb-12 last:pb-0 ${
                  index % 2 === 0 ? 'md:pr-[50%] md:text-right' : 'md:pl-[50%] md:text-left'
                }`}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-0 md:left-1/2 top-0 w-3 h-3 rounded-full bg-primary border-4 border-background md:-translate-x-1/2 z-10`} />

                {/* Content Card */}
                <div className={`${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <div className="p-6 rounded-lg border border-border bg-card/50 hover:border-primary/50 transition-colors text-left">
                    {/* Period & Location */}
                    <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5 font-mono">
                        <Calendar size={14} className="text-primary" />
                        {exp.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin size={14} className="text-primary" />
                        {exp.location}
                      </span>
                    </div>

                    {/* Role & Company */}
                    <h3 className="text-xl font-semibold text-foreground mb-1">{exp.role}</h3>
                    <p className="text-primary font-medium mb-4">{exp.company}</p>

                    {/* Description */}
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1.5">▹</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs rounded bg-primary/10 text-primary font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
