'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PROJECTS } from '@/lib/constants'

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="projects" className="section-container bg-white px-4 sm:px-6 lg:px-8" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Recent Projects</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Showcase of our recent work across Next.js, PHP, and AI development
          </p>
        </div>

        {/* Projects Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-2 sm:gap-3">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="project-card group relative mb-2 sm:mb-3 break-inside-avoid overflow-hidden rounded-xl cursor-pointer"
            >
              <Link 
                href={
                  project.id === 1 
                    ? '/case-studies/nexspot' 
                    : project.id === 2
                    ? '/case-studies/crypto'
                    : project.id === 3
                    ? '/case-studies/chatbot'
                    : project.id === 4 
                    ? '/case-studies/pontoon'
                    : project.id === 5
                    ? '/case-studies/nexcent'
                    : project.id === 6
                    ? '/case-studies/psychicoz-mob'
                    : project.id === 7
                    ? '/case-studies/psychicoz'
                    : project.id === 8
                    ? '/case-studies/peak-group'
                    : `/projects/${project.id}`
                } 
                className="block w-full relative"
              >
                {/* Background Image - Natural Height for Masonry */}
                <div className={`relative w-full bg-gray-100 rounded-xl overflow-hidden ${project.id === 6 ? 'max-h-[400px]' : ''}`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={2000}
                    height={1500}
                    className={`w-full ${project.id === 6 ? 'h-full object-cover' : 'h-auto object-contain'} group-hover:scale-105 transition-transform duration-500`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  
                  {/* Dark Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 pointer-events-none" />

                  {/* Project Name - Appears on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-white text-center px-4">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
