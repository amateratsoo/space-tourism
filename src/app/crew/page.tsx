"use client";

import Image from 'next/image';
import clsx from 'clsx';
import { useState } from 'react';

import { Header } from '@/components/Header';
import data from '@/data.json';

export default function Destination() {
  const [crewIndex, setCrewIndex] = useState<number>(0);

  return (
    <main className='w-screen h-screen text-white flex flex-col items-center relative bg-cover bg-no-repeat bg-crew-mobile sm:bg-crew-tablet md:bg-crew-tablet lg:bg-crew-desktop'>
      <Header />

      <div className='w-full flex justify-center items-center pt-4 sm:py-10 sm:justify-start sm:pl-12 lg:pl-32'>
        <h1 className='font-sans-serif text-xl tracking-widest'><span className='font-sans-serif font-bold text-white/25'>0&nbsp;2</span> &nbsp; &nbsp; MEET YOUR CREW</h1>
      </div>

      <div className='flex flex-col sm:flex-col-reverse sm:h-full lg:flex-row-reverse lg:pl-20'>
        <div className='w-full flex flex-col px-12 -space-y-0 my-7 items-center justify-center sm:h-full sm:justify-end sm:my-0'>
          <div className='flex justify-center items-end'>
            <Image 
              src={`${data.crew[crewIndex].images.webp}`}
              alt={`an image of ${data.crew[0].name}`}
              className='h-60 w-60 sm:h-72 sm:w-72 lg:w-[26rem] lg:h-[28rem]'
              width={500}
              height={500}
              quality={100}
              priority
              loading='eager'
            />
          </div>

          <hr className='bg-white/20 h-[1px] w-full my-10 border-none sm:hidden' />
        </div>

        <div className='px-12 w-full flex flex-col sm:flex-col-reverse justify-center items-center lg:items-start'>
          <nav className='sm:my-8'>
            <ul className='gap-4 w-full flex items-center justify-center'>
              {data.destinations.map((_, index) => (
                <li>
                  <button
                    className={clsx('rounded-full w-3 h-3 transition-colors', {
                      'bg-white/20 hover:bg-white/50': crewIndex !== index,
                      'bg-white': crewIndex === index
                    })}
                    onClick={() => setCrewIndex(index)}
                  />
                </li>
              ))}
            </ul>
          </nav>

          <div className='w-full pb-16 lg:pb-0 flex flex-col text-center lg:text-left justify-center items-center lg:items-start'>
            <span className='font-serif text-3xl mt-7 sm:mt-0 lg:text-2xl text-white/50'>{String(data.crew[crewIndex].role).toUpperCase()}</span>

            <h2 className='font-serif text-4xl lg:text-5xl my-4'>{String(data.crew[crewIndex].name).toUpperCase()}</h2>

            <p className='font-sans text-base text-center text-indigo-blue lg:text-left'>{String(data.crew[crewIndex].bio)}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
