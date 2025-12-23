import { render, screen } from '@testing-library/react'
import { ProfileCard } from '@/components/ProfileCard'
import { TEAM_MEMBERS } from '@/lib/constants'

describe('ProfileCard', () => {
  it('renders the first team member profile', () => {
    render(<ProfileCard />)
    const firstMember = TEAM_MEMBERS[0]
    expect(screen.getByText(firstMember.name)).toBeInTheDocument()
    expect(screen.getByText(firstMember.role)).toBeInTheDocument()
    expect(screen.getByText(firstMember.bio)).toBeInTheDocument()
  })

  it('renders all skills for the profile', () => {
    render(<ProfileCard />)
    const firstMember = TEAM_MEMBERS[0]
    if (firstMember.skills) {
      firstMember.skills.forEach((skill) => {
        expect(screen.getByText(skill)).toBeInTheDocument()
      })
    }
  })

  it('renders image with proper alt text', () => {
    render(<ProfileCard />)
    const firstMember = TEAM_MEMBERS[0]
    const image = screen.getByAltText(firstMember.name)
    expect(image).toBeInTheDocument()
  })

  it('applies responsive height classes', () => {
    const { container } = render(<ProfileCard />)
    const cardContainer = container.querySelector('.relative.w-full')
    expect(cardContainer).toHaveClass('h-[500px]', 'sm:h-[550px]', 'md:h-[600px]')
  })

  it('has proper border styling', () => {
    const { container } = render(<ProfileCard />)
    const card = container.querySelector('.rounded-2xl')
    expect(card).toHaveStyle({ border: '10px solid #E5E7EB' })
  })
})




