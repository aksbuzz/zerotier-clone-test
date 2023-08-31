import { Rubik } from 'next/font/google';
import { FeatureCard } from './FeatureCard';

// TODO: replace with common heading class
const rubik = Rubik({ variable: '--font-rubik', subsets: ['latin'] });

export const Features = () => {
  return (
    <section className="px-8 py-4 sm:py-8 w-full">
      <div className="p-0 max-w-screen-2xl xl:px-4 mx-auto">
        <div className="flex items-center flex-col text-center">
          <h2 className={`text-sectionHead mb-4 tracking-tight font-semibold ${rubik.className}`}>
            Secure networks for teams of any size
          </h2>
        </div>
        <ul className="list-none gap-4 sm:gap-0 flex flex-wrap flex-col sm:flex-row items-start features-list">
          <FeatureCard heading="Individuals" name="game">
            <p className="my-4">
              Access your computers, NAS, home automation, IP cameras, ham radios or other devices
              from anywhere
            </p>
            <p className="my-4">
              Conveniently share files and data, or even play LAN games with others
            </p>
            <p className="my-4">Manage secure network access to users of choice</p>
            <p className="my-4"></p>
          </FeatureCard>
          <FeatureCard heading="IT Teams" name="cloud">
            <p className="my-4">
              Simplify your network stack by unifying VPNs, VLANs, and SD-WANs with one solution
            </p>
            <p className="my-4">
              Build, manage, and observe any number of remote, on premise, or cloud networks with
              one management interface
            </p>
            <p className="my-4">Easily provision remote access for all of your users</p>
            <p className="my-4"></p>
          </FeatureCard>
          <FeatureCard name="devops" heading="Devops">
            <p className="my-4">
              Quickly build backplane networks spanning multiple cloud providers
            </p>
            <p className="my-4">Save on performance, storage, and bandwidth</p>
            <p className="my-4">Administrate and debug from anywhere</p>
            <p className="my-4">Secure corporate network overlay and failover layer</p>
            <p className="my-4"></p>
          </FeatureCard>
          <FeatureCard heading="Embedded" name="global">
            <p className="my-4">Enjoy vastly superior network control and functionality</p>
            <p className="my-4">
              Develop and manage products or services running on their own decentralized networks
            </p>
            <p className="my-4">
              Create 4G/5G-capable secure networks for any IoT, edge or embedded device that can
              operate on 64MB of RAM
            </p>
            <p className="my-4"></p>
          </FeatureCard>
        </ul>
      </div>
    </section>
  );
};
