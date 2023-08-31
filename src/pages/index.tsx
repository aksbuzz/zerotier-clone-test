import { Button } from '@/components/Elements';
import { ContentLayout } from '@/components/Layout';
import {
  Benefits,
  Contact,
  Features,
  Hero,
  Newsletter,
  Pricing,
  Testimonials,
} from '@/features/home';

export default function Home() {
  return (
    <ContentLayout>
      <Hero />
      <div className="wrapper lg:px-8">
        <div className="flex items-center flex-col text-center">
          <div className="pb-0.5 text-button">
            <p className="relative">
              🔔 NEW! ZeroTier Summer 2023 Release:{' '}
              <a
                className="underline list"
                href="https://www.zerotier.com/download/?utm_source=HPd"
              >
                Download 1.12.1
              </a>{' '}
              -{' '}
              <a
                className="underline list"
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
      <section className="w-full py-4 sm:py-8">
        <div className="wrapper lg:px-8">
          <div className="w-full p-8 overflow-hidden rounded-3xl bg-dark-brand text-white">
            <h3 className="mb-4 tracking-tight font-semibold text-h3">
              Open Source Community Edition
            </h3>
            <div className="text-button mb-4">
              <p>
                Featuring unlimited nodes, networks, and admins. Self-hosted. Designed for
                non-Commercial Use cases.
              </p>
            </div>
            <ul className="my-2 list-none flex flex-col sm:flex-row items-center gap-4">
              <li>
                {/* white */}
                <Button className="bg-transparent text-white border-white hover:bg-white hover:text-black">
                  ZeroTier GitHub
                </Button>
              </li>
              <li>
                <a
                  href="https://docs.zerotier.com/self-hosting/network-controllers/?utm_source=ztp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-0 decoration-transparent list"
                >
                  Read Documentation
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Newsletter />
    </ContentLayout>
  );
}
