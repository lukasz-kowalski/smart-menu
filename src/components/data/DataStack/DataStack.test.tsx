import { render, screen } from '@testing-library/react';
import { DataStack } from '@/components/data/DataStack/DataStack';

describe('DataStack', () => {
  it('should render DataStack', () => {
    const items = [
      {
        item: [
          { label: 'Item 1', value: 'Value 1' },
          { label: 'Item 2', value: 'Value 2' },
          { label: 'Item 3', value: 'Value 3' },
          { label: 'Item 4', value: 'Value 4' },
        ],
      },
      {
        item: [
          { label: 'Item 1', value: 'Value 5' },
          { label: 'Item 2', value: 'Value 6' },
          { label: 'Item 3', value: 'Value 7' },
          { label: 'Item 4', value: 'Value 8' },
        ],
      },
    ];

    render(<DataStack items={items} />);
    const dataStack = screen.getByTestId('data-stack');

    expect(dataStack).toBeInTheDocument();
    expect(dataStack).toHaveClass('space-y-4');
    expect(dataStack).toHaveTextContent('Item 1');
    expect(dataStack).toHaveTextContent('Value 1');
    expect(dataStack).toHaveTextContent('Item 4');
    expect(dataStack).toHaveTextContent('Value 4');
    expect(dataStack).toHaveTextContent('Value 8');
  });
});
