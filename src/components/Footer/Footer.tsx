/* eslint-disable react/no-unescaped-entities */
import Logo from '@/assets/logo.svg';
import Image from 'next/image';
import { FiGithub, FiLinkedin, FiYoutube, FiTwitter, FiFacebook } from 'react-icons/fi';
import { TbBrandMastodon } from 'react-icons/tb';

export const Footer = () => {
  return (
    <footer className="w-full py-8">
      <div className="wrapper lg:px-8">
        <div className="flex items-start flex-col sm:flex-row gap-4">
          <div className="flex items-start flex-col sm:flex-row gap-4 sm:w-full">
            <div className="flex flex-col">
              <a href="https://www.zerotier.com" target="_blank" rel="noopener noreferrer">
                <Image src={Logo} alt="brand-logo" />
              </a>
              <div className="text-citation mt-4 mb-2">
                Securely Connecting The World's Devices.
              </div>
            </div>
            <div className="m-auto" />
            <ul className="flex items-start flex-col sm:flex-row sm:justify-end gap-4 list-none">
              <li className="pb-5">
                <div className="flex items-center w-full flex-wrap gap-2 justify-between">
                  <div className="flex items-center justify-between basis-auto w-full flex-wrap gap-4">
                    <div className="uppercase mb-2 text-citation font-medium">Get Started</div>
                  </div>
                  <div className="flex items-start flex-col gap-4">
                    <ul className="flex items-start flex-col gap-2 list-none">
                      <li className="list">Download</li>
                      <li className="list">GitHub</li>
                      <li className="list">SDK</li>
                      <li className="list">Partners</li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="pb-5">
                <div className="flex items-center w-full flex-wrap gap-2 justify-between">
                  <div className="flex items-center justify-between basis-auto w-full flex-wrap gap-4">
                    <div className="uppercase mb-2 text-citation font-medium">Support</div>
                  </div>
                  <div className="flex items-start flex-col gap-4">
                    <ul className="flex items-start flex-col gap-2 list-none">
                      <li className="list">Documentation</li>
                      <li className="list">Knowledge Base</li>
                      <li className="list">Community</li>
                      <li className="list">Getting Started</li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="pb-5">
                <div className="flex items-center w-full flex-wrap gap-2 justify-between">
                  <div className="flex items-center justify-between basis-auto w-full flex-wrap gap-4">
                    <div className="uppercase mb-2 text-citation font-medium">Company</div>
                  </div>
                  <div className="flex items-start flex-col gap-4">
                    <ul className="flex items-start flex-col gap-2 list-none">
                      <li className="list">Contact</li>
                      <li className="list">AboutUs</li>
                      <li className="list">Careers</li>
                      <li className="list">Blog</li>
                      <li className="list">Media Kit</li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="m-8" />
        <ul className="flex items-center gap-4 list-none">
          <li className="mr-4 cursor-pointer">
            <FiGithub size="24" className="hover:text-primary-blue trans" />
          </li>
          <li className="mr-4 cursor-pointer">
            <FiLinkedin size="24" className="hover:text-primary-blue trans" />
          </li>
          <li className="mr-4 cursor-pointer">
            <FiYoutube size="24" className="hover:text-primary-blue trans" />
          </li>
          <li className="mr-4 cursor-pointer">
            <FiFacebook size="24" className="hover:text-primary-blue trans" />
          </li>
          <li className="mr-4 cursor-pointer">
            <FiTwitter size="24" className="hover:text-primary-blue trans" />
          </li>
          <li className="mr-4 cursor-pointer">
            <TbBrandMastodon size="24" className="hover:text-primary-blue trans" />
          </li>
        </ul>
        <div className="m-8" />
        <div className="flex items-start flex-col sm:flex-row gap-4">
          <div className="mb-2 text-citation">© 2023 ZeroTier, Inc. All rights reserved.</div>
          <div className="m-auto" />
          <ul className="flex items-center gap-4 list-none">
            <li className="mb-2 list">Terms</li>
            <li className="mb-2 list">Privacy Policy</li>
          </ul>
        </div>
      </div>
      <div className="m-4" />
    </footer>
  );
};
