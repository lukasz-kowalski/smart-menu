import { render, screen } from "@testing-library/react";
import { useMediaQuery } from "usehooks-ts";
import userEvent from "@testing-library/user-event";

import { Sidebar } from "@/components/layout/Sidebar";

jest.mock("usehooks-ts", () => ({
  useMediaQuery: jest.fn(),
}));

describe("Sidebar", () => {
  it("should display mobile version when width is below 768px", () => {
    (useMediaQuery as jest.Mock).mockReturnValue(false);
    render(<Sidebar />);

    const desktopSidebar = screen.queryByRole("complementary");
    const mobileSidebarTrigger = screen.getByRole("button");

    expect(desktopSidebar).not.toBeInTheDocument();
    expect(mobileSidebarTrigger).toBeInTheDocument();
  });

  it("should display desktop version when width is above 768px", () => {
    (useMediaQuery as jest.Mock).mockReturnValue(true);
    render(<Sidebar />);

    const desktopSidebar = screen.getByRole("complementary");
    const mobileSidebarTrigger = screen.queryByRole("button");

    expect(desktopSidebar).toBeInTheDocument();
    expect(mobileSidebarTrigger).not.toBeInTheDocument();
  });

  it("should open sidebar on mobile version", async () => {
    (useMediaQuery as jest.Mock).mockReturnValue(false);
    render(<Sidebar />);

    const mobileSidebarTrigger = screen.getByRole("button");
    await userEvent.click(mobileSidebarTrigger);

    const sidebar = screen.getByRole("dialog");
    expect(sidebar).toBeInTheDocument();
  });

  it("should close sidebar on mobile version", async () => {
    (useMediaQuery as jest.Mock).mockReturnValue(false);
    render(<Sidebar />);

    const mobileSidebarTrigger = screen.getByRole("button");
    await userEvent.click(mobileSidebarTrigger);

    const sidebarCloseButton = screen.getByRole("button", { hidden: false });
    await userEvent.click(sidebarCloseButton);

    const sidebar = screen.queryByRole("dialog");

    expect(sidebar).not.toBeInTheDocument();
  });

  it("should close sidebar when menu item is clicked on mobile version", async () => {
    (useMediaQuery as jest.Mock).mockReturnValue(false);
    render(<Sidebar />);

    const mobileSidebarTrigger = screen.getByRole("button");
    await userEvent.click(mobileSidebarTrigger);

    const dashboardLink = screen.getByText("Sidebar.dashboard");
    await userEvent.click(dashboardLink);

    const sidebar = screen.queryByRole("dialog");

    expect(sidebar).not.toBeInTheDocument();
  });
});
