import { Popover as HeadlessPopover, Transition } from '@headlessui/react';

type PopoverProps = {
  children: (close: (e: any) => void) => React.ReactNode;
  renderTrigger: (open: boolean) => React.ReactNode;
};

export const Popover = ({ children, renderTrigger }: PopoverProps) => {
  return (
    <HeadlessPopover className="relative">
      {({ open, close }) => (
        <>
          <HeadlessPopover.Button className="focus-visible:outline-none">
            {renderTrigger(open)}
          </HeadlessPopover.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <HeadlessPopover.Panel className="absolute z-10 popover-position">
              <span className="border-transparent border-b-black border-solid border-t-0 border-x-[14px] border-b-[17.3px] absolute -top-4 left-1/2 -translate-x-1/2" />
              <div
                className="bg-black rounded-3xl shadow-popover w-fit whitespace-nowrap max-w-md p-4 pb-0"
                style={{ minWidth: 300 }}
              >
                {children(close)}
              </div>
            </HeadlessPopover.Panel>
          </Transition>
        </>
      )}
    </HeadlessPopover>
  );
};
