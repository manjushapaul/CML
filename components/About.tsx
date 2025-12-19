'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { TEAM_MEMBERS } from '@/lib/constants'

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const shouldReduceMotion = useReducedMotion() ?? false
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextMember = () => {
    setCurrentIndex((prev) => (prev + 1) % TEAM_MEMBERS.length)
  }

  const prevMember = () => {
    setCurrentIndex((prev) => (prev - 1 + TEAM_MEMBERS.length) % TEAM_MEMBERS.length)
  }

  // Calculate slide offset for 1.5 slides visible
  const slideWidth = 100 / 1.5 // 66.67% per slide to show 1.5 slides
  const translateX = -currentIndex * slideWidth

  return (
    <section id="team" className="bg-white py-24 sm:py-32" ref={ref}>
      <div className="w-full mx-auto px-4 sm:px-0 lg:px-0">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
        >
          {/* Carousel Container */}
          <div className="relative">
            {/* Slides Wrapper */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(${translateX}%)`,
                }}
              >
                {TEAM_MEMBERS.map((member, index) => (
                  <div
                    key={member.name}
                    className="w-full sm:w-[66.67%] flex-shrink-0 px-3 sm:px-4 bg-gray-700"
                  >
                    <div className="space-y-6 max-w-md mx-auto">
                      {/* Image Card */}
                      <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, 66.67vw"
                        />
                        
                        {/* Role Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent p-6 sm:p-8">
                          <p className="text-white text-lg sm:text-xl font-medium">
                            {member.role}
                          </p>
                        </div>

                        {/* Optional Play Button Icon */}
                        <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                          <div className="w-0 h-0 border-l-[8px] border-l-white border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1" />
                        </div>
                      </div>

                      {/* Content Below Image */}
                      <div className="space-y-4">
                        {/* Member Name */}
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
                          {member.name}
                        </h2>

                        {/* Bio */}
                        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                          {member.bio}
                        </p>

                        {/* Skills Tags */}
                        <div className="flex flex-wrap gap-2 pt-2">
                          {member.skills.slice(0, 4).map((skill) => (
                            <span
                              key={skill}
                              className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-gray-100 text-gray-700 border border-gray-200"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-3 mt-8">
              <button
                onClick={prevMember}
                aria-label="Previous team member"
                className="p-2 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 hover:border-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={currentIndex === 0}
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              
              {/* Member Indicator Dots */}
              <div className="flex items-center gap-2">
                {TEAM_MEMBERS.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Go to team member ${index + 1}`}
                    className={`transition-all focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 rounded-full ${
                      index === currentIndex
                        ? 'bg-gray-900 w-8 h-2'
                        : 'bg-gray-300 w-2 h-2 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextMember}
                aria-label="Next team member"
                className="p-2 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 hover:border-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={currentIndex === TEAM_MEMBERS.length - 1}
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Trust Statement */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.4 }}
            className="mt-20 text-center max-w-3xl mx-auto"
          >
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Code Meld Labs is built for developer trust, whether you&apos;re a professional developer working in a large enterprise codebase, a startup founder building your MVP, or anyone in between.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
