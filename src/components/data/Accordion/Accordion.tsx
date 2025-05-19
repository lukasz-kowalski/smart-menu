import { PropsWithChildren, useId } from 'react';

import { useOpen } from '@/hooks/useOpen/useOpen';
import { Button } from '@/components/action/Button';
import { cn } from '@/lib/utils';

type AccordionProps = {
  title: string;
  variant?: 'primary' | 'secondary' | 'neutral' | 'danger' | 'outline';
  initialOpen?: boolean;
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
      <Button
        variant={variant}
        size="full"
        onClick={toggleOpen}
        aria-expanded={isOpen}
        aria-controls={contentId}
        id={buttonId}
      >
        {title}
      </Button>
      <div
        id={contentId}
        role="region"
        aria-labelledby={buttonId}
        aria-hidden={!isOpen}
        className={cn(
          'transition-all duration-300 ease-in-out transform-gpu origin-top overflow-hidden',
          isOpen ? 'opacity-100 scale-y-100 max-h-[5000px]' : 'opacity-0 scale-y-0 max-h-0',
        )}
      >
        {children}
      </div>
    </div>
  );
};
