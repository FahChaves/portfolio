"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Sobre", href: "#about" },
  // { label: "Experiência", href: "#experience" },
  // { label: "Projetos", href: "#projects" },
  { label: "Contato", href: "#contact" },
]

export function Navigation() {
  const [activeSection, setActiveSection] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = navItems.map((item) => item.href.replace("#", ""))
      const scrollPosition = window.scrollY + 100

      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : ""
      )}
    >
      <nav className="max-w-4xl mx-auto px-6 lg:px-0 py-4 flex items-center justify-between">
        <a href="#" className="font-mono text-primary font-semibold">
          {"<SN />"}
        </a>
        <ul className="hidden sm:flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  activeSection === item.href.replace("#", "")
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="/cv.pdf"
          className="text-sm font-medium px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Currículo
        </a>
      </nav>
    </header>
  )
}
