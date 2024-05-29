import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: {
    template: '%s | Gent Dashboard',
    default: 'Gent Dashboard',
  },
  description: ' Gent Dashboard built with nextjs App Router.',
  metadataBase: new URL('https://gent-dashboard.vercel.app/'),
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
