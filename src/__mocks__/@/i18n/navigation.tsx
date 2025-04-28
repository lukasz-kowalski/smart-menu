export const usePathname = jest.fn(() => "/");
export const useRouter = jest.fn(() => ({
  push: jest.fn(),
  replace: jest.fn(),
  refresh: jest.fn(),
  back: jest.fn(),
}));

export const getPathname = jest.fn(() => "/");

export const redirect = jest.fn();

export const Link = ({ href, children, ...props }: any) => (
  <a href={href} {...props}>
    {children}
  </a>
);
