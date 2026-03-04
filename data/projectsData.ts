interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Aetheria',
    description: `Aetheria was an app released in 2020 designed to help people experiencing severe and acute mental illness. `,
    imgSrc: '/static/images/avatar.png',
    href: '/blog/projects/aetheria',
  },
  {
    title: 'AnxietyHelper',
    description: `AnxietyHelper was my first app, released in 2015 designed to be a mental health guidebook for anyone.`,
    imgSrc: '/static/images/avatar.png',
    href: '/blog/projects/anxietyhelper',
  },
  {
    title: 'Aureus',
    description: `An open-source design system for non-profits to quickly develop user safety critical applications started in 2022.`,
    imgSrc: '/static/images/avatar.png',
    href: '/blog/projects/aureus',
  },
  {
    title: 'Everine',
    description: `Everine is a web app released in 2023 that shows free and remote non-profit resources to manage the hardest things in your life.`,
    imgSrc: '/static/images/avatar.png',
    href: '/blog/projects/everine',
  },
  {
    title: '3rd Party Writing',
    description: `All of my writing and media work I've done for companies that aren't mine.`,
    imgSrc: '/static/images/avatar.png',
    href: '/blog/projects/external_writings',
  },
  {
    title: 'Faura',
    description: `Faura is a company I cofounded in 2022 to measure and incentivize the resilience of buildings to natural disasters.`,
    imgSrc: '/static/images/avatar.png',
    href: '/blog/projects/faura',
  },
  {
    title: 'Astra Labs',
    description: `Astra Labs was a non-profit I ran from 2018 - 2024 that build software that served people in the hardest parts of their lives.`,
    imgSrc: '/static/images/avatar.png',
    href: '/blog/projects/astralabs',
  },
  {
    title: 'Isolated Not Alone',
    description: `Isolated Not Alone was an Astra project and coalition launched in 2020 to provide free resources to first responders during COVID.`,
    imgSrc: '/static/images/avatar.png',
    href: '/blog/projects/isolated_not_alone',
  },
  {
    title: 'Seon',
    description: `Seon was an unreleased app meant to help people manage their long-term disabilities independently.`,
    imgSrc: '/static/images/avatar.png',
    href: '/blog/projects/seon',
  },
  {
    title: 'Verena',
    description: `Verena was an app released in 2016 designed to be a hidden security system for people in dangerous situations.`,
    imgSrc: '/static/images/avatar.png',
    href: '/blog/projects/aetheria',
  },
  {
    title: 'Tiny Home',
    description: `I built a tiny house out of a 1975 vintage jail trailer for $20k in 2022.`,
    imgSrc: '/static/images/avatar.png',
    href: '/blog/projects/tiny_house',
  },
  {
    title: 'Composable Assessments',
    description: `Composable assessment a framework I built for Faura in 2025 enabled to make flexible and standardized assessments for natural disaster survivability.`,
    imgSrc: '/static/images/avatar.png',
    href: '/blog/projects/property_self_assessment',
  },
  {
    title: 'Mentorship / Advisory',
    description: `Other projects that I've helped out on from a mentorship or advisory perspective.`,
    imgSrc: '/static/images/avatar.png',
    href: '/blog/projects/mentorship',
  },
  {
    title: 'Home Resilience Program',
    description: `A program launched at Faura in 2026 helped build at Faura to inform homeowners of the risk of their building, and to incentivize them to complete mitigation work.`,
    imgSrc: '/static/images/avatar.png',
    href: '/blog/projects/hrp',
  },
]

export default projectsData
