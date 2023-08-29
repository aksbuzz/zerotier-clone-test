import { Rubik } from 'next/font/google';
import { FeatureCard } from './FeatureCard';

// TODO: replace with common heading class
const rubik = Rubik({ variable: '--font-rubik', subsets: ['latin'] });

export const Features = () => {
  return (
    <section className="px-8 py-4 w-full">
      <div className="p-0 max-w-screen-2xl mx-auto">
        <div className="flex items-center flex-col text-center">
          <h2 className={`text-2xl mb-4 tracking-tight font-semibold ${rubik.className}`}>
            Secure networks for teams of any size
          </h2>
        </div>
        <ul className="list-none gap-4 flex flex-wrap flex-col items-start features-list">
          <FeatureCard heading="Individuals" name="game">
            <p>
              Access your computers, NAS, home automation, IP cameras, ham radios or other devices
              from anywhere
            </p>
            <p>Conveniently share files and data, or even play LAN games with others</p>
            <p>Manage secure network access to users of choice</p>
            <p></p>
          </FeatureCard>
          <FeatureCard heading="IT Teams" name="cloud">
            <p>
              Simplify your network stack by unifying VPNs, VLANs, and SD-WANs with one solution
            </p>
            <p>
              Build, manage, and observe any number of remote, on premise, or cloud networks with
              one management interface
            </p>
            <p>Easily provision remote access for all of your users</p>
            <p></p>
          </FeatureCard>
          <FeatureCard name="devops" heading="Devops">
            <p>Quickly build backplane networks spanning multiple cloud providers</p>
            <p>Save on performance, storage, and bandwidth</p>
            <p>Administrate and debug from anywhere</p>
            <p>Secure corporate network overlay and failover layer</p>
            <p></p>
          </FeatureCard>
          <FeatureCard heading="Embedded" name="global">
            <p>Enjoy vastly superior network control and functionality</p>
            <p>
              Develop and manage products or services running on their own decentralized networks
            </p>
            <p>
              Create 4G/5G-capable secure networks for any IoT, edge or embedded device that can
              operate on 64MB of RAM
            </p>
            <p></p>
          </FeatureCard>
        </ul>
      </div>
    </section>
  );
};
