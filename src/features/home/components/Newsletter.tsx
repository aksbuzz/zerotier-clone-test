import { Button } from "@/components/Elements";

export const Newsletter = () => {
  return (
    <section className="mb-4 sm:py-8 w-full">
      <div className="wrapper lg:px-8">
        <div className="w-full p-8 overflow-hidden rounded-3xl bg-black text-white">
          <div className="flex flex-col sm:flex-row items-end gap-4">
            <div className="flex flex-col items-start gap-0 flex-auto">
              <div className="leading-normal text-para font-medium">Newsletter Signup</div>
              <div className="text-citation mb-2">
                Join over 300,000 community members worldwide and receive the latest news from Team
                ZeroTier.
              </div>
            </div>
            <div className="flex items-center gap-2 justify-end flex-grow flex-shrink-0 basis-auto">
              <div className="flex justify-center gap-4 items-center">
                <div className="flex items-center gap-4 flex-auto justify-end">
                  <input
                    placeholder="Email Address"
                    type="email"
                    name="email"
                    id="email"
                    style={{ marginBottom: 0 }}
                    className="rounded-lg border-0 block text-sm p-4 w-full bg-white placeholder:text-gray-400 placeholder:text-citation"
                  />
                </div>
                <div className="flex items-center gap-4">
                  <Button>Subscribe</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}