import './globals.css';
import { Inter } from 'next/font/google';
// Arabic (`ar`) uses Noto Kufi Arabic on the locale shell — see `src/app/fonts/notoKufiArabic.js` and `[locale]/layout.jsx`.

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-primary',
});

export const metadata = {
  title: 'GTCFX | Trade Global Markets',
  description:
    'Trade Forex, Indices, Commodities, and more with GTCFX. Fast execution, secure platform, and global access.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="font-sans bg-white text-dark antialiased">
        {children}
      </body>
    </html>
  );
}