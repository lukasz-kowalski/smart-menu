import { Topbar } from '@/components/layout/Topbar';
import { render, screen } from '@testing-library/react';
import { useMediaQuery } from 'usehooks-ts';

jest.mock('usehooks-ts', () => ({
  useMediaQuery: jest.fn(),
}));

describe('Topbar', () => {
  it('should render the Topbar component', () => {
    (useMediaQuery as jest.Mock).mockReturnValue(true);

    render(<Topbar />);

    const companyConfigLink = screen.getByLabelText('Topbar.profile');

    expect(companyConfigLink).toBeInTheDocument();
  });
});
