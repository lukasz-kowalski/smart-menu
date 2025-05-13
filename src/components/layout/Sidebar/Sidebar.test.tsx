import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Sidebar } from '@/components/layout/Sidebar';

describe('Sidebar', () => {
  it('should render both desktop and mobile sidebar in DOM', () => {
    render(<Sidebar />);

    const desktopSidebar = screen.getByTestId('desktop-sidebar');
    const mobileSidebar = screen.getByTestId('mobile-sidebar');
    const companyConfigLink = screen.getByLabelText('components.Topbar.profile');

    expect(desktopSidebar).toBeInTheDocument();
    expect(mobileSidebar).toBeInTheDocument();
    expect(companyConfigLink).toBeInTheDocument();
  });

  it('should open sidebar drawer when mobile menu button is clicked', async () => {
    render(<Sidebar />);
    const [mobileSidebarTrigger] = screen.getAllByRole('button');
    await userEvent.click(mobileSidebarTrigger);

    const sidebarDialog = screen.getByRole('dialog');
    expect(sidebarDialog).toHaveClass('translate-x-0');
  });

  it('should close sidebar drawer when menu item is clicked', async () => {
    render(<Sidebar />);
    const [mobileSidebarTrigger] = screen.getAllByRole('button');
    await userEvent.click(mobileSidebarTrigger);

    const mobileDashboardLink = screen.getAllByRole('link', {
      name: 'components.Sidebar.dashboard',
    })[1];
    await userEvent.click(mobileDashboardLink);

    const sidebarDialog = screen.getByTestId('mobile-sidebar');
    expect(sidebarDialog).toHaveClass('-translate-x-full');
  });
});
