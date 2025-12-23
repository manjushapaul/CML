import { render, screen } from '@testing-library/react'
import { ProfileSection } from '@/components/ProfileSection'
import { TEAM_MEMBERS } from '@/lib/constants'

describe('ProfileSection', () => {
  it('renders the section heading', () => {
    render(<ProfileSection />)
    expect(screen.getByText('Meet the team behind Code Meld Labs')).toBeInTheDocument()
    expect(screen.getByText(/Passionate developers and designers/)).toBeInTheDocument()
  })

  it('renders all team member cards', () => {
    render(<ProfileSection />)
    TEAM_MEMBERS.forEach((member) => {
      expect(screen.getByText(member.name)).toBeInTheDocument()
      expect(screen.getByText(member.role)).toBeInTheDocument()
      expect(screen.getByText(member.bio)).toBeInTheDocument()
    })
  })

  it('renders skills for each team member', () => {
    render(<ProfileSection />)
    TEAM_MEMBERS.forEach((member) => {
      if (member.skills) {
        member.skills.forEach((skill) => {
          expect(screen.getByText(skill)).toBeInTheDocument()
        })
      }
    })
  })

  it('has proper section id for navigation', () => {
    const { container } = render(<ProfileSection />)
    const section = container.querySelector('section#team')
    expect(section).toBeInTheDocument()
  })

  it('renders images with proper alt text', () => {
    render(<ProfileSection />)
    TEAM_MEMBERS.forEach((member) => {
      const image = screen.getByAltText(member.name)
      expect(image).toBeInTheDocument()
    })
  })

  it('applies responsive classes correctly', () => {
    const { container } = render(<ProfileSection />)
    const section = container.querySelector('section')
    expect(section).toHaveClass('py-16', 'sm:py-24')
    
    const heading = screen.getByText('Meet the team behind Code Meld Labs')
    expect(heading).toHaveClass('text-2xl', 'sm:text-3xl', 'md:text-4xl', 'lg:text-5xl')
  })
})




