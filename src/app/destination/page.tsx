"use client";

import Image from 'next/image';
import clsx from 'clsx';
import { useState } from 'react';

import { Header } from '@/components/Header';
import data from '@/data.json';

export default function Destination() {
  const [destinationIndex, setDestinationIndex] = useState<number>(0);

  return (
    <main className='w-screen h-screen overflow-x-hidden text-white flex flex-col items-center relative bg-cover bg-no-repeat bg-destination-mobile sm:bg-destination-tablet md:bg-destination-tablet lg:bg-destination-desktop'>
      <Header />

      <div className='w-full flex justify-center items-center pt-4 sm:py-10 sm:justify-start sm:pl-12 lg:pl-32'>
        <h1 className='font-sans-serif text-xl tracking-widest'><span className='font-sans-serif font-bold text-white/25'>0&nbsp;1</span> &nbsp; &nbsp; PICK YOUR DESTINATION</h1>
      </div>

      <div className='lg:flex lg:flex-row h-full'>
        <div className='my-7 grid place-items-center lg:my-0 lg:flex-1'>
          <Image 
            src={`${String(data.destinations[destinationIndex].images.webp)}`}
            alt={`an image representing ${String(data.destinations[destinationIndex].name)}`}
            quality={100}
            priority
            width={170}
            height={170}
            className='lg:w-80 lg:h-80'
          />
        </div>

        <div className='flex flex-col justify-center items-center px-12 lg:flex-1 lg:items-start lg:px-36'>
          <nav>
            <ul className='flex gap-6 font-sans-serif text-lg'>
              {data.destinations.map((d, index) => (
                <li className={clsx('h-full text-indigo-blue border-b-[3px] border-transparent py-1 hover:border-white/50 transition-all', {
                  'border-white text-white': destinationIndex === index,
                })}>
                  <button
                  className='tracking-widest'
                    onClick={() => setDestinationIndex(index)}
                  >
                    {d.name.toUpperCase()}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <h2 className='font-serif text-7xl my-4'>{String(data.destinations[destinationIndex].name).toUpperCase()}</h2>

          <p className='font-sans text-base text-center text-indigo-blue lg:text-left'>{String(data.destinations[destinationIndex].description)}</p>

          <hr className='bg-[#383B4B] h-[1px] border-none w-full my-10' />

          <div className='flex flex-col w-full sm:flex-row sm:justify-evenly justify-center items-center gap-8 pb-16 lg:pb-0 lg:justify-start lg:px-0'>
            <div className='flex flex-col gap-3 sm:flex-1 text-center lg:text-left'>
              <span className='font-sans-serif text-indigo-blue text-lg tracking-widest'>AVG. DISTANCE</span>
              <span className='font-serif text-4xl'>{String(data.destinations[destinationIndex].distance).toUpperCase()}</span>
            </div>

            <div className='flex flex-col gap-3 sm:flex-1 text-center lg:text-left'>
              <span className='font-sans-serif text-indigo-blue text-lg tracking-widest'>EST. TRAVEL TIME</span>
              <span className='font-serif text-4xl'>{String(data.destinations[destinationIndex].travel).toUpperCase()}</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
