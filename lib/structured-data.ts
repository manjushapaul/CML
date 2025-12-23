import { SITE_CONFIG, TEAM_MEMBERS } from './constants'

export const getOrganizationStructuredData = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_CONFIG.name,
  description: SITE_CONFIG.tagline,
  url: 'https://code-meld-labs.vercel.app',
  logo: 'https://code-meld-labs.vercel.app/logo.png',
  email: SITE_CONFIG.email,
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: SITE_CONFIG.upwork.rating,
    reviewCount: '10',
  },
  sameAs: [
    SITE_CONFIG.social.github,
    SITE_CONFIG.social.linkedin,
    SITE_CONFIG.social.upwork,
  ],
})

export const getPersonStructuredData = (member: typeof TEAM_MEMBERS[0]) => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: member.name,
  jobTitle: member.role,
  description: member.bio,
  url: member.github,
  worksFor: {
    '@type': 'Organization',
    name: SITE_CONFIG.name,
  },
})






