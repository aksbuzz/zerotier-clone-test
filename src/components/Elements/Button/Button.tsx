import React from 'react';

const variants = {
  primary: 'border-brand bg-brand text-gray-950',
  secondary: 'border-primary-blue bg-primary-blue text-white',
  white: 'border-white bg-white text-gray-950',
  outlined: 'border-brand bg-transparent text-brand',
};

type ButtonProps = {
  children: React.ReactNode;
  variant?: keyof typeof variants;
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = (props: ButtonProps) => {
  const { children, variant = "primary", className, ...buttonProps } = props;
  return <button className={`rounded-3xl inline-flex font-medium py-2 px-4 text-base border-2 font-sans ${variants[variant]} leading-none ${className}`} {...buttonProps}>{children}</button>;
};