import ReduxProvider from "@/store/ReduxProvider";
import "./globals.css";
import { Montserrat } from 'next/font/google';
import AudioPlayer from "@/components/audioPlayer/AudioPlayer";
import styles from "./layout.module.css"

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
         <body className={montserrat.className} >
         <div className={styles.wrapper}>
         <div className={styles.container}>
         {children}
        <AudioPlayer/>
        <footer className={styles.footer}></footer>
      </div>
    </div>
          </body>
      </ReduxProvider>
    </html>
  );
}
