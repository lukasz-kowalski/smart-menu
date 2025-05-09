import { ButtonHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'neutral' | 'danger' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  loading?: boolean;
}

const baseStyles =
  'inline-flex items-center justify-center rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer';

const variantStyles = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
  secondary: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500',
  neutral: 'bg-white text-black border border-gray-300 hover:bg-gray-100 focus:ring-gray-400',
  danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
  outline:
    'border border-gray-400 text-gray-800 bg-transparent hover:bg-gray-100 focus:ring-gray-500',
};

const sizeStyles = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-5 py-2.5 text-lg',
};

const disabledStyles = 'opacity-60 pointer-events-none';

export const Button = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  loading = false,
  disabled,
  ...props
}: Props) => {
  const isDisabled = disabled || loading;

  return (
    <button
      {...props}
      disabled={isDisabled}
      className={clsx(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        isDisabled && disabledStyles,
        className,
      )}
    >
      {loading ? (
        <span className="animate-spin h-4 w-4 mr-2 border-2 border-white border-t-transparent rounded-full" />
      ) : (
        iconLeft && <span className="mr-2">{iconLeft}</span>
      )}
      {children}
      {iconRight && !loading && <span className="ml-2">{iconRight}</span>}
    </button>
  );
};
