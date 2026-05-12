import { TechBadge } from "./tech-badge"
import { ArrowUpRight } from "lucide-react"

interface ExperienceCardProps {
  period: string
  title: string
  company: string
  companyUrl?: string
  description: string
  technologies: string[]
}

export function ExperienceCard({
  period,
  title,
  company,
  companyUrl,
  description,
  technologies,
}: ExperienceCardProps) {
  return (
    <div className="group relative grid sm:grid-cols-8 gap-4 py-6 transition-all duration-300 hover:bg-card/50 rounded-lg px-4 -mx-4">
      <header className="sm:col-span-2 text-xs font-medium text-muted-foreground uppercase tracking-wide pt-1">
        {period}
      </header>
      <div className="sm:col-span-6">
        <h3 className="font-medium text-foreground leading-tight">
          {title} ·{" "}
          {companyUrl ? (
            <a
              href={companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary hover:underline underline-offset-4"
            >
              {company}
              <ArrowUpRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          ) : (
            <span className="text-primary">{company}</span>
          )}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {technologies.map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
        </div>
      </div>
    </div>
  )
}
