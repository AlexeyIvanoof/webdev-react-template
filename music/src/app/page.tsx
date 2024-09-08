import styles from "./page.module.css";
import Sidebar from "@/components/sidebar/sidebar";
import NawMenu from "@/components/navMenu/navMenu";
//import Centerblock from "@/components/centerblock/centerBlock";
import React from "react";
import AudioPlayer from "@/components/audioPlayer/AudioPlayer";
import Tracks from "@/components/tracks/Track";
import CenterblockSearch from "@/components/centerBlockSesrch/centerBlockSearch";

export default function Home() {
  return (
        <main className={styles.main}>
         <NawMenu/>
         <div className={styles.mainCenterblock}>
        <CenterblockSearch/>
         <Tracks/>
       </div>
         <Sidebar/>
        </main>
  );
}

