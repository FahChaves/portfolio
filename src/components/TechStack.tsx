import { motion } from 'framer-motion'

type TechCategory = {
  title: string
  items: { name: string; level: 'expert' | 'advanced' | 'intermediate' }[]
}

const techStack: TechCategory[] = [
  {
    title: 'Backend',
    items: [
      { name: 'Node.js', level: 'expert' },
      { name: 'Bun', level: 'advanced' },
      { name: 'TypeScript', level: 'expert' },
      { name: 'Prisma', level: 'expert' },
      { name: 'Drizzle', level: 'advanced' },
    ],
  },
  {
    title: 'Frontend',
    items: [
      { name: 'Next.js', level: 'advanced' },
      { name: 'Vite.js', level: 'advanced' },
      { name: 'Tailwind CSS', level: 'expert' },
    ],
  },
  {
    title: 'Banco de Dados',
    items: [
      { name: 'PostgreSQL', level: 'expert' },
      { name: 'MySQL', level: 'advanced' },
    ],
  },
  {
    title: 'DevOps & Cloud',
    items: [
      { name: 'Docker', level: 'expert' },
      { name: 'AWS', level: 'advanced' },
      { name: 'CI/CD', level: 'expert' },
    ],
  },
]

const levelColors = {
  expert: 'bg-primary',
  advanced: 'bg-primary/70',
  intermediate: 'bg-primary/40',
}

const levelWidths = {
  expert: 'w-full',
  advanced: 'w-4/5',
  intermediate: 'w-3/5',
}

export default function TechStack() {
  return (
    <section id="stack" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-primary text-sm">02.</span>
            <h2 className="text-3xl font-bold">Tech Stack</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Tech Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {techStack.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
                className="p-6 rounded-lg border border-border bg-card/50"
              >
                <h3 className="font-mono text-primary text-sm mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.items.map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (categoryIndex * 0.1) + (techIndex * 0.05), duration: 0.4 }}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-foreground font-medium">{tech.name}</span>
                        <span className="text-xs text-muted-foreground font-mono capitalize">
                          {tech.level === 'expert' ? 'Especialista' : tech.level === 'advanced' ? 'Avançado' : 'Intermediário'}
                        </span>
                      </div>
                      <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: '100%' }}
                          viewport={{ once: true }}
                          transition={{ delay: (categoryIndex * 0.1) + (techIndex * 0.05) + 0.2, duration: 0.6 }}
                          className={`h-full rounded-full ${levelColors[tech.level]} ${levelWidths[tech.level]}`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8 p-6 rounded-lg border border-border bg-card/50"
          >
            <h3 className="font-mono text-primary text-sm mb-4">Também trabalho com</h3>
            <div className="flex flex-wrap gap-2">
              {['REST APIs', 'GraphQL', 'Jest', 'Git', 'Linux', 'Redis', 'Microservices', 'Clean Architecture'].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm rounded-md bg-secondary text-secondary-foreground font-mono"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
