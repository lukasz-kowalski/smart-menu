import { render, screen } from '@testing-library/react';

import { Badge } from '@/components/info/Badge';

describe('Badge', () => {
  it('renders with default props', () => {
    render(<Badge>Default Badge</Badge>);
    expect(screen.getByText('Default Badge')).toBeInTheDocument();
  });

  it('renders with different variants', () => {
    render(
      <>
        <Badge variant="info">Info Badge</Badge>
        <Badge variant="success">Success Badge</Badge>
        <Badge variant="neutral">Neutral Badge</Badge>
        <Badge variant="warning">Warning Badge</Badge>
        <Badge variant="danger">Danger Badge</Badge>
      </>,
    );

    expect(screen.getByText('Info Badge')).toHaveClass('bg-blue-500');
    expect(screen.getByText('Success Badge')).toHaveClass('bg-green-500');
    expect(screen.getByText('Neutral Badge')).toHaveClass('bg-white');
    expect(screen.getByText('Warning Badge')).toHaveClass('bg-yellow-600');
    expect(screen.getByText('Danger Badge')).toHaveClass('bg-red-600');
  });

  it('renders with different sizes', () => {
    render(
      <>
        <Badge size="sm">Small Badge</Badge>
        <Badge size="md">Medium Badge</Badge>
        <Badge size="lg">Large Badge</Badge>
      </>,
    );

    expect(screen.getByText('Small Badge')).toHaveClass('px-1.5 py-0.5 text-sm');
    expect(screen.getByText('Medium Badge')).toHaveClass('px-2 py-1 text-base');
    expect(screen.getByText('Large Badge')).toHaveClass('px-3 py-1.5 text-lg');
  });
});
