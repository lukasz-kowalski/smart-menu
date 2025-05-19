import { useState, useCallback } from 'react';

type Output = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggleOpen: () => void;
};

export const useOpen = (initialOpen = false): Output => {
  const [isOpen, setIsOpen] = useState(initialOpen);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return { isOpen, open, close, toggleOpen };
};
