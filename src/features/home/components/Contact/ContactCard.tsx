import { Rubik } from "next/font/google";
import Image from "next/image";
import React from "react";

import ciImage from '@/assets/images/continuous-integration.png';
import salesImage from '@/assets/images/sp-sales-graphs.png';

const rubik = Rubik({ variable: '--font-rubik', subsets: ['latin'] });

type ContactCardProps = {
  heading: string;
  name: 'ci' | 'sales';
  description: string;
  renderButton: () => React.ReactNode;
};

export const ContactCard = ({ name, heading, description, renderButton }: ContactCardProps) => {
  return (
    <div className="wrapper lg:px-8">
      <section className="w-full py-4 sm:py-8">
        <div className="text-white bg-primary-blue rounded-3xl overflow-hidden p-8 w-full">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className={`py-16 w-full ${name === 'sales' ? 'sm:order-1' : ''}`}>
              <h2
                className={`text-sectionHead ${rubik.className} font-semibold tracking-tight mb-4`}
              >
                {heading}
              </h2>
              <div className="text-para font-normal leading-normal mb-4">{description}</div>
              <div className="m-8" />
              <ul className="my-2 list-none flex flex-col sm:flex-row items-center gap-4">
                <li>{renderButton()}</li>
              </ul>
            </div>
            <div className="flex flex-col text-center items-center sm:w-6/12">
              <div className="inline-block align-top relative overflow-hidden">
                <div className="block max-w-xs">
                  <Image
                    height={225}
                    width={225}
                    src={
                      {
                        ci: ciImage,
                        sales: salesImage,
                      }[name]
                    }
                    alt="user-icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
