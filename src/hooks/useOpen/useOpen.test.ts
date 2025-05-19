import { renderHook, act } from '@testing-library/react';
import { useOpen } from './useOpen';

describe('useOpen', () => {
  it('should be closed by default', () => {
    const { result } = renderHook(() => useOpen());

    expect(result.current.isOpen).toBe(false);
  });

  it('should set initial state by passing initialOpen argument', () => {
    const { result } = renderHook(() => useOpen(true));

    expect(result.current.isOpen).toBe(true);
  });

  it('should open when open is called', () => {
    const { result } = renderHook(() => useOpen());

    act(() => {
      result.current.open();
    });

    expect(result.current.isOpen).toBe(true);
  });

  it('should close when close is called', () => {
    const { result } = renderHook(() => useOpen());

    act(() => {
      result.current.open();
      result.current.close();
    });

    expect(result.current.isOpen).toBe(false);
  });

  it('should toggle open state', () => {
    const { result } = renderHook(() => useOpen());

    act(() => {
      result.current.toggleOpen();
    });
    expect(result.current.isOpen).toBe(true);

    act(() => {
      result.current.toggleOpen();
    });
    expect(result.current.isOpen).toBe(false);
  });
});
