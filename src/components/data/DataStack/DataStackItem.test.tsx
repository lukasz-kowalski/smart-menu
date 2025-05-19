import { render, screen } from '@testing-library/react';
import { DataStackItem } from '@/components/data/DataStack/DataStackItem';

describe('DataStackItem', () => {
  it('should render DataStackItem', () => {
    const item = [
      { label: 'Item 1', value: 'Value 1' },
      { label: 'Item 2', value: 'Value 2' },
      { label: 'Item 3', value: 'Value 3' },
      { label: 'Item 4', value: 'Value 4' },
    ];

    render(<DataStackItem item={item} />);
    const stackItem = screen.getByTestId('data-stack-item');

    expect(stackItem).toBeInTheDocument();
    expect(stackItem).toHaveClass(
      'rounded-lg border border-gray-200 p-4 shadow-sm divide-y divide-gray-200 space-y-4',
    );
    expect(stackItem).toHaveTextContent('Item 1');
    expect(stackItem).toHaveTextContent('Value 1');
    expect(stackItem).toHaveTextContent('Item 4');
    expect(stackItem).toHaveTextContent('Value 4');
  });
});
