import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function PageTitle({ children }: Props) {
  return (
    <>
      <div className="flex items-center justify-center">
        <img src="/static/images/4pointstar.svg" className="h-7 w-7 justify-center" />
      </div>
      <h1 className="text-3xl leading-9 font-light tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 dark:text-gray-100">
        {children}
      </h1>
    </>
  )
}
