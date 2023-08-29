import { Button } from "@/components/Elements";
import { ContactCard } from "./ContactCard"

export const Contact = () => {
  return (
    <section>
      <ContactCard
        renderButton={() => (
          <Button variant="outlined">Contact Sales</Button>
        )}
        description="For high-volume VPN, IoT, edge, embedded networking, multi & hybrid cloud, Infrastructure as Code (IaC), and Commercial Use."
        heading="ZeroTier Enterprise"
        name="ci"
      />
      <ContactCard
        renderButton={() => (
          <Button variant="outlined">Contact SP Sales</Button>
        )}
        description="For hardware and software companies interested in embedding or integrating the ZeroTier platform within their service offering, as well as enterprise-facing channels including Managed Service Providers (MSPs), Resellers, and Systems Integrators."
        heading="Service Providers"
        name="sales"
      />
    </section>
  );
}