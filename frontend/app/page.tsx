import Image from 'next/image'
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <Navbar />

      <div className="relative flex place-items-center p-24">
        <Image
          className="relative hover:dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/dog_with_owner.png"
          alt="Dog and Owner"
          width={256}
          height={256}
          priority
          // image source: https://www.flaticon.com
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-center">
        <a
          href="/shelters"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-yellow-300 hover:bg-yellow-100 hover:dark:border-orange-700 hover:dark:bg-orange-800/30"
          target="_self"
        >
          <h2 className={`mb-3 text-4xl font-semibold`}>
            Shelters{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 opacity-50`}>
            Discover shelters in your area
          </p>
        </a>

        <a
          href="/dogs"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-yellow-300 hover:bg-yellow-100 hover:dark:border-orange-700 hover:dark:bg-orange-800/30"
          target="_self"
        >
          <h2 className={`mb-3 text-4xl font-semibold`}>
            Dogs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 opacity-50`}>
            Adopt a puppy, give them a new chance at family
          </p>
        </a>

      </div>
    </main>
  )
}
