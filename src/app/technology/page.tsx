"use client";

import Image from 'next/image';
import clsx from 'clsx';
import { useState, useEffect } from 'react';

import { Header } from '@/components/Header';
import data from '@/data.json';

export default function Destination() {
  const [technologyIndex, setTechnologyIndex] = useState<number>(0);
  const [isMediumDevice, setIsMediumDevice] = useState<boolean>();

  useEffect(() => {
    setIsMediumDevice(window.matchMedia('(min-width: 640px) and (max-width: 1024px)').matches)
    const lookForResize = window.addEventListener('resize', () => setIsMediumDevice(window.matchMedia('(min-width: 640px) and (max-width: 1024px)').matches));

    return () => window.removeEventListener('resize', () => lookForResize);
  }, []);

  return (
    <main className='w-screen h-screen text-white flex flex-col items-center relative bg-cover bg-no-repeat bg-technology-mobile sm:bg-technology-tablet md:bg-technology-tablet lg:bg-technology-desktop sm:overflow-x-hidden'>
      <Header />

      <div className='w-full flex justify-center items-center pt-4 sm:py-10 sm:justify-start sm:pl-12 lg:pl-32'>
        <h1 className='font-sans-serif text-xl tracking-widest'><span className='font-sans-serif font-bold text-white/25'>0&nbsp;3</span> &nbsp; &nbsp; SPACE LAUNCH 101</h1>
      </div>

      <div className='flex flex-col sm:h-full lg:flex-row-reverse lg:pl-20'>
        <div className='w-full flex px-12 sm:px-0 my-7 items-center justify-center sm:justify-end sm:my-0'>
          <div className='flex justify-center items-end sm:block sm:h-full sm:w-full lg:h-[30rem] lg:w-[30rem]'>
            <Image 
              src={`${isMediumDevice ? data.technology[technologyIndex].images.landscape : data.technology[technologyIndex].images.portrait}`}
              alt={`an image of ${data.technology[0].name}`}
              className='h-60 w-60 sm:w-full sm:h-full'
              width={500}
              height={500}
              quality={100}
              priority
            />
          </div>
        </div>

        <div className='px-12 w-full sm:pb-16 lg:pb-0 flex flex-col lg:flex-row justify-center items-center lg:gap-14'>
          <nav className='sm:my-8'>
            <ul className='gap-4 w-full flex items-center justify-center lg:flex-col'>
              {data.technology.map((_, index) => (
                <li>
                  <button
                    className={clsx('rounded-full w-12 h-12 lg:w-14 lg:h-14 transition-colors font-serif text-lg grid place-items-center border', {
                      'bg-transparent hover:border-white border-white/25': technologyIndex !== index,
                      'bg-white text-black border-white': technologyIndex === index
                    })}
                    onClick={() => setTechnologyIndex(index)}
                  >
                    <span>{index + 1}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className='w-full flex flex-col justify-center items-center lg:items-start'>
            <span className='font-sans-serif tracking-widest text-xl mt-7 sm:mt-0 lg:text-2xl text-white/50'>THE TERMINOLOGY…</span>

            <h2 className='font-serif text-4xl lg:text-5xl my-4'>{String(data.technology[technologyIndex].name).toUpperCase()}</h2>

            <p className='font-sans text-base text-center text-indigo-blue lg:text-left'>{String(data.technology[technologyIndex].description)}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
