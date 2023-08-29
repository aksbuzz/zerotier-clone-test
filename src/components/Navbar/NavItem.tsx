import React from 'react';

type NavItemProps = {
  children: React.ReactNode
}

export const NavItem = ({ children }: NavItemProps) => {
  return <li className="text-white block text-xl py-2 px-8">{children}</li>;
}