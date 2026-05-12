import { Github, Linkedin, Mail } from "lucide-react"

const links = [
  {
    name: "GitHub",
    href: "https://github.com",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: Linkedin,
  },
  {
    name: "Email",
    href: "mailto:seu@email.com",
    icon: Mail,
  },
]

export function SocialLinks() {
  return (
    <div className="flex items-center gap-5">
      {links.map(({ name, href, icon: Icon }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors duration-300"
          aria-label={name}
        >
          <Icon className="w-5 h-5" />
        </a>
      ))}
    </div>
  )
}
