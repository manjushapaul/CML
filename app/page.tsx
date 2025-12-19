import { HeroAntigravityStyle } from '@/components/HeroAntigravityStyle'
import { ProfileSection } from '@/components/ProfileSection'
import { Projects } from '@/components/Projects'
import { Services } from '@/components/Services'
import { Testimonials } from '@/components/Testimonials'
import { Contact } from '@/components/Contact'
import { BackToTop } from '@/components/BackToTop'

export default function Home() {
  return (
    <>
      <HeroAntigravityStyle />
      <Projects />
      <Services />
      <Testimonials />
      <ProfileSection />
      <Contact />
      <BackToTop />
    </>
  )
}
