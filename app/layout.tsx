// Import your global styles here in the root layout(best practice)
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts.ts';
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
