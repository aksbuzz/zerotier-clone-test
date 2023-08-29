import Logo from '@/assets/logo.svg';
import { usePreventScroll } from '@/hooks';
import { useDisclosure } from '@/hooks/use-disclosure';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from '../Elements';
import { ArrowDownIcon, ArrowUpIcon, CloseIcon, HamburgerIcon } from '../Elements/Icons';
import { NavItem } from './NavItem';

const MobileNavigation = () => {
  const [expandedItems, setExpandedItems] = useState({
    company: false,
    support: false,
  });

  const setExpansion = (item: 'company' | 'support') => {
    setExpandedItems(prev => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  const renderCompanyLinks = () => {
    return (
      <NavItem>
        <div className="flex items-start flex-col relative gap-8">
          <div className="flex items-center gap-2" onClick={() => setExpansion('company')}>
            Company
            {expandedItems.company ? <ArrowUpIcon /> : <ArrowDownIcon />}
          </div>
          {expandedItems.company && (
            <div className="relative whitespace-nowrap w-fit">
              <ul className="list-none gap-2 flex items-start flex-col">
                <NavItem>Contact</NavItem>
                <NavItem>About Us</NavItem>
                <NavItem>Careers</NavItem>
                <NavItem>Blog</NavItem>
                <NavItem>Media Kit</NavItem>
              </ul>
            </div>
          )}
        </div>
      </NavItem>
    );
  };

  const renderSupportLinks = () => {
    return (
      <NavItem>
        <div className="flex items-start flex-col relative gap-8">
          <div className="flex items-center gap-2" onClick={() => setExpansion('support')}>
            Support
            {expandedItems.support ? <ArrowUpIcon /> : <ArrowDownIcon />}
          </div>
          {expandedItems.support && (
            <div className="relative whitespace-nowrap w-fit">
              <ul className="list-none gap-2 flex items-start flex-col">
                <NavItem>Documentation</NavItem>
                <NavItem>Knowledge Base</NavItem>
                <NavItem>Community</NavItem>
                <NavItem>Getting Started</NavItem>
              </ul>
            </div>
          )}
        </div>
      </NavItem>
    );
  };

  return (
    <nav>
      <ul className="gap-3 flex m-0 p-0 list-none items-stretch flex-col">
        <NavItem>Features</NavItem>
        <NavItem>Pricing</NavItem>
        <NavItem>Download</NavItem>
        {renderCompanyLinks()}
        {renderSupportLinks()}
        <NavItem>Login</NavItem>
      </ul>
    </nav>
  );
};

export const Navbar = () => {
  const { isOpen, toggle } = useDisclosure(false);

  usePreventScroll(isOpen);

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
