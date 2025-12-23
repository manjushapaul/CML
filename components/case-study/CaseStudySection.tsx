'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface CaseStudySectionProps {
  title: string
  children: ReactNode
  className?: string
}

export function CaseStudySection({ title, children, className = '' }: CaseStudySectionProps) {
  return (
    <section className={`section-container bg-white ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12">{title}</h2>
        {children}
      </motion.div>
    </section>
  )
}





