import { Button } from "@/components/Elements";
import Image from "next/image";
import smartphoneImage from '@/assets/images/smart-phone.png'
import secureTechImage from '@/assets/images/secure-technology.png';

export const Benefits = () => {
  return (
    <section className="py-4 w-full">
      <div className="wrapper">
        <div className="text-white bg-dark-brand overflow-hidden p-4 w-full rounded-3xl">
          <div className="flex items-center gap-8 flex-col">
            <div className="w-full p-8">
              <div className="inline-block align-top relative overflow-hidden">
                <div className="max-w-5xl block">
                  <Image src={smartphoneImage} alt="smartphone-in-hand" />
                </div>
              </div>
            </div>
            <div className="w-full p-4">
              <h3 className="mb-4 leading-4 tracking-tight font-semibold text-xl">It just works</h3>
              <div>
                <div className="text-lg leading-6">
                  <p>
                    ZeroTier combines the capabilities of <b>VPN</b> and <b>SD-WAN</b>, simplifying
                    network management. Enjoy flexibility while avoiding costly hardware vendor lock
                    in.
                  </p>
                </div>
              </div>
              <div className="m-8" />
              <ul className="list-none flex flex-col items-center gap-4 my-8">
                <li>
                  <Button variant="white">{`${`Learn more >`}`}</Button>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center gap-8 flex-col">
            <div className="p-8 w-full">
              <div className="inline-block align-top relative overflow-hidden">
                <div className="max-w-5xl block">
                  <Image src={secureTechImage} alt="secure-tech-in-hand" />
                </div>
              </div>
            </div>
            <div className="w-full p-4">
              <h3 className="mb-4 leading-4 tracking-tight font-semibold text-xl">
                Speed, flexibility, and security
              </h3>
              <div>
                <div className="text-lg leading-6">
                  <p>Set up ZeroTier in minutes with remote, automated deployment.</p>
                  <p>
                    Emulates Layer 2 Ethernet with multipath, multicast, and bridging capabilities.{' '}
                  </p>
                  <p>
                    ZeroTier’s zero-trust networking solution provides scalable security with
                    256-bit end-to-end encryption.
                  </p>
                  <p></p>
                </div>
              </div>
              <div className="m-8" />
              <ul className="list-none flex flex-col items-center gap-4 my-8">
                <li>
                  <Button variant="white">Get ZeroTier</Button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}