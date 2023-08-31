import Logo from '@/assets/logo.svg';
import { Button, Popover } from '@/components/Elements';
import { usePreventScroll } from '@/hooks';
import { useDisclosure } from '@/hooks/use-disclosure';
import Image from 'next/image';
import { useState } from 'react';
import { AiFillCaretDown, AiFillCaretUp, AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

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
        <li className="py-2 px-8">
          <a className="list" href="#">
            Features
          </a>
        </li>
        <li className="py-2 px-8">
          <a className="list" href="#">
            Pricing
          </a>
        </li>
        <li className="py-2 px-8">
          <a className="list" href="#">
            Download
          </a>
        </li>
        <li className="py-2 px-8">
          <div className="list flex items-center gap-1" onClick={() => setExpansion('company')}>
            <a href="#">Company</a>
            {expandedItems.company ? <AiFillCaretUp /> : <AiFillCaretDown />}
          </div>
        </li>
        {expandedItems.company && (
          <ul className="gap-2 ml-8 mt-2 flex flex-col">
            {companyLinkItems.map((i, index) => (
              <li key={index} className="py-2 px-8">
                <a className="list" href="#">
                  {i}
                </a>
              </li>
            ))}
          </ul>
        )}
        <li className="py-2 px-8">
          <div className="list flex items-center gap-1" onClick={() => setExpansion('support')}>
            <a href="#">Support</a>
            {expandedItems.support ? <AiFillCaretUp /> : <AiFillCaretDown />}
          </div>
        </li>
        {expandedItems.support && (
          <ul className="gap-2 ml-8 mt-2 flex flex-col">
            {supportLinkItems.map((i, index) => (
              <li key={index} className="py-2 px-8">
                <a className="list" href="#">
                  {i}
                </a>
              </li>
            ))}
          </ul>
        )}
        <li className="py-2 px-8">
          <a className="list" href="#">
            Login
          </a>
        </li>
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
              <li>
                <a className="list" href="#">
                  Features
                </a>
              </li>
              <li>
                <a className="list" href="#">
                  Pricing
                </a>
              </li>
              <li>
                <a className="list" href="#">
                  Download
                </a>
              </li>
              <div>
                <Popover
                  renderTrigger={open => (
                    <li className="focus-visible:text-brand">
                      <div className="list flex items-center gap-1">
                        Company
                        {open ? <AiFillCaretUp /> : <AiFillCaretDown />}
                      </div>
                    </li>
                  )}
                >
                  {close => (
                    <ul className="flex flex-col gap-2 pb-4">
                      {companyLinkItems.map((item, index) => (
                        <li key={index} className="nav-list" onClick={close}>
                          <span className="ml-2">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </Popover>
              </div>
              <div>
                <Popover
                  renderTrigger={open => (
                    <li className="focus-visible:text-brand">
                      <div className="listflex items-center gap-2">
                        Support
                        {open ? <AiFillCaretUp /> : <AiFillCaretDown />}
                      </div>
                    </li>
                  )}
                >
                  {close => (
                    <ul className="flex flex-col gap-2 pb-4">
                      {supportLinkItems.map((item, index) => (
                        <li key={index} className="nav-list" onClick={close}>
                          <span className="ml-2">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </Popover>
              </div>
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
