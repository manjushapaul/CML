'use client'

import { useState, useEffect, useRef } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { SITE_CONFIG } from '@/lib/constants'

const caseStudies = [
  { href: '/case-studies/chatbot', label: 'AI Chatbot SaaS Platform' },
  { href: '/case-studies/crypto', label: 'TIXXTIXX - Crypto Trading Dashboard' },
  { href: '/case-studies/nexspot', label: 'NexSpot' },
  { href: '/case-studies/nexcent', label: 'Nexcent - Business Growth Solutions' },
  { href: '/case-studies/pontoon', label: 'Pontoon Sports' },
  { href: '/case-studies/psychicoz', label: 'PsychicOz - Online Psychic Reading Platform' },
  { href: '/case-studies/psychicoz-mob', label: 'PsychicOz - Mobile Application' },
  { href: '/case-studies/peak-group', label: 'Peak Group - Job Management System' },
]

const navLinks = [
  { href: '#team', label: 'Team' },
  { href: '#projects', label: 'Projects' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isCaseStudiesOpen, setIsCaseStudiesOpen] = useState(false)
  const [isMobileCaseStudiesOpen, setIsMobileCaseStudiesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle hash scrolling when navigating from other pages
  useEffect(() => {
    if (pathname === '/' && window.location.hash) {
      // Wait for page to fully render, then scroll to hash
      const hash = window.location.hash
      const scrollToHash = () => {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
      
      // Try immediately
      scrollToHash()
      
      // Also try after a short delay in case elements aren't rendered yet
      const timeoutId = setTimeout(scrollToHash, 300)
      
      return () => clearTimeout(timeoutId)
    }
  }, [pathname])

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!isCaseStudiesOpen) return

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      
      // Don't close if clicking inside the dropdown
      if (dropdownRef.current?.contains(target as Node)) {
        return
      }
      
      // Close if clicking outside - nav items will close it themselves via their onClick handlers
      setIsCaseStudiesOpen(false)
    }

    // Use a longer delay to ensure all other click handlers fire first
    // Don't use capture phase - let normal event flow happen first
    const timeoutId = setTimeout(() => {
      document.addEventListener('click', handleClickOutside)
    }, 250)

    return () => {
      clearTimeout(timeoutId)
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isCaseStudiesOpen])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Only prevent default for hash links (same page anchors)
    if (href.startsWith('#')) {
      e.preventDefault()
      setIsOpen(false)
      setIsCaseStudiesOpen(false)
      
      // Check if we're on the home page
      if (pathname === '/') {
        // On home page - just scroll to the section
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      } else {
        // Not on home page - navigate to home page with hash
        router.push(`/${href}`)
        // Scroll after navigation completes
        // Using a longer timeout to ensure page is loaded
        setTimeout(() => {
          const element = document.querySelector(href)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
          } else {
            // If element not found, try again after a bit more delay
            setTimeout(() => {
              const retryElement = document.querySelector(href)
              if (retryElement) {
                retryElement.scrollIntoView({ behavior: 'smooth' })
              }
            }, 200)
          }
        }, 300)
      }
    } else {
      // For regular links, just close mobile menu
      setIsOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-gray-200/50'
          : 'bg-white/60 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Left */}
          <Link
            href="/"
            className="flex items-center h-12"
          >
            <Image
              src="/images/cmllogo.svg"
              alt={SITE_CONFIG.name}
              width={140}
              height={52}
              className="w-[140px] h-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation - Center/Right */}
          <div className="hidden md:flex items-center space-x-10 relative z-50">
            {navLinks.slice(0, 3).map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  // Close dropdown first
                  setIsCaseStudiesOpen(false)
                  // Then handle the nav click
                  handleNavClick(e, link.href)
                }}
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm font-medium relative z-[60]"
              >
                {link.label}
              </a>
            ))}
            
            {/* Case Studies Dropdown */}
            <div 
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setIsCaseStudiesOpen(true)}
              onMouseLeave={() => setIsCaseStudiesOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm font-medium"
                onClick={(e) => {
                  e.stopPropagation()
                  setIsCaseStudiesOpen(!isCaseStudiesOpen)
                }}
              >
                Case Studies
                <ChevronDown 
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isCaseStudiesOpen ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              {/* Dropdown Menu */}
              <div 
                className={`absolute top-full left-1/2 transform -translate-x-1/2 pt-3 w-72 z-50 transition-all duration-200 ease-out ${
                  isCaseStudiesOpen 
                    ? 'opacity-100 translate-y-0 pointer-events-auto visible' 
                    : 'opacity-0 -translate-y-2 pointer-events-none invisible'
                }`}
                onMouseEnter={() => setIsCaseStudiesOpen(true)}
                onMouseLeave={() => setIsCaseStudiesOpen(false)}
                onMouseDown={(e) => {
                  // Prevent dropdown clicks from propagating
                  e.stopPropagation()
                }}
                onClick={(e) => {
                  // Allow clicks inside dropdown to work normally
                  e.stopPropagation()
                }}
                style={{ pointerEvents: isCaseStudiesOpen ? 'auto' : 'none' }}
              >
                {/* Invisible bridge to prevent gap issues */}
                <div className="h-3 pointer-events-none"></div>
                
                {/* Actual dropdown content */}
                <div className="bg-white rounded-xl shadow-2xl border border-gray-200/50 py-2">
                  {/* Arrow */}
                  <div className="absolute top-1.5 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white border-l border-t border-gray-200/50 rotate-45"></div>
                  
                  {caseStudies.map((study) => (
                    <Link
                      key={study.href}
                      href={study.href}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-150 border-b border-gray-100 last:border-b-0 first:pt-3"
                      onClick={(e) => {
                        e.stopPropagation()
                        setIsCaseStudiesOpen(false)
                      }}
                    >
                      <span className="font-medium">{study.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <a
              href="#contact"
              onClick={(e) => {
                // Close dropdown first
                setIsCaseStudiesOpen(false)
                // Then handle the nav click
                handleNavClick(e, '#contact')
              }}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm font-medium relative z-[60]"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-6 py-4 space-y-3">
            {navLinks.slice(0, 3).map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block py-2 text-gray-600 hover:text-gray-900 transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            
            {/* Mobile Case Studies Dropdown */}
            <div className="border-t border-gray-200 pt-3 mt-3">
              <button
                onClick={() => setIsMobileCaseStudiesOpen(!isMobileCaseStudiesOpen)}
                className="flex items-center justify-between w-full py-2 text-gray-600 hover:text-gray-900 transition-colors font-medium"
              >
                Case Studies
                <ChevronDown 
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isMobileCaseStudiesOpen ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              {isMobileCaseStudiesOpen && (
                <div className="mt-2 ml-4 space-y-1 border-l-2 border-gray-200 pl-4 transition-all duration-200">
                  {caseStudies.map((study) => (
                    <Link
                      key={study.href}
                      href={study.href}
                      onClick={() => {
                        setIsMobileCaseStudiesOpen(false)
                        setIsOpen(false)
                      }}
                      className="block py-2 px-3 rounded-lg text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                    >
                      {study.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="block py-2 text-gray-600 hover:text-gray-900 transition-colors font-medium border-t border-gray-200 pt-3 mt-3"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
