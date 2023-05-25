import './globals.css';

export const metadata = {
  title: 'Sharebigya',
  description: 'Complete solution to Nepal Stock Market Analytics',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
