import { render, screen, fireEvent } from '@testing-library/react';
import { Accordion } from '@/components/data/Accordion';

describe('Accordion', () => {
  const title = 'Test Title';
  const contentText = 'Accordion content';

  const renderAccordion = () =>
    render(
      <Accordion title={title}>
        <div>{contentText}</div>
      </Accordion>,
    );

  it('should render title and show content by default', () => {
    renderAccordion();

    expect(screen.getByRole('button', { name: title })).toBeInTheDocument();

    const content = screen.getByText(contentText);
    expect(content).toBeInTheDocument();
    expect(content.parentElement).toHaveAttribute('aria-hidden', 'false');
    expect(content.parentElement).toHaveClass('opacity-100');
    expect(content.parentElement).toHaveClass('scale-y-100');
  });

  it('should hide content when button is clicked', () => {
    renderAccordion();

    const button = screen.getByRole('button', { name: title });
    fireEvent.click(button);

    const content = screen.getByText(contentText);
    expect(content.parentElement).toHaveAttribute('aria-hidden', 'true');
    expect(content.parentElement).toHaveClass('opacity-0');
    expect(content.parentElement).toHaveClass('scale-y-0');
  });

  it('toggles visibility on multiple clicks', () => {
    renderAccordion();

    const button = screen.getByRole('button', { name: title });

    fireEvent.click(button);
    expect(screen.getByText(contentText).parentElement).toHaveAttribute('aria-hidden', 'true');

    fireEvent.click(button);
    expect(screen.getByText(contentText).parentElement).toHaveAttribute('aria-hidden', 'false');
  });
});
