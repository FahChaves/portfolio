"use client"

import { motion } from "framer-motion"

const technologies = {
  "Backend": [
    { name: "Node.js", level: "Avançado" },
    { name: "Bun", level: "Intermediário" },
    { name: "TypeScript", level: "Avançado" },
  ],
  "Frontend": [
    { name: "Vue.js", level: "Intermediário" },
    { name: "Next.js", level: "Intermediário" },
    { name: "Tailwind CSS", level: "Avançado" },
  ],
  "Banco de Dados": [
    { name: "PostgreSQL", level: "Avançado" },
    { name: "MySQL", level: "Intermediário" },
    { name: "Prisma", level: "Avançado" },
    { name: "Drizzle", level: "Intermediário" },
  ],
  "DevOps & Cloud": [
    { name: "Docker", level: "Avançado" },
    { name: "AWS", level: "Intermediário" },
    { name: "CI/CD", level: "Avançado" },
  ],
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export function TechStack() {
  return (
    <section id="tecnologias" className="px-6 md:px-12 lg:px-24 py-24 border-t border-border">
      <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm font-medium tracking-widest uppercase text-muted-foreground sticky top-24">
            Tecnologias
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 gap-12"
        >
          {Object.entries(technologies).map(([category, techs]) => (
            <motion.div key={category} variants={item} className="space-y-4">
              <h3 className="text-foreground font-medium text-lg">{category}</h3>
              <ul className="space-y-3">
                {techs.map((tech) => (
                  <li key={tech.name} className="group flex items-center justify-between">
                    <span className="text-foreground group-hover:text-primary transition-colors">
                      {tech.name}
                    </span>
                    <span className="text-xs text-muted-foreground font-mono">
                      {tech.level}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
