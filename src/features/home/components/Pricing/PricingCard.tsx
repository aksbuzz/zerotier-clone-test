import React from 'react';
import Image from 'next/image';

import whiteKnockout from '@/assets/images/white-knockout.png';
import blueKnockout from '@/assets/images/blue-knockout.png';
import yellowKnockout from '@/assets/images/yellow-knockout.png';

const cardColors = {
  white: 'border-white',
  yellow: 'border-brand',
  blue: 'border-primary-blue',
};

type PricingCardProps = {
  color: keyof typeof cardColors;
  title: string;
  subtitle: string;
  children: React.ReactNode;
  renderButton: () => React.ReactNode;
};

export const PricingCard = ({
  color,
  title,
  subtitle,
  children,
  renderButton,
}: PricingCardProps) => {
  return (
    <div
      className={`bg-dark-brand border-2 ${cardColors[color]} text-white flex items-center flex-col text-center overflow-hidden rounded-3xl px-4 py-8`}
    >
      <div className="inline-block align-top relative overflow-hidden">
        <div className="block max-w-xs mb-4">
          <Image
          className='mx-auto'
            src={
              {
                blue: blueKnockout,
                yellow: yellowKnockout,
                white: whiteKnockout,
              }[color]
            }
            alt="feature-icon"
            width={64}
            height={64}
          />
        </div>
        <h3 className="text-xl font-bold tracking-tight mb-4">{title}</h3>
        <div className="text-lg font-medium tracking-normal text-center leading-6 mb-4">{subtitle}</div>
        <div className="leading-6 text-base">{children}</div>
        <div className="m-2" />
        <ul className="my-2 list-none flex flex-col items-center gap-4">
          <li>{renderButton()}</li>
        </ul>
      </div>
    </div>
  );
};
