'use client'
import { useCurrentTrack } from "@/context/CurrentTrackProvider";
import VolumeBlock from "../volumeBlock/volumeBlock";
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
        <div className={styles.barContent}>
          <div className={styles.barPlayerProgress}></div>
          <div className={styles.barPlayerBlock}>
           <AudioPlayer name={name} author={author}/>
            <VolumeBlock />
          </div>
        </div>
      </div>
    );
  }
  