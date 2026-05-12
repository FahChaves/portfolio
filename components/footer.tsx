import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-8 px-6 lg:px-0 border-t border-border">
      <div className="max-w-4xl mx-auto">
        {/* Mobile social links */}
        <div className="flex justify-center gap-6 mb-6 sm:hidden">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:email@email.com"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* Credits */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground font-mono">
            Desenvolvido com{" "}
            <span className="text-primary">Next.js</span> &{" "}
            <span className="text-primary">Tailwind CSS</span>
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            © {new Date().getFullYear()} Fabiana Chaves. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
