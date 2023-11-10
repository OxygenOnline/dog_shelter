import Image from 'next/image'
import Navbar from './components/Navbar';
import ShelterButton from './components/ShelterButton';
import DogButton from './components/DogButton';

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

      <ShelterButton />
      <DogButton />

      </div>
    </main>
  )
}
