interface SkillCategoryProps {
  title: string
  skills: string[]
}

export function SkillCategory({ title, skills }: SkillCategoryProps) {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-medium text-foreground">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1.5 text-xs font-mono bg-secondary text-secondary-foreground rounded border border-border hover:border-primary/40 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}
