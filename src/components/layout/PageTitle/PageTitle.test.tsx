import { render, screen } from '@testing-library/react';

import { PageTitle } from '@/components/layout/PageTitle';

describe('PageTitle', () => {
  it('should render the PageTitle component', () => {
    render(<PageTitle title="test" />);

    const pageTitle = screen.getByText('test', { selector: 'h1' });
    expect(pageTitle).toBeInTheDocument();
  });
});
