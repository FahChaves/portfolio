import { cn } from "@/lib/utils"

interface TechBadgeProps {
  name: string
  className?: string
}

export function TechBadge({ name, className }: TechBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-full",
        "bg-primary/10 text-primary border border-primary/20",
        "transition-all duration-300 hover:bg-primary/20 hover:border-primary/40",
        className
      )}
    >
      {name}
    </span>
  )
}
