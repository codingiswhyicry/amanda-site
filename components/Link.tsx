/* eslint-disable jsx-a11y/anchor-has-content */
import Link from 'next/link'
import type { LinkProps } from 'next/link'
import { AnchorHTMLAttributes } from 'react'

const CustomLink = ({ href, ...rest }: LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')

  if (isInternalLink) {
    return <Link className="break-words" href={href} {...rest} />
  }

  if (isAnchorLink) {
    return (
      <>
        <div className="justify-left flex items-center">
          <img src="/static/images/4pointstar.svg" className="h-3 w-3 justify-center" />
        </div>
        return <a className="break-words" href={href} {...rest} />
      </>
    )
  }

  return (
    <>
      <div className="justify-left flex items-center">
        <img src="/static/images/4pointstar.svg" className="h-3 w-3 justify-center" />
      </div>
      <a className="break-words" target="_blank" rel="noopener noreferrer" href={href} {...rest} />
    </>
  )
}

export default CustomLink
