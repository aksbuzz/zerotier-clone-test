import { Karla } from 'next/font/google';

import { Button } from '@/components/Elements';
import { ContentLayout } from '@/components/Layout';
import { Benefits, Contact, Features, Hero, Newsletter, Pricing, Testimonials } from '@/features/home';

export const karla = Karla({ subsets: ['latin'], variable: '--font-karla' });

export default function Home() {
  return (
    <ContentLayout>
      <main className={`min-h-screen ${karla.className} font-sans`}>
        <Hero />
        <div className="wrapper">
          <div className="flex items-center flex-col text-center">
            <div className="pb-0.5 text-base">
              <p className="relative">
                🔔 NEW! ZeroTier Summer 2023 Release:{' '}
                <a
                  className="underline text-white"
                  href="https://www.zerotier.com/download/?utm_source=HPd"
                >
                  Download 1.12.1
                </a>{' '}
                -{' '}
                <a
                  className="underline text-white"
                  href="https://www.zerotier.com/blog/zerotier-summer-2023-release-1-12-0/?utm_source=HPrm"
                >
                  Read More
                </a>
              </p>
            </div>
          </div>
        </div>
        <Benefits />
        <Testimonials />
        <Features />
        <Pricing />
        <Contact />
        {/* Open Source Github */}
        <section className="w-full py-4">
          <div className="wrapper">
            <div className="w-full p-8 overflow-hidden rounded-3xl bg-dark-brand text-white">
              <h3 className="mb-4 tracking-tight font-semibold text-2xl">
                Open Source Community Edition
              </h3>
              <div className="text-base">
                <p>
                  Featuring unlimited nodes, networks, and admins. Self-hosted. Designed for
                  non-Commercial Use cases.
                </p>
              </div>
              <ul className="my-2 list-none flex flex-col items-center gap-4">
                <li>
                  {/* white */}
                  <Button className='bg-transparent text-white border-white'>ZeroTier GitHub</Button>
                </li>
                <li>
                  <a
                    href="https://docs.zerotier.com/self-hosting/network-controllers/?utm_source=ztp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-white"
                  >
                    Read Documentation
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <Newsletter />
      </main>
    </ContentLayout>
  );
}
