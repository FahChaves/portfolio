"use client"

import { useEffect, useState } from "react"
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"

const roles = [
  "Desenvolvedora Backend",
  "Fullstack Developer", 
  "Engenheira de Software",
  "Arquiteta de Sistemas",
]

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const role = roles[currentRole]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentRole((prev) => (prev + 1) % roles.length)
          }
        }
      },
      isDeleting ? 50 : 100
    )
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRole])

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 lg:px-0">
      <div className="max-w-4xl mx-auto w-full">
        {/* Terminal-style greeting */}
        <div className="mb-6 font-mono text-sm text-muted-foreground">
          <span className="text-primary">$</span> whoami
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4">
          Chiquinha DEV
        </h1>

        {/* Animated role */}
        <div className="h-10 mb-6">
          <span className="text-xl sm:text-2xl lg:text-3xl text-primary font-mono">
            {displayText}
            <span className="animate-pulse">|</span>
          </span>
        </div>

        {/* Description */}
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed mb-8">
          Construo sistemas robustos e escaláveis. Apaixonada por arquitetura de software, 
          APIs bem desenhadas e performance. Quando não estou codando, provavelmente estou 
          explorando novas tecnologias ou contribuindo para projetos open source.
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-4 mb-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-secondary hover:bg-secondary/80 text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-secondary hover:bg-secondary/80 text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:email@email.com"
            className="p-3 rounded-lg bg-secondary hover:bg-secondary/80 text-foreground transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="flex items-center gap-2 text-muted-foreground text-sm font-mono">
          <ArrowDown className="w-4 h-4 animate-bounce" />
          <span>role para explorar</span>
        </div>
      </div>
    </section>
  )
}
