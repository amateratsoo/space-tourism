"use client";

import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import clsx from 'clsx';

function Header() {
  const [pathname, _] = useState(usePathname());
  const [showMobileNavigation, setShowMobileNavigation] = useState<boolean>(false);

  const router = useRouter();

  return (
    <header className='w-full relative flex items-center justify-between sm:pr-0 lg:pt-6'>
        <Image 
          className='my-6 ml-6 lg:ml-12 cursor-pointer'
          src='/assets/shared/logo.svg'
          alt='space tourism website logo'
          quality={100}
          priority
          height={40}
          width={40}
          onClick={() => router.push('/')}          
        />

      <button 
        className={clsx('sm:hidden my-6 pr-6 relative z-50')} 
        onClick={() => setShowMobileNavigation(prev => !prev)}
      >
        <Image 
          src={showMobileNavigation ? '/assets/shared/icon-close.svg' : '/assets/shared/icon-hamburger.svg'}
          alt={showMobileNavigation ? 'close the navigation menu': 'open the navigation menu'}
          quality={100}
          priority
          height={32}
          width={32}
        />
      </button>

      {/* Navigation for small devices */}

      <nav className={clsx('block pt-14 sm:hidden fixed top-0 bg-white/5 backdrop-blur-xl h-screen w-3/4 transition-all', {
        'right-0': showMobileNavigation,
        '-right-full': !showMobileNavigation
      })}>

        <ul className='text-white flex flex-col h-full justify-start pt-12 gap-8 items-center font-sans-serif tracking-widest text-xl'>
          <li className='w-full'>
            <Link
              href='/'
              className={clsx('flex w-full justify-start pl-10 items-center gap-2 border-r-4 hover:border-white/50 transition-colors', {
                'border-transparent': pathname !== '/',
                'border-white': pathname === '/'
              })}
            >
              <span className='font-bold'>00</span>
              <span>HOME</span>
            </Link >
          </li>

          <li className='w-full'>
            <Link
              href='/destination'
              className={clsx('flex w-full justify-start pl-10 items-center gap-2 border-r-4 hover:border-white/50 transition-colors', {
                'border-transparent': pathname !== '/destination',
                'border-white': pathname === '/destination'
              })}
            >
              <span className='font-bold'>01</span>
              <span>DESTINATION</span>
            </Link >
          </li>

          <li className='w-full'>
            <Link
              href='/crew'
              className={clsx('flex w-full justify-start pl-10 items-center gap-2 border-r-4 hover:border-white/50 transition-colors', {
                'border-transparent': pathname !== '/crew',
                'border-white': pathname === '/crew'
              })}
            >
              <span className='font-bold'>02</span>
              <span>CREW</span>
            </Link >
          </li>

          <li className='w-full'>
            <Link
              href='/technology'
              className={clsx('flex w-full justify-start pl-10 items-center gap-2 border-r-4 hover:border-white/50 transition-colors', {
                'border-transparent': pathname !== '/technology',
                'border-white': pathname === '/technology'
              })}
            >
              <span className='font-bold'>03</span>
              <span>TECHNOLOGY</span>
            </Link >
          </li>
        </ul>
      </nav>

      {/* Navigation for medium-large devices */}

      <div className='w-full relative hidden lg:block z-20'>
        <hr className='bg-white/25 h-[1px] w-full absolute -right-8' />
      </div>

      <nav className='hidden sm:block bg-white/5 backdrop-blur-md h-full'>
        <ul className='text-white flex h-full px-9 gap-8 lg:px-32 lg:gap-20 justify-center items-center font-sans-serif tracking-widest text-base'>
          <li className='h-full'>
            <Link
              href='/'
              className={clsx('h-full flex justify-center items-center gap-2 border-b-[3px] hover:border-white/50 transition-colors', {
                'border-transparent': pathname !== '/',
                'border-white': pathname === '/'
              })}
            >
              <span className='hidden font-bold lg:block'>00</span>
              <span>HOME</span>
            </Link >
          </li>

          <li className='h-full'>
            <Link
              href='/destination'
              className={clsx('h-full flex justify-center items-center gap-2 border-b-[3px] hover:border-white/50 transition-colors', {
                'border-transparent': pathname !== '/destination',
                'border-white': pathname === '/destination'
              })}
            >
              <span className='hidden font-bold lg:block'>01</span>
              <span>DESTINATION</span>
            </Link >
          </li>

          <li className='h-full'>
            <Link
              href='/crew'
              className={clsx('h-full flex justify-center items-center gap-2 border-b-[3px] hover:border-white/50 transition-colors', {
                'border-transparent': pathname !== '/crew',
                'border-white': pathname === '/crew'
              })}
            >
              <span className='hidden font-bold lg:block'>02</span>
              <span>CREW</span>
            </Link >
          </li>

          <li className='h-full'>
            <Link
              href='/technology'
              className={clsx('h-full flex justify-center items-center gap-2 border-b-[3px] hover:border-white/50 transition-colors', {
                'border-transparent': pathname !== '/technology',
                'border-white': pathname === '/technology'
              })}
            >
              <span className='hidden font-bold lg:block'>03</span>
              <span>TECHNOLOGY</span>
            </Link >
          </li>
        </ul>
      </nav>
    </header>
  );
}

export { Header };
