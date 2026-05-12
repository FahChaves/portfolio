import { Github, Linkedin, Mail } from "lucide-react"

export function SocialSidebar() {
  return (
    <>
      {/* Left sidebar - social links */}
      <div className="fixed left-6 bottom-0 hidden sm:flex flex-col items-center gap-6">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all"
          aria-label="GitHub"
        >
          <Github className="w-5 h-5" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a
          href="mailto:email@email.com"
          className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all"
          aria-label="Email"
        >
          <Mail className="w-5 h-5" />
        </a>
        <div className="w-px h-24 bg-border" />
      </div>

      {/* Right sidebar - email */}
      <div className="fixed right-6 bottom-0 hidden lg:flex flex-col items-center gap-6">
        <a
          href="mailto:email@email.com"
          className="text-muted-foreground hover:text-primary transition-colors font-mono text-xs tracking-wider"
          style={{ writingMode: "vertical-rl" }}
        >
          email@email.com
        </a>
        <div className="w-px h-24 bg-border" />
      </div>
    </>
  )
}
