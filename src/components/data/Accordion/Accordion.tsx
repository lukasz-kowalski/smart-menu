import { PropsWithChildren, useId } from 'react';

import { useOpen } from '@/hooks/useOpen';
import { cn } from '@/lib/utils';

export type AccordionVariant = 'green' | 'blue' | 'neutral' | 'red' | 'yellow';

type AccordionProps = {
  title: string;
  variant?: AccordionVariant;
  initialOpen?: boolean;
};

const baseStyles =
  'w-full px-4 py-2 inline-flex items-center justify-center rounded-lg font-medium transition-colors duration-200 cursor-pointer';

const variantStyles = {
  blue: 'bg-blue-900 text-white hover:bg-blue-800 focus:ring-blue-400',
  green: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-400',
  neutral: 'bg-white text-black border border-gray-300 hover:bg-gray-100 focus:ring-gray-400',
  red: 'bg-red-700 text-white hover:bg-red-800 focus:ring-red-400',
  yellow: 'bg-yellow-600 text-white hover:bg-yellow-700 focus:ring-yellow-400',
};

export const Accordion = ({
  children,
  title,
  variant = 'neutral',
  initialOpen = true,
}: PropsWithChildren<AccordionProps>) => {
  const { isOpen, toggleOpen } = useOpen(initialOpen);

  const id = useId();
  const buttonId = `accordion-toggle-${id}`;
  const contentId = `accordion-content-${id}`;

  return (
    <div className="rounded-lg shadow-md">
      <button
        className={cn(baseStyles, variantStyles[variant])}
        onClick={toggleOpen}
        aria-expanded={isOpen}
        aria-controls={contentId}
        id={buttonId}
      >
        {title}
      </button>
      <div
        id={contentId}
        role="region"
        aria-labelledby={buttonId}
        aria-hidden={!isOpen}
        className={cn(
          'transition-all duration-300 ease-in-out transform-gpu origin-top',
          isOpen ? 'opacity-100 scale-y-100 max-h-[5000px]' : 'opacity-0 scale-y-0 max-h-0',
        )}
      >
        {children}
      </div>
    </div>
  );
};
