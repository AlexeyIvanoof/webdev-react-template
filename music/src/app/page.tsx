import styles from "./page.module.css";
import Sidebar from "@/components/sidebar/sidebar";
import NawMenu from "@/components/navMenu/navMenu";
import Centerblock from "@/components/centerblock/centerBlock";
import React from "react";
import { CurrentTrackProvider} from "@/context/CurrentTrackProvider";
import Bar from "@/components/bar/Bar";

export default function Home() {
  return (
    <body>
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <CurrentTrackProvider>
        <main className={styles.main}>
         <NawMenu/>
        <Centerblock/>
         <Sidebar/>
        </main>
        <Bar/>
        </CurrentTrackProvider>
        <footer className={styles.footer}></footer>
      </div>
    </div>
    </body>
  );
}


/* {currentTrack && <AudioPlayer tracks={tracks} currentTrack={currentTrack} setCurrentTrack={setCurrentTrack} currentTrackId={currentTrackId} setCurrentTrackId={setCurrentTrackId} />}

   // Создаем состояние для текущего трека
   const [currentTrack, setCurrentTrack] = React.useState<TrackType | null>(null);
   // Состояние для ID текущего трека
   const [currentTrackId, setCurrentTrackId] = useState(0);*/