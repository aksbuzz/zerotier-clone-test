import React from 'react';

const variants = {
  primary: 'border-2 border-brand bg-brand text-gray-950 hover:bg-transparent hover:text-brand',
  secondary:
    'border-2 border-primary-blue bg-primary-blue text-white hover:bg-transparent hover:text-white',
  white: 'border-2 border-white bg-white text-gray-950 hover:bg-transparent hover:text-white',
  outlined: 'border-2 border-brand bg-transparent text-brand hover:bg-brand hover:text-black',
  ghost: 'list border-0 hover:bg-dark-brand',
};

type ButtonProps = {
  children: React.ReactNode;
  variant?: keyof typeof variants;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = (props: ButtonProps) => {
  const { children, variant = 'primary', className, ...buttonProps } = props;
  return (
    <button
      className={`rounded-3xl trans inline-flex font-medium py-2 px-4 text-button font-sans ${variants[variant]} leading-none ${className}`}
      {...buttonProps}
    >
      {children}
    </button>
  );
};
