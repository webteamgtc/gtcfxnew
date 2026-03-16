import './globals.css';

export const metadata = {
  title: 'GTC FX',
  description: 'Trading & Finance',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
