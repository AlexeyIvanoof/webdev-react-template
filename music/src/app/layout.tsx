import ReduxProvider from "@/store/ReduxProvider";
import "./globals.css";
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display:'swap',
  fallback: ['Arial', 'sans-serif'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html >
       <ReduxProvider>
         <body className={montserrat.className} >{children}</body>
      </ReduxProvider>
    </html>
  );
}
