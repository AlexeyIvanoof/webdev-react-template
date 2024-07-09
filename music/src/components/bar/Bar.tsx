'use client'
import AudioPlayer from "../audioPlayer/AudioPlayer";
import styles from "./Bar.module.css"
import { useAppSelector } from "@/hooks";


export default function Bar() {
  const currentTrack = useAppSelector((state) => state.playlist.currentTrack);
    if(!currentTrack){
      return null
    }
    

    return (
      <div className={styles.bar}>
           <AudioPlayer/>
      </div>

    );
  }
  