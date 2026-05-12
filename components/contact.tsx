import { Mail } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 lg:px-0">
      <div className="max-w-2xl mx-auto text-center">
        {/* Section header */}
        <span className="font-mono text-primary text-sm">04. E agora?</span>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-6">
          Vamos Conversar
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-8">
          Estou sempre aberta a novas oportunidades, projetos interessantes ou simplesmente 
          uma boa conversa sobre tecnologia. Se você quer discutir uma ideia, precisa de ajuda 
          com um projeto ou só quer trocar uma ideia, minha inbox está sempre aberta.
        </p>
        <a
          href="mailto:email@email.com"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
        >
          <Mail className="w-4 h-4" />
          Enviar Email
        </a>
      </div>
    </section>
  )
}
