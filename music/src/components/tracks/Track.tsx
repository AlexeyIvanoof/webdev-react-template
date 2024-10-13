'use client'

import { TrackType } from "@/types/types";
import TrackListTitle from "../trackListTitle/trackListTitle";
import Filter from "../filterTrack/filterTrack";
import styles from "./Tracks.module.css"


type TrackTypeProp = {
  filteredTracks: TrackType[];
  tracks: TrackType[];
  title: string
}


export default function Tracks({filteredTracks, title}: TrackTypeProp) {
 
    return (
    <>
          <h2 className={styles.centerblockH2}>{title}</h2>
          <Filter/>
          <TrackListTitle  tracks={filteredTracks}/>
    </>
    )
}