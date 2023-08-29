/* eslint-disable react/no-unescaped-entities */
import Logo from '@/assets/logo.svg';
import Image from 'next/image';
import { FacebookIcon, GithubIcon, Linkedin, MastodonIcon, TwitterIcon, YoutubeIcon } from '../Elements/Icons';

export const Footer = () => {
  return (
    <footer className="w-full py-8">
      <div className="wrapper">
        <div className="flex items-start flex-col gap-4">
          <div className="flex items-start flex-col gap-4">
            <span>
              <span className="sr-only">Home</span>
              <a href="https://www.zerotier.com" target="_blank" rel="noopener noreferrer">
                <Image src={Logo} alt="brand-logo" />
              </a>
            </span>
            <div className="text-base mb-2">Securely Connecting The World's Devices.</div>
            <ul className="flex items-start flex-col gap-4 list-none">
              <li className="pb-5">
                <div className="flex items-center w-full flex-wrap gap-2 justify-between">
                  <div className="flex items-center justify-between basis-auto w-full flex-wrap gap-4">
                    <div className="uppercase mb-2 text-base font-medium">Get Started</div>
                  </div>
                  <div className="flex items-start flex-col gap-4">
                    <ul className="flex items-start flex-col gap-2 list-none">
                      <li className="text-white text-base">Download</li>
                      <li className="text-white text-base">GitHub</li>
                      <li className="text-white text-base">SDK</li>
                      <li className="text-white text-base">Partners</li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="pb-5">
                <div className="flex items-center w-full flex-wrap gap-2 justify-between">
                  <div className="flex items-center justify-between basis-auto w-full flex-wrap gap-4">
                    <div className="uppercase mb-2 text-base font-medium">Support</div>
                  </div>
                  <div className="flex items-start flex-col gap-4">
                    <ul className="flex items-start flex-col gap-2 list-none">
                      <li className="text-white text-base">Documentation</li>
                      <li className="text-white text-base">Knowledge Base</li>
                      <li className="text-white text-base">Community</li>
                      <li className="text-white text-base">Getting Started</li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="pb-5">
                <div className="flex items-center w-full flex-wrap gap-2 justify-between">
                  <div className="flex items-center justify-between basis-auto w-full flex-wrap gap-4">
                    <div className="uppercase mb-2 text-base font-medium">Company</div>
                  </div>
                  <div className="flex items-start flex-col gap-4">
                    <ul className="flex items-start flex-col gap-2 list-none">
                      <li className="text-white text-base">Contact</li>
                      <li className="text-white text-base">AboutUs</li>
                      <li className="text-white text-base">Careers</li>
                      <li className="text-white text-base">Blog</li>
                      <li className="text-white text-base">Media Kit</li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="m-auto" />
        </div>
        <div className="m-8" />
        <ul className="flex items-center gap-4 list-none">
          <li className="mr-4">
            <GithubIcon />
          </li>
          <li className="mr-4">
            <Linkedin />
          </li>
          <li className="mr-4">
            <YoutubeIcon />
          </li>
          <li className="mr-4">
            <FacebookIcon />
          </li>
          <li className="mr-4">
            <TwitterIcon />
          </li>
          <li className="mr-4">
            <MastodonIcon />
          </li>
        </ul>
        <div className="m-8" />
        <div className="flex items-start flex-col gap-4">
          <div className="mb-2 text-base">© 2023 ZeroTier, Inc. All rights reserved.</div>
          <div className="m-auto" />
          <ul className="flex items-center gap-4 list-none">
            <li className='mb-2 text-base'>Terms</li>
            <li className='mb-2 text-base'>Privacy Policy</li>
          </ul>
        </div>
      </div>
      <div className="m-4" />
    </footer>
  );
};
