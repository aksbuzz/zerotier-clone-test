import { Button } from '@/components/Elements';
import Image from 'next/image';
import backgroundImage from '@/assets/images/background.jpg';
import { rubik } from '@/util/font';

export const Hero = () => {
  return (
    <section className="m-0 p-0 w-full">
      <div className="grid">
        <div className="inline-block align-top relative overflow-hidden -z-10 home-image-wrapper">
          <div className="block h-full">
            <Image
              className="object-cover w-full h-full max-w-full block statics"
              src={backgroundImage}
              alt="bg-image"
              role="presentation"
            />
          </div>
        </div>
        {/* overlay */}
        <div className="relative grid home-image-overlay" />
        <div className="grid place-items-center relative" style={{ gridArea: '1/1' }}>
          <div className="mx-auto px-4 lg:px-8 max-w-screen-xl">
            <div className="flex flex-col sm:flex-row items-center gap-8">
              <div className="z-10 w-full my-12 lg:w-6/12">
                <h1
                  className={`text-left text-pageHead text-white leading-none tracking-tight mb-4 font-semibold ${rubik.className}`}
                >
                  Securely connect any device, anywhere.
                </h1>
                <div className="text-para font-normal tracking-normal leading-normal mb-4">
                  ZeroTier lets you build modern, secure multi-point virtualized networks of almost
                  any type. From robust peer-to-peer networking to multi-cloud mesh infrastructure,
                  we enable global connectivity with the simplicity of a local network.
                </div>
                <div className="m-8" />
                <ul className="list-none flex items-center flex-col sm:flex-row gap-4 my-4 ">
                  <li>
                    <Button>Get ZeroTier</Button>
                  </li>
                  <li>
                    <a
                      className="decoration-0"
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="ghost">{`${`Learn more >`}`}</Button>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
