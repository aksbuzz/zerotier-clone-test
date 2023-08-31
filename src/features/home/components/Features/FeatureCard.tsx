import React from 'react';
import Image from 'next/image';

import cloudIcon from '@/assets/images/cloud-icon.png';
import gameIcon from '@/assets/images/game-icon.png';
import devopsIcon from '@/assets/images/devops-icon.png';
import globalNetwork from '@/assets/images/global-network.png';

type FeatureCardProps = {
  name: 'cloud' | 'game' | 'devops' | 'global';
  heading: string;
  children: React.ReactNode;
};

export const FeatureCard = ({ name, heading, children }: FeatureCardProps) => {
  return (
    <li className="w-full sm:w-6/12 lg:w-3/12 px-8 py-4">
      <div style={{ padding: '0px 20%' }}>
        <div className="inline-block align-top relative overflow-hidden">
          <div className="block max-w-xs">
            <Image
              src={
                {
                  cloud: cloudIcon,
                  game: gameIcon,
                  devops: devopsIcon,
                  global: globalNetwork,
                }[name]
              }
              alt="feature-icon"
              width={187}
              height={187}
            />
          </div>
        </div>
      </div>
      <div className="m-2" />
      <h2 className="text-center text-h3 font-semibold tracking-tight mb-4">{heading}</h2>
      <div className="text-center text-button leading-normal">{children}</div>
      <div className="center flex flex-col text-center" />
    </li>
  );
};
