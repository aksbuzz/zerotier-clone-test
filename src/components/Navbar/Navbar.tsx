import Logo from '@/assets/logo.svg';
import { Button, Popover } from '@/components/Elements';
import { usePreventScroll } from '@/hooks';
import { useDisclosure } from '@/hooks/use-disclosure';
import Image from 'next/image';
import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { ListItem } from './ListItem';

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

  return (
    <nav>
      <ul className="gap-2 flex flex-col">
        <ListItem className="py-2 px-8">Features</ListItem>
        <ListItem className="py-2 px-8">Pricing</ListItem>
        <ListItem className="py-2 px-8">Download</ListItem>
        <ListItem
          className="py-2 px-8"
          withIcon
          isOpen={expandedItems.company}
          onClick={() => setExpansion('company')}
        >
          Company
        </ListItem>
        <ListItem></ListItem>
        {expandedItems.company && (
          <ul className="gap-2 ml-8 mt-2 flex flex-col">
            {companyLinkItems.map((i, index) => (
              <ListItem key={index} className="py-2 px-8">
                {i}
              </ListItem>
            ))}
          </ul>
        )}
        <ListItem
          className="py-2 px-8"
          withIcon
          isOpen={expandedItems.support}
          onClick={() => setExpansion('support')}
        >
          Support
        </ListItem>
        <ListItem></ListItem>
        {expandedItems.support && (
          <ul className="gap-2 ml-8 mt-2 flex flex-col">
            {supportLinkItems.map((i, index) => (
              <ListItem key={index} className="py-2 px-8">
                {i}
              </ListItem>
            ))}
          </ul>
        )}
        <ListItem className="py-2 px-8">Login</ListItem>
      </ul>
    </nav>
  );
};

export const Navbar = () => {
  const { isOpen: isMobileNavOpen, toggle: toggleMobileNav } = useDisclosure(false);
  usePreventScroll(isMobileNavOpen);

  return (
    <header className="w-full z-50 relative bg-gradient-navbar">
      <div
        className={`block relative pt-4 lg:pt-8 mx-auto max-w-7xl px-4 lg:px-8 ${
          isMobileNavOpen && 'bg-black'
        }`}
      >
        <div className="m-2" />
        <div className="flex flex-wrap w-full items-center justify-between gap-4">
          <span>
            <span className="sr-only">Home</span>
            <a href="https://www.zerotier.com" target="_blank">
              <Image src={Logo} alt="brand-logo" />
            </a>
          </span>
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-8">
              <ListItem>Features</ListItem>
              <ListItem>Pricing</ListItem>
              <ListItem>Download</ListItem>
              <Popover
                renderTrigger={open => (
                  <ListItem className="focus-visible:text-brand" withIcon isOpen={open}>
                    Company
                  </ListItem>
                )}
              >
                {close => (
                  <ul className="flex flex-col gap-2 pb-4">
                    {companyLinkItems.map((item, index) => (
                      <ListItem key={index} onClick={close} className="nav-list hover:text-white">
                        <span className="ml-2">{item}</span>
                      </ListItem>
                    ))}
                  </ul>
                )}
              </Popover>

              <Popover
                renderTrigger={open => (
                  <ListItem className="focus-visible:text-brand" withIcon isOpen={open}>
                    Support
                  </ListItem>
                )}
              >
                {close => (
                  <ul className="flex flex-col gap-2 pb-4">
                    {supportLinkItems.map((item, index) => (
                      <ListItem key={index} onClick={close} className="nav-list hover:text-white">
                        <span className="ml-2">{item}</span>
                      </ListItem>
                    ))}
                  </ul>
                )}
              </Popover>
            </ul>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden lg:block">
              Login
            </Button>
            <Button variant={isMobileNavOpen ? 'outlined' : 'primary'}>Sign Up</Button>
            <div className="-mr-4 lg:hidden">
              <button
                className="flex justify-center w-12 h-12 border-none bg-transparent items-center text-brand"
                onClick={toggleMobileNav}
              >
                {isMobileNavOpen ? <AiOutlineClose size="24" /> : <AiOutlineMenu size="24" />}
              </button>
            </div>
          </div>
        </div>
      </div>
      {isMobileNavOpen && (
        <div className="z-20 w-screen h-screen absolute pt-8 bg-black">
          <MobileNavigation />
        </div>
      )}
    </header>
  );
};

const companyLinkItems = ['Contact', 'About Us', 'Careers', 'Blog', 'Media Kit'];
const supportLinkItems = ['Documentation', 'Knowledge Base', 'Community', 'Getting Started'];
