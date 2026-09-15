interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Software of Care [2026]',
    description: `Software of Care is my unreleased book about how to invent and operate social good software for the public.`,
    imgSrc: '/static/images/work/software of care.png',
    href: '/blog/projects/software_of_care',
  },
  {
    title: 'Composable Assessments [2025]',
    description: `Composable assessment is a framework I built for Faura to make flexible and standardized assessments for natural disaster survivability.`,
    imgSrc: '/static/images/work/home resilience program.png',
    href: '/blog/projects/property_self_assessment',
  },
  {
    title: 'Home Resilience Program [2025]',
    description: `A drip program launched at Faura to inform homeowners of the risk of their building, and to incentivize them to complete mitigation work.`,
    imgSrc: '/static/images/work/home resilience program.png',
    href: '/blog/projects/hrp',
  },
  {
    title: 'Everine [2023]',
    description: `Everine is a web app that shows free and remote non-profit resources to manage the hardest things in your life.`,
    imgSrc: '/static/images/work/everine.png',
    href: '/blog/projects/everine',
  },
  {
    title: 'Faura [2023]',
    description: `Faura is a company I cofounded and am the CTO of to measure and incentivize the resilience of buildings to natural disasters.`,
    imgSrc: '/static/images/work/faura.png',
    href: '/blog/projects/faura',
  },
  {
    title: 'Tiny Home [2021]',
    description: `I built a tiny house out of a 1975 vintage jail trailer.`,
    imgSrc: '/static/images/work/tiny house.png',
    href: '/blog/projects/tiny_house',
  },
  {
    title: 'Aureus [2021]',
    description: `An open-source design system for non-profits to quickly develop user safety critical applications.`,
    imgSrc: '/static/images/work/aureus.png',
    href: '/blog/projects/aureus',
  },
  {
    title: 'Aetheria [2020]',
    description: `Aetheria was an app designed to help people experiencing severe and acute mental illness.`,
    imgSrc: '/static/images/work/aetheria.png',
    href: '/blog/projects/aetheria',
  },
  {
    title: 'Isolated Not Alone [2020]',
    description: `Isolated Not Alone was an Astra project and coalition to provide free resources to first responders during COVID.`,
    imgSrc: '/static/images/work/isolated-not-alone.png',
    href: '/blog/projects/isolated_not_alone',
  },
  {
    title: 'Astra Labs [2018]',
    description: `Astra Labs was a non-profit I ran from 2018 - 2024 to build software that served people in the hardest parts of their lives.`,
    imgSrc: '/static/images/work/astra-labs.png',
    href: '/blog/projects/astralabs',
  },
  {
    title: 'Verena [2016]',
    description: `Verena was an app designed to be a hidden security system for people in dangerous situations.`,
    imgSrc: '/static/images/work/verena.png',
    href: '/blog/projects/verena',
  },
  {
    title: 'AnxietyHelper [2015]',
    description: `AnxietyHelper was my first app designed to be a mental health guidebook for anyone.`,
    imgSrc: '/static/images/work/anxietyhelper.png',
    href: '/blog/projects/anxietyhelper',
  },
  {
    title: 'Oenone [Unreleased]',
    description: `Oenone is an app being designed to triage and provide care to homeless patients for non-profit street medicine providers.`,
    imgSrc: '/static/images/lightmode.bg.png',
    href: '/blog/projects/oenone',
  },
  {
    title: 'Seon [Unreleased]',
    description: `Seon was an unreleased app meant to help people manage their long-term disabilities independently.`,
    imgSrc: '/static/images/lightmode.bg.png',
    href: '/blog/projects/seon',
  },
  {
    title: 'Emra [Unreleased]',
    description: `Emra was an unreleased app meant to auto-generate natural disaster evacuation plans for families.`,
    imgSrc: '/static/images/lightmode.bg.png',
    href: '/blog/projects/seon',
  },
]

export default projectsData
