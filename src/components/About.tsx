import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, Code2 } from 'lucide-react'

const highlights = [
  {
    icon: Briefcase,
    title: 'Dev Pleno',
    description: 'Atuando com desenvolvimento fullstack focado em backend',
  },
  {
    icon: Code2,
    title: '2+ Anos',
    description: 'Experiência em projetos reais de alta complexidade',
  },
  {
    icon: GraduationCap,
    title: 'ADS',
    description: 'Formação em Análise e Desenvolvimento de Sistemas',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-primary text-sm">01.</span>
            <h2 className="text-3xl font-bold">Sobre</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Sou desenvolvedora fullstack com forte atuação em{' '}
                <span className="text-foreground font-medium">backend</span>, 
                especializada em criar APIs robustas e sistemas escaláveis.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Nos últimos 2 anos, trabalhei em uma{' '}
                <span className="text-primary font-medium">insurtech</span>, 
                onde desenvolvi soluções que processam milhares de transações 
                diariamente, integrações com serviços externos e pipelines de 
                dados complexos.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Minha stack principal inclui{' '}
                <span className="text-foreground">Node.js</span>,{' '}
                <span className="text-foreground">TypeScript</span>,{' '}
                <span className="text-foreground">PostgreSQL</span> e{' '}
                <span className="text-foreground">Docker</span>, com experiência 
                em ambientes AWS e práticas de CI/CD.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-start gap-4 p-4 rounded-lg border border-border bg-card/50 hover:border-primary/50 transition-colors"
                >
                  <div className="p-2 rounded-md bg-primary/10">
                    <item.icon className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
