import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import React from 'react';

type ContentLayoutProps = {
  children: React.ReactNode;
};

export function ContentLayout({ children }: ContentLayoutProps) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
