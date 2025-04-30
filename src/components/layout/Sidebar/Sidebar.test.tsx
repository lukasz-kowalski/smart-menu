import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Sidebar } from '@/components/layout/Sidebar';

describe('Sidebar', () => {
  it('should render both desktop and mobile sidebar in DOM', () => {
    render(<Sidebar />);

    const desktopSidebar = screen.getByRole('complementary');
    const mobileSidebarTrigger = screen.getByRole('button');
    const companyConfigLink = screen.getByLabelText('Topbar.profile');

    expect(desktopSidebar).toBeInTheDocument();
    expect(mobileSidebarTrigger).toBeInTheDocument();
    expect(companyConfigLink).toBeInTheDocument();
  });

  it('should open sidebar drawer when mobile menu button is clicked', async () => {
    render(<Sidebar />);
    const mobileSidebarTrigger = screen.getByRole('button');
    await userEvent.click(mobileSidebarTrigger);

    const sidebarDialog = screen.getByRole('dialog');
    expect(sidebarDialog).toBeInTheDocument();
  });

  it('should close sidebar drawer when menu item is clicked', async () => {
    render(<Sidebar />);
    const mobileSidebarTrigger = screen.getByRole('button');
    await userEvent.click(mobileSidebarTrigger);

    const dashboardLink = screen.getByRole('link', { name: 'Sidebar.dashboard' });
    await userEvent.click(dashboardLink);

    const sidebarDialog = screen.queryByRole('dialog');
    expect(sidebarDialog).not.toBeInTheDocument();
  });
});
