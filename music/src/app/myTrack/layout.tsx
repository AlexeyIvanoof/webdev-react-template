import AudioPlayer from "@/components/audioPlayer/AudioPlayer";
import NawMenu from "@/components/navMenu/navMenu";
import Sidebar from "@/components/sidebar/sidebar";
import styles from "./page.module.css";

export default function RootLayout({
    children,
  }: Readonly<{children: React.ReactNode;}>) {
    return (
     <>
      <main className={styles.main}>
         <NawMenu/>
         <div className={styles.mainCenterblock}>
         {children}
         </div>
         <Sidebar/>
      </main>
           <AudioPlayer/>
    </>
    );
  }