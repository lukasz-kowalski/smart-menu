import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Home } from 'lucide-react';

import { Button } from '@/components/action/Button';

describe('Button', () => {
  it('renders with default props', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('renders with different variants', () => {
    render(
      <>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="neutral">Neutral</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="outline">Outline</Button>
      </>,
    );

    expect(screen.getByText('Primary')).toHaveClass('bg-blue-600');
    expect(screen.getByText('Secondary')).toHaveClass('bg-green-600');
    expect(screen.getByText('Neutral')).toHaveClass('bg-white');
    expect(screen.getByText('Danger')).toHaveClass('bg-red-600');
    expect(screen.getByText('Outline')).toHaveClass('bg-transparent');
  });

  it('renders with different sizes', () => {
    render(
      <>
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </>,
    );

    expect(screen.getByText('Small')).toHaveClass('px-3 py-1.5 text-sm');
    expect(screen.getByText('Medium')).toHaveClass('px-4 py-2 text-base');
    expect(screen.getByText('Large')).toHaveClass('px-5 py-2.5 text-lg');
  });

  it('calls onClick handler when clicked', async () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Click</Button>);

    await userEvent.click(screen.getByText('Click'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('does not call onClick when disabled', async () => {
    const onClick = jest.fn();
    render(
      <Button disabled onClick={onClick}>
        Disabled
      </Button>,
    );

    await userEvent.click(screen.getByText('Disabled'));
    expect(onClick).not.toHaveBeenCalled();
  });

  it('shows loading spinner and disables button', () => {
    render(<Button loading>Loading</Button>);

    expect(screen.getByRole('button')).toBeDisabled();
    expect(screen.getByText('Loading')).toBeInTheDocument();
    expect(screen.getByRole('button').querySelector('.animate-spin')).toBeInTheDocument();
  });

  it('renders iconLeft and iconRight', () => {
    render(
      <Button
        iconLeft={<Home data-testid="left-icon" />}
        iconRight={<Home data-testid="right-icon" />}
      >
        Icon
      </Button>,
    );

    expect(screen.getByTestId('left-icon')).toBeInTheDocument();
    expect(screen.getByTestId('right-icon')).toBeInTheDocument();
  });
});
