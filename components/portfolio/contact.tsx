"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react"

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com",
    icon: Github,
    username: "@seuusuario"
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/",
    icon: Linkedin,
    username: "/in/seuusuario"
  },
  {
    name: "Email",
    href: "mailto:seu@email.com",
    icon: Mail,
    username: "seu@email.com"
  },
]

export function Contact() {
  return (
    <section id="contato" className="px-6 md:px-12 lg:px-24 py-24 border-t border-border">
      <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm font-medium tracking-widest uppercase text-muted-foreground sticky top-24">
            Contato
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-8"
        >
          <p className="text-lg md:text-xl text-foreground leading-relaxed max-w-xl">
            Interessado em conversar sobre um projeto ou oportunidade? 
            Estou sempre aberta a novas conexões e desafios.
          </p>

          <div className="space-y-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-4 border-b border-border hover:border-primary transition-colors"
              >
                <div className="flex items-center gap-4">
                  <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="text-foreground group-hover:text-primary transition-colors font-medium">
                    {link.name}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground font-mono hidden sm:block">
                    {link.username}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
