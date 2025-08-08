import Link from "next/link"

export default function MyTestRoute123() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <article className="container max-w-3xl py-16">
        <h1 className="text-3xl font-semibold mb-4">/my-test-route/123 (Local Page)</h1>
        <div className="prose max-w-none">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut magna
            nulla. Cras at dictum nunc, vitae interdum massa. Mauris condimentum, est id
            malesuada aliquet, mauris nisl vulputate sapien, et pulvinar urna risus nec
            lectus. Donec vulputate lectus fringilla, pharetra dui eu, sollicitudin
            felis. Vestibulum et volutpat tortor. Nulla facilisi. In hac habitasse
            platea dictumst.
          </p>
          <p>
            Curabitur sed mauris posuere, iaculis turpis at, pharetra neque. Nulla
            imperdiet eros ac ipsum interdum, id imperdiet ante facilisis. Sed id nisl
            id metus faucibus posuere. Suspendisse lacinia, justo at eleifend
            sollicitudin, augue ipsum vehicula velit, non cursus lacus arcu ac turpis.
            Praesent venenatis, mi in elementum porttitor, nibh enim posuere justo, a
            gravida turpis mi id mi.
          </p>
          <p>
            Quisque posuere lacus id nunc pharetra, a posuere magna fermentum. Morbi
            blandit, dolor non finibus finibus, nibh nisl gravida lacus, vel ultricies
            augue velit vitae velit. Fusce laoreet, nunc sit amet convallis iaculis,
            lorem sem cursus est, a cursus risus lacus quis urna.
          </p>
        </div>

        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-white hover:bg-gray-800"
          >
            Back to Home
          </Link>
        </div>
      </article>
    </main>
  )
}
