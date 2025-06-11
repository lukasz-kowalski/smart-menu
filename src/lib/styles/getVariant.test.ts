import { getVariant } from '@/lib/styles/getVariant';

describe('getVariant', () => {
  const variants = ['a', 'b', 'c'];

  it('should return the variant at the given index if index is within bounds', () => {
    expect(getVariant(variants, 0)).toBe('a');
    expect(getVariant(variants, 1)).toBe('b');
    expect(getVariant(variants, 2)).toBe('c');
  });

  it('should wrap around if index is greater than variants length', () => {
    expect(getVariant(variants, 3)).toBe('a');
    expect(getVariant(variants, 4)).toBe('b');
    expect(getVariant(variants, 5)).toBe('c');
  });

  it('should handle empty variants array', () => {
    expect(getVariant([], 0)).toBeUndefined();
    expect(getVariant([], 5)).toBeUndefined();
  });

  it('should handle negative indices', () => {
    expect(getVariant(variants, -1)).toBe('c');
    expect(getVariant(variants, -3)).toBe('a');
  });
});
