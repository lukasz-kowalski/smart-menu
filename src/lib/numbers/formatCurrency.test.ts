import { formatCurrency } from '@/lib/numbers/formatCurrency';

describe('formatCurrency', () => {
  it('should format currency correctly', () => {
    const value = 1234.56;
    const currency = 'USD';
    const locale = 'en-US';

    const result = formatCurrency(value, currency, locale);
    expect(result).toBe('$1,234.56');
  });

  it('should handle different locales', () => {
    const value = 1234.56;
    const currency = 'EUR';
    const locale = 'de-DE';

    const result = formatCurrency(value, currency, locale);
    expect(result).toBe('1.234,56 €');
  });

  it('should use default (en-US) locale for format', () => {
    const value = 1234.56;
    const currency = 'PLN';

    const result = formatCurrency(value, currency);
    expect(result).toBe('PLN 1,234.56');
  });

  it('should handle invalid values gracefully', () => {
    const value = NaN;
    const currency = 'USD';
    const locale = 'en-US';

    const result = formatCurrency(value, currency, locale);
    expect(result).toBe('$NaN');
  });
});
