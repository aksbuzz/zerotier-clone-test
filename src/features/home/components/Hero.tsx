import { Button } from "@/components/Elements";
import { Rubik } from "next/font/google";
import Image from "next/image";
import backgroundImage from '@/assets/images/background.jpg'

const rubik = Rubik({ variable: '--font-rubik', subsets: ["latin"]})

export const Hero = () => {
  return (
    <section className="m-0 p-0 w-full">
      <Image className="object-cover w-full opacity-60 -top-16 h-full absolute" src={backgroundImage} alt="bg-image" role="presentation" />
      <div className="mx-auto px-4">
        <div className="flex flex-col items-center gap-8">
          <div className="z-10 w-full my-12">
            <h1 className={`text-left text-heading text-white leading-7 tracking-tight mb-4 font-semibold ${rubik.className}`}>
              Securely connect any device, anywhere.
            </h1>
            <div className="text-lg font-normal tracking-normal leading-6 mb-4">
              ZeroTier lets you build modern, secure multi-point virtualized networks of almost any
              type. From robust peer-to-peer networking to multi-cloud mesh infrastructure, we
              enable global connectivity with the simplicity of a local network.
            </div>
            <div className="m-8" />
            <ul className="list-none flex items-center flex-col gap-4 my-4">
              <li>
                <Button>Get ZeroTier</Button>
              </li>
              <li>
                <a className="text-white text-base font-medium px-4 py-2 decoration-0" href="#" target="_blank" rel="noopener noreferrer">
                  {`${`Learn more >`}`}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}