import { render, screen } from '@testing-library/react';
import { DataStackItemRow } from '@/components/data/DataStack/DataStackItemRow';

describe('DataStackItemRow', () => {
  it('should render DataStackItemRow', () => {
    render(<DataStackItemRow label="Label 1" value="Value 1" />);
    const label = screen.getByText('Label 1');
    const value = screen.getByText('Value 1');

    expect(label).toBeInTheDocument();
    expect(label).toHaveClass('text-sm font-medium text-gray-700 mb-1');
    expect(value).toBeInTheDocument();
    expect(value).toHaveClass('text-gray-900 mb-2');
  });
});
