interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Sample',
    description: `Sample`,
    imgSrc: '/static/images/avatar.png',
    href: 'https://www.google.com',
  },
  {
    title: 'Sample',
    description: `Sample`,
    imgSrc: '/static/images/avatar.png',
    href: '/blog/projects/sample',
  },
]

export default projectsData
