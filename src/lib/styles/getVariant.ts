export const getVariant = <T>(variants: T[], index: number): T => {
  const length = variants.length;

  const normalizedIndex = ((index % length) + length) % length;

  return variants[normalizedIndex];
};
