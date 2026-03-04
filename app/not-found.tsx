import Link from '@/components/Link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-start justify-start md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6">
      <div className="space-x-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-6xl leading-9 font-extrabold tracking-tight text-gray-900 md:border-r-2 md:px-6 md:text-8xl md:leading-14 dark:text-gray-100">
          404
        </h1>
      </div>
      <div className="max-w-md">
        <p className="mb-4 text-xl leading-normal font-light md:text-2xl">Content not found.</p>
        <p className="mb-8">
          Or is it? Because I know because you pushed that girl in a well 5 summers ago. You thought
          no one saw you, because you were on vacation and that family thing was happening. And,
          damn - if you didn&apos;t have enough on your plate. But that&apos;s the problem, you love
          the stress you bring upon yourself. You know that you&apos;re not ready to face your wife,
          and to own up to your mistake at Cornell. The one you know plays in her eyes every
          Christmas. The guilt is a song you will never forget, but you&apos;re not ever able to
          sing a note out loud. Anyways, that&apos;s why you can&apos;t find the page you&apos;re
          looking for.
        </p>
        <Link
          href="/"
          className="focus:shadow-outline-blue inline rounded-lg border border-transparent bg-blue-600 px-4 py-2 text-sm leading-5 font-medium text-white shadow-xs transition-colors duration-150 hover:bg-blue-700 focus:outline-hidden dark:hover:bg-blue-500"
        >
          Back to amandakind
        </Link>
      </div>
    </div>
  )
}
