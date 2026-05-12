import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Send, Copy, Check } from 'lucide-react'
import { useState } from 'react'

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com',
    username: '@seuusuario',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://linkedin.com',
    username: '/in/seuperfil',
  },
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:email@example.com',
    username: 'email@example.com',
  },
]

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const email = 'email@example.com'

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Section Header */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex-1 max-w-[100px] h-px bg-border" />
            <span className="font-mono text-primary text-sm">04.</span>
            <h2 className="text-3xl font-bold">Contato</h2>
            <div className="flex-1 max-w-[100px] h-px bg-border" />
          </div>

          {/* Content */}
          <div className="max-w-2xl mx-auto space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Estou sempre aberta a novas oportunidades e conversas sobre tecnologia.
              Se você tem um projeto interessante ou apenas quer trocar uma ideia,
              fique à vontade para entrar em contato!
            </p>

            {/* Email CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex flex-col sm:flex-row items-center gap-4"
            >
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                <Send size={18} />
                Enviar email
              </a>
              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-medium hover:bg-card transition-colors"
              >
                {copied ? (
                  <>
                    <Check size={18} className="text-green-500" />
                    <span className="text-green-500">Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy size={18} />
                    Copiar email
                  </>
                )}
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="pt-8"
            >
              <p className="text-sm text-muted-foreground mb-6">
                Ou me encontre nas redes
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target={link.name !== 'Email' ? '_blank' : undefined}
                    rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-3 px-5 py-3 rounded-lg border border-border bg-card/50 hover:border-primary/50 hover:bg-card transition-all group"
                  >
                    <link.icon size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
                    <div className="text-left">
                      <p className="text-sm font-medium text-foreground">{link.name}</p>
                      <p className="text-xs text-muted-foreground font-mono">{link.username}</p>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Terminal Command */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="pt-8"
            >
              <div className="code-block inline-flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-sm">
                <span className="text-muted-foreground">$</span>
                <span className="text-foreground">npm run contact</span>
                <span className="text-primary cursor-blink">_</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
