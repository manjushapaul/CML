/**
 * Responsive Design Tests
 * Tests that components are responsive across different screen sizes
 */

import { render } from '@testing-library/react'
import { ProfileSection } from '@/components/ProfileSection'
import { ProfileCard } from '@/components/ProfileCard'

describe('Responsive Design Tests', () => {
  describe('ProfileSection Responsiveness', () => {
    it('has responsive padding classes', () => {
      const { container } = render(<ProfileSection />)
      const section = container.querySelector('section')
      expect(section).toHaveClass('py-16', 'sm:py-24')
    })

    it('has responsive container padding', () => {
      const { container } = render(<ProfileSection />)
      const innerDiv = container.querySelector('.max-w-7xl')
      expect(innerDiv).toHaveClass('px-4', 'sm:px-6', 'lg:px-8')
    })

    it('has responsive heading sizes', () => {
      const { container } = render(<ProfileSection />)
      const heading = container.querySelector('h2')
      expect(heading).toHaveClass(
        'text-2xl',
        'sm:text-3xl',
        'md:text-4xl',
        'lg:text-5xl'
      )
    })

    it('has responsive gap spacing for cards', () => {
      const { container } = render(<ProfileSection />)
      const cardsContainer = container.querySelector('.flex.flex-wrap')
      expect(cardsContainer).toHaveClass('gap-6', 'sm:gap-8', 'lg:gap-10')
    })
  })

  describe('ProfileCard Responsiveness', () => {
    it('has responsive height classes', () => {
      const { container } = render(<ProfileCard />)
      const cardContainer = container.querySelector('.relative.w-full')
      expect(cardContainer).toHaveClass(
        'h-[500px]',
        'sm:h-[550px]',
        'md:h-[600px]'
      )
    })

    it('has responsive padding for content', () => {
      const { container } = render(<ProfileCard />)
      const contentContainer = container.querySelector('.relative.z-10')
      expect(contentContainer).toHaveClass('p-4', 'sm:p-6')
    })

    it('has responsive text sizes', () => {
      const { container } = render(<ProfileCard />)
      const nameHeading = container.querySelector('h3')
      expect(nameHeading).toHaveClass('text-xl', 'sm:text-2xl')
    })

    it('has responsive border width', () => {
      const { container } = render(<ProfileCard />)
      const card = container.querySelector('.rounded-2xl')
      // Border is set via inline style, check it exists
      expect(card).toHaveStyle({ border: expect.stringContaining('solid') })
    })
  })

  describe('Mobile-First Approach', () => {
    it('cards stack vertically on mobile', () => {
      const { container } = render(<ProfileSection />)
      const cardsContainer = container.querySelector('.flex.flex-wrap')
      expect(cardsContainer).toHaveClass('flex', 'flex-wrap', 'justify-center')
    })

    it('cards have max width constraint', () => {
      const { container } = render(<ProfileCard />)
      const cardWrapper = container.querySelector('.max-w-md')
      expect(cardWrapper).toBeInTheDocument()
    })
  })
})




