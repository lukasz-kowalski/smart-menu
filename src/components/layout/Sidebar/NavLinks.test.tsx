import { render, screen } from "@testing-library/react";

import NavLinks from "@/components/layout/Sidebar/NavLinks";

describe("NavLinks", () => {
  it("should render component correctly", async () => {
    const navItems = [
      {
        label: "Dashboard",
        href: "/",
        icon: <span>Icon</span>,
      },
      {
        label: "Menu",
        href: "/menu",
        icon: <span>Icon</span>,
      },
    ];

    const closeMenu = jest.fn();

    render(<NavLinks navItems={navItems} closeMenu={closeMenu} />);

    const link = screen.getByText("Dashboard");
    expect(link).toBeInTheDocument();

    const nav = screen.getByRole("navigation").querySelectorAll("a");
    expect(nav.length).toBe(2);
  });
});
