"use client"

import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="px-6 md:px-12 lg:px-24 py-12 border-t border-border">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground"
      >
        <p>
          © {new Date().getFullYear()} Fabiana Chaves. Todos os direitos reservados.
        </p>
        <p className="font-mono text-xs">
          Feito com Next.js + Tailwind CSS
        </p>
      </motion.div>
    </footer>
  )
}
