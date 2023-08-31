import { Rubik } from 'next/font/google';
import { PricingCard } from './PricingCard';
import { Button } from '@/components/Elements';

// TODO: replace with common heading class
const rubik = Rubik({ variable: '--font-rubik', subsets: ['latin'] });

export const Pricing = () => {
  return (
    <section className="py-4 sm:py-8 w-full">
      <div className="wrapper lg:px-8">
        <div className="flex items-center flex-col text-center">
          <h2 className={`text-sectionHead mb-4 tracking-tight font-semibold ${rubik.className}`}>
            Pricing
          </h2>
          <div className="font-normal text-citation tracking-normal leading-normal mb-4">
            ZeroTier makes networking easy for everyone - anywhere.{' '}
          </div>
        </div>
        <ul className="list-none gap-8 flex flex-nowrap flex-col sm:flex-wrap pricing-card-margins lg:ml-0 lg:mr-0 lg:flex-nowrap lg:flex-row items-stretch">
          <PricingCard
            title="Basic"
            subtitle="For Everyone / ZeroTier Hosted Controller"
            color="white"
            renderButton={() => (
              // white
              <Button variant="white">Free Sign Up</Button>
            )}
          >
            <p className="my-4">✓ 1 Admin</p>
            <p className="my-4">✓ 25 Nodes</p>
            <p className="my-4">✓ Unlimited Networks</p>
            <p className="my-4">✖ Business SSO: n/a</p>
            <p className="my-4">✓ Community Support</p>
            <p className="my-4"></p>
            <p className="my-4">FREE</p>
            <p className="my-4"></p>
          </PricingCard>
          <PricingCard
            title="Professional"
            subtitle="Licensed Only For Individuals and Testing"
            color="yellow"
            renderButton={() => <Button variant="primary">Sign Up</Button>}
          >
            <p className="my-4">✓ Admins | $10 USD/mo each</p>
            <p className="my-4">✓ 25 Node Packs | $5 USD/mo</p>
            <p className="my-4">✓ Unlimited Networks</p>
            <p className="my-4">✓ Business SSO | $5 USD/mo per seat</p>
            <p className="my-4">✓ Community Support</p>
            <p className="my-4"></p>
            <p className="my-4">Starting at $5 USD/month</p>
          </PricingCard>
          <PricingCard
            title="Business"
            subtitle="Licensed for Commercial Deployments"
            color="blue"
            renderButton={() => <Button variant="secondary">Contact Sales</Button>}
          >
            <p className="my-4">Use Cases Include:</p>
            <p className="my-4">∙ IoT</p>
            <p className="my-4">∙ SD-WAN</p>
            <p className="my-4">∙ VPN</p>
            <p className="my-4">∙ Remote Monitoring and Management</p>
            <p className="my-4">Contact Sales for Pricing</p>
            <p className="my-4"></p>
            <p className="my-4"></p>
          </PricingCard>
        </ul>
      </div>
    </section>
  );
};
