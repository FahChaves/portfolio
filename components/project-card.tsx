import { TechBadge } from "./tech-badge"
import { ArrowUpRight, Github } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
}

export function ProjectCard({
  title,
  description,
  technologies,
  liveUrl,
  githubUrl,
}: ProjectCardProps) {
  return (
    <div className="group relative p-6 rounded-lg bg-card border border-border transition-all duration-300 hover:border-primary/40 hover:bg-card/80">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-medium text-foreground">{title}</h3>
        <div className="flex items-center gap-3">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label={`Ver código de ${title} no GitHub`}
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label={`Ver ${title} ao vivo`}
            >
              <ArrowUpRight className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mt-4">
        {technologies.map((tech) => (
          <TechBadge key={tech} name={tech} />
        ))}
      </div>
    </div>
  )
}
