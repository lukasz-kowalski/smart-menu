import { PropsWithChildren } from 'react';

import { ReactQueryProvider } from '@/app/providers/ReactQueryProvider';

export default function RootLayout({ children }: PropsWithChildren) {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
}
