'use client'
import styles from "./page.module.css";
import { AudioPlayer } from "@/components/audioPlayer/AudioPlayer";
import Sidebar from "@/components/sidebar/sidebar";
import NawMenu from "@/components/navMenu/navMenu";
import Centerblock from "@/components/centerblock/centerBlock";
import { useState } from "react";
import React from "react";
import { TrackType } from "@/types/types";

type Home ={
tracks: TrackType[];
}

export default function Home({tracks}:Home) {

   // Создаем состояние для текущего трека
   const [currentTrack, setCurrentTrack] = React.useState<TrackType | null>(null);
   // Состояние для ID текущего трека
   const [currentTrackId, setCurrentTrackId] = useState(0);
  return (
    <body>
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <main className={styles.main}>
         <NawMenu/>
        <Centerblock/>
         <Sidebar/>
        </main>
       {currentTrack && <AudioPlayer tracks={tracks} currentTrack={currentTrack} setCurrentTrack={setCurrentTrack} currentTrackId={currentTrackId} setCurrentTrackId={setCurrentTrackId} />}
        <footer className={styles.footer}></footer>
      </div>
    </div>
    </body>
  );
}
