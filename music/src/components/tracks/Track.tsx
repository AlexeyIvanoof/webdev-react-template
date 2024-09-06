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


export default function Tracks({props}) {
  const dispatch = useAppDispatch();
  const filteredTracks = useAppSelector(
    (state) => state.playlist.filteredTracks
  );
  const [tracks, setTracks] = useState<TrackType[]>([]);

  useEffect(() => {
    GetAllTracks()
      .then((tracksData) => {
        dispatch(setDefaultPlaylist(tracksData));
        setTracks(tracksData);
      })
      .catch((error) => {
        return <Error error={error} reset={() => {}} />;
      });
  }, [dispatch]);

    return (
    <>
         <h2 className={styles.centerblockH2}>{props}</h2>
          <Filter  tracks={filteredTracks}/>
          <TrackListTitle  tracks={filteredTracks} playlist={tracks}/>
    </>
    )
}