import Logo from '@/assets/logo.svg';
import { useDisclosure } from '@/hooks/use-disclosure';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Button } from '../Elements';
import { CloseIcon, HamburgerIcon } from '../Elements/Icons';

const MobileNavigation = () => {
  const [expandedItems, setExpandedItems] = useState({
    company: false,
    support: false,
  });

  return <nav>
    <ul className='gap-3 flex m-0 p-0 list-none items-stretch flex-col'>
      <li className='text-white block text-xl py-2 px-8'>Features</li>
      <li className='text-white block text-xl py-2 px-8'>Pricing</li>
      <li className='text-white block text-xl py-2 px-8'>Download</li>
      <li className='text-white block text-xl py-2 px-8'>Company</li>
      <li className='text-white block text-xl py-2 px-8'>Support</li>
      <div className='text-white block text-xl py-2 px-8'>Login</div>
    </ul>
  </nav>
}

export const Navbar = () => {
  const { isOpen, toggle } = useDisclosure(false);
  const $bodyRef = useRef(document.body)

  useEffect(() => {
    if (isOpen) {
      $bodyRef.current.style.overflow = 'hidden'
    } else {
      $bodyRef.current.style.overflow = 'auto';
    }
  }, [isOpen])

  return (
    <header className="w-full z-50 relative bg-gradient-navbar">
      <div className={`block relative pt-4 mx-auto max-w-7xl px-4 ${isOpen && 'bg-black'}`}>
        <div className="m-2" />
        <div className="flex flex-wrap w-full items-center justify-between gap-4">
          <span>
            <span className="sr-only">Home</span>
            <a href="https://www.zerotier.com" target="_blank" rel="noopener noreferrer">
              <Image src={Logo} alt="brand-logo" />
            </a>
          </span>
          <div className="flex items-center gap-4">
            <Button variant={isOpen ? 'outlined' : 'primary'}>Sign Up</Button>
            <div className="-mr-4">
              <button
                className="flex justify-center w-12 h-12 border-none bg-transparent items-center text-brand"
                onClick={toggle}
              >
                {isOpen ? <CloseIcon /> : <HamburgerIcon />}
              </button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="z-20 w-screen h-screen absolute pt-8 bg-black">
          <MobileNavigation />
        </div>
      )}
    </header>
  );
};
