'use client'

import { motion } from 'framer-motion'
import { Calendar, Code, User, Target } from 'lucide-react'
import { CaseStudyData } from '@/lib/case-studies/nexspot'

interface CaseStudyMetaProps {
  data: CaseStudyData
}

export function CaseStudyMeta({ data }: CaseStudyMetaProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8"
    >
      <h3 className="text-xl font-bold text-gray-900 mb-6">Project Overview</h3>
      
      <div className="space-y-6">
        {/* Timeline */}
        <div className="flex items-start gap-4">
          <div className="p-2 bg-gray-100 rounded-lg">
            <Calendar className="w-5 h-5 text-gray-700" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">Timeline</h4>
            <p className="text-gray-600">{data.overview.stats.timeline}</p>
          </div>
        </div>

        {/* Stack */}
        <div className="flex items-start gap-4">
          <div className="p-2 bg-gray-100 rounded-lg">
            <Code className="w-5 h-5 text-gray-700" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">Tech Stack</h4>
            <div className="flex flex-wrap gap-2 mt-2">
              {data.overview.stats.stack.map((tech, index) => (
                <span
                  key={index}
                  className="px-2.5 py-1 text-xs font-medium text-gray-700 bg-gray-50 rounded-md border border-gray-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Role */}
        <div className="flex items-start gap-4">
          <div className="p-2 bg-gray-100 rounded-lg">
            <User className="w-5 h-5 text-gray-700" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">Role</h4>
            <p className="text-gray-600">{data.overview.stats.role}</p>
          </div>
        </div>

        {/* Outcomes */}
        <div className="flex items-start gap-4">
          <div className="p-2 bg-gray-100 rounded-lg">
            <Target className="w-5 h-5 text-gray-700" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">Key Outcomes</h4>
            <ul className="space-y-1.5 mt-2">
              {data.overview.stats.outcomes.map((outcome, index) => (
                <li key={index} className="text-gray-600 text-sm flex items-start gap-2">
                  <span className="text-gray-400 mt-1.5">•</span>
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  )
}





