import { PropsWithChildren } from 'react';

import clsx from 'clsx';

interface Props {
  variant?: 'info' | 'success' | 'neutral' | 'warning' | 'danger';
  size?: 'sm' | 'md' | 'lg';
}

const baseStyles = 'rounded-sm';

const variantStyles = {
  info: 'bg-blue-500 text-white',
  success: 'bg-green-500 text-white',
  neutral: 'bg-white text-black border border-gray-300',
  warning: 'bg-yellow-600 text-white',
  danger: 'bg-red-600 text-white',
};

const sizeStyles = {
  sm: 'px-1.5 py-0.5 text-sm',
  md: 'px-2 py-1 text-base',
  lg: 'px-3 py-1.5 text-lg',
};

export const Badge = ({ children, variant = 'info', size = 'md' }: PropsWithChildren<Props>) => {
  return (
    <span className={clsx(baseStyles, variantStyles[variant], sizeStyles[size])}>{children}</span>
  );
};
