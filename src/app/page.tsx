"use client";

import { Header } from '@/components/Header';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <main className='w-screen h-screen flex flex-col items-center relative bg-cover bg-no-repeat bg-home-mobile sm:bg-home-tablet md:bg-home-tablet lg:bg-home-desktop'>
      <Header />
      
      <div className='pt-20 px-[10%] py-16 flex flex-col items-center justify-between lg:flex-row lg:px-0 lg:py-0 h-full'>
        <div className='text-white text-center flex flex-col gap-y-7 lg:text-left lg:flex-1 lg:px-[10%] lg:h-full lg:pb-48 lg:justify-end lg:items-start'>
          <h1 className='font-sans-serif text-xl tracking-widest text-indigo-blue'>SO, YOU WANT TO TRAVEL TO</h1>
          <h2 className='font-serif text-8xl'>SPACE</h2>
          <p className='font-sans text-base tracking-wide text-indigo-blue leading-relaxed'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
        </div>

        <div className='lg:flex-1 lg:h-full lg:flex lg:justify-center lg:items-end lg:pb-48'>
          <button 
            className='rounded-full h-[9.375rem] w-[9.375rem] lg:h-52 lg:w-52 bg-white grid place-items-center hover:shadow-white-effect transition-shadow'
            onClick={() => router.push('/destination')}
          >
            <span className='font-serif text-xl'>EXPLORE</span>
          </button>
        </div>
      </div>


    </main>
  )
}
