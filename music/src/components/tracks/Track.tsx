'use client'
import { GetAllTracks } from "@/api/api";
import { TrackType } from "@/types/types";
import TrackListTitle from "../trackListTitle/trackListTitle";
import Filter from "../filterTrack/filterTrack";
import styles from "./Tracks.module.css"
import { useAppDispatch, useAppSelector } from "@/hooks";
import { useEffect, useState } from "react";
import { setDefaultPlaylist } from "@/store/features/track";
import Error from "@/app/error";

type TrackTypeProp = {
  filteredTracks: TrackType[];
  tracks: TrackType[];
  title: string
}


export default function Tracks({filteredTracks, tracks, title}: TrackTypeProp) {
 
    return (
    <>
         <h2 className={styles.centerblockH2}>{title}</h2>
          <Filter  tracks={filteredTracks}/>
          <TrackListTitle  tracks={filteredTracks} playlist={tracks}/>
    </>
    )
}