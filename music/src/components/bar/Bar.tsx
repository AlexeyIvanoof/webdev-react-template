'use client'
import { useCurrentTrack } from "@/context/CurrentTrackProvider";
import AudioPlayer from "../audioPlayer/AudioPlayer";
import styles from "./Bar.module.css"


export default function Bar() {
    const {currentTrack} = useCurrentTrack();
    if(!currentTrack){
      return null
    }
      const {name, author} = currentTrack;

    return (
      <div className={styles.bar}>
           <AudioPlayer name={name} author={author} tracks={[]} currentTrackId={0} setCurrentTrackId={Function}/>
      </div>

    );
  }
  