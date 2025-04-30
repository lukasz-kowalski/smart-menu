import { Topbar } from '@/components/layout/Topbar';
import { render, screen } from '@testing-library/react';

describe('Topbar', () => {
  it('should render the Topbar component', () => {
    render(<Topbar />);

    const companyConfigLink = screen.getByLabelText('components.Topbar.profile');

    expect(companyConfigLink).toBeInTheDocument();
  });
});
