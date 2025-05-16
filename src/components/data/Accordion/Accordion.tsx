import { PropsWithChildren } from 'react';

import { useOpen } from '@/hooks/useOpen/useOpen';
import { Button } from '@/components/action/Button';
import { cn } from '@/lib/utils';

type AccordionProps = {
  title: string;
  variant?: 'primary' | 'secondary' | 'neutral' | 'danger' | 'outline';
};

export const Accordion = ({
  children,
  title,
  variant = 'neutral',
}: PropsWithChildren<AccordionProps>) => {
  const { isOpen, toggleOpen } = useOpen();

  return (
    <div className="rounded-lg shadow-md">
      <Button variant={variant} size="full" onClick={toggleOpen}>
        {title}
      </Button>
      <div
        aria-hidden={!isOpen}
        className={cn(
          'transition-all duration-300 ease-in-out transform-gpu origin-top overflow-hidden',
          isOpen ? 'opacity-100 scale-y-100 max-h-[500px]' : 'opacity-0 scale-y-0 max-h-0',
        )}
      >
        {children}
      </div>
    </div>
  );
};
