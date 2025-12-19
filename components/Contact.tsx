'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, FormEvent } from 'react'
import { Mail, User, MessageSquare, Send, CheckCircle2 } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'

export function Contact() {
  const ref = useRef(null)
  const formRef = useRef<HTMLFormElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess(false)

    if (!formRef.current) return

    try {
      const formData = new FormData(formRef.current)
      const name = formData.get('name') as string
      const email = formData.get('email') as string
      const message = formData.get('message') as string

      // Send email via API route
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      })

      const data = await response.json()

      if (!response.ok) {
        // Show the actual error message from the API
        const errorMsg = data.error || 'Failed to send message'
        throw new Error(errorMsg)
      }

      // Success
      setSuccess(true)
      if (formRef.current) {
        formRef.current.reset()
      }
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSuccess(false)
      }, 5000)
    } catch (err) {
      // Show user-friendly error message
      let errorMessage = 'Failed to send message. Please try again.'
      if (err instanceof Error) {
        errorMessage = err.message
        // If it's a configuration error, use mailto fallback
        if (err.message.includes('not configured') || err.message.includes('Email service')) {
          // Use mailto as fallback
          const formData = new FormData(formRef.current!)
          const name = formData.get('name') as string
          const email = formData.get('email') as string
          const message = formData.get('message') as string
          
          const subject = encodeURIComponent(`Contact Form: ${name}`)
          const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)
          const mailtoLink = `mailto:${SITE_CONFIG.email}?subject=${subject}&body=${body}`
          
          window.location.href = mailtoLink
          setError('Email service not configured. Opening your email client...')
          setTimeout(() => {
            setError('')
          }, 3000)
          setLoading(false)
          return
        }
      }
      setError(errorMessage)
      console.error('Contact form error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="section-container bg-gray-50 max-w-full px-4 sm:px-6 lg:px-8" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s discuss how we can help bring your ideas to life
          </p>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Let&apos;s Connect</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
                We&apos;re always excited to take on new challenges and collaborate on innovative projects.
                Reach out to discuss your next big idea!
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-100 rounded-lg">
                    <Mail className="w-6 h-6 text-slate-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="text-gray-600 hover:text-slate-900 transition-colors"
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-100 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-slate-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Response Time</h4>
                    <p className="text-gray-600">
                      Within 24 hours on business days
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-semibold mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  <a
                    href={SITE_CONFIG.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 rounded-lg hover:bg-slate-900 hover:text-white transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href={SITE_CONFIG.social.upwork}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 rounded-lg hover:bg-slate-900 hover:text-white transition-colors"
                  >
                    Upwork
                  </a>
                  <a
                    href={SITE_CONFIG.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 rounded-lg hover:bg-slate-900 hover:text-white transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full pl-11 pr-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-slate-400 focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full pl-11 pr-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-slate-400 focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Your Message
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full pl-11 pr-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white rounded-lg px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>

                {/* Success/Error Messages */}
                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm"
                  >
                    Message sent successfully! We&apos;ll get back to you soon.
                  </motion.div>
                )}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm"
                  >
                    {error}
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
