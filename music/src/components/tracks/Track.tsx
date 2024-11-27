'use client'

import { TrackType } from "@/types/types";
import TrackListTitle from "../trackListTitle/trackListTitle";
import Filter from "../filterTrack/filterTrack";
import styles from "./Tracks.module.css"


type TrackTypeProp = {
  filteredTracks: TrackType[];
  tracks: TrackType[];
  title: string | undefined
  error: string;
}


export default function Tracks({filteredTracks, title, error}: TrackTypeProp) {
 
    return (
    <>
          <h2 className={styles.centerblockH2}>{title}</h2>
          <Filter/>
          <TrackListTitle error={error} tracks={filteredTracks}/>
    </>
    )
}