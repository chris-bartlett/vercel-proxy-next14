import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="container max-w-2xl py-16">
        <h1 className="text-3xl font-semibold mb-4">Next.js 14 (Pages Router) Home</h1>
        <p className="text-gray-600 mb-6">
          This is the homepage of the Next.js 14 project using the Pages Router. The route
          {' '}
          <code className="px-1 py-0.5 bg-gray-100 rounded">/my-test-route/123</code>
          {' '}is reverse proxied to the Next.js 15 project via Vercel rewrites.
        </p>
        <div className="flex gap-3">
          <Link
            href="/my-test-route/123"
            className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-white hover:bg-gray-800"
          >
            Go to /my-test-route/123
          </Link>
        </div>
      </div>
    </main>
  )
}
