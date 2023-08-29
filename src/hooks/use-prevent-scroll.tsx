import { useEffect } from 'react';

export const usePreventScroll = (isEnabled: boolean) => {
  useEffect(() => {
    if (isEnabled) {
      // Save the current scroll position
      const scrollY = window.scrollY;

      // Disable scrolling
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;

      return () => {
        // Re-enable scrolling and restore scroll position when the component unmounts
        document.body.style.overflow = 'visible';
        document.body.style.position = 'static';
        window.scrollTo(0, scrollY);
      };
    }
  }, [isEnabled]);
};
