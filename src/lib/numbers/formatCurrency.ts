export const formatCurrency = (
  value: number,
  currency: string,
  locale: string = typeof navigator !== 'undefined' ? navigator.language : 'en-US',
) => {
  const options: Intl.NumberFormatOptions = {
    style: 'currency',
    currency,
  };

  return new Intl.NumberFormat(locale, options).format(value);
};
