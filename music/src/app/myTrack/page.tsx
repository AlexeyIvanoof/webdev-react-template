'use client'

import { fetchFavoriteTracks, GetAllTracks } from "@/api/api";
import CenterblockSearch from "@/components/centerBlockSesrch/centerBlockSearch";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setDefaultPlaylist } from "@/store/features/track";
import { TrackType } from "@/types/types";
import { useEffect, useState } from "react";
import Error from "@/app/error";
import TrackListTitle from "@/components/trackListTitle/trackListTitle";
import styles from "./page.module.css"
import { access } from "fs";

export default function TracksPage () {
    const [error, setError] = useState<string | null>(null);
    const dispatch = useAppDispatch();
    const filteredTracks = useAppSelector(
      (state) => state.playlist.filteredTracks
    );
    const [tracks, setTracks] = useState<TrackType[]>([]);
  
    useEffect(() => {
    fetchFavoriteTracks({ access: "access", refresh:"refresh" })
    .then((tracksData) => {
        dispatch(setDefaultPlaylist(tracksData));
        setTracks(tracksData);
    })
    .catch((error) => {
        setError(error.message);
    });
}, [dispatch]);

if (error) {
  return <Error error={error} reset={() => setError(null)} />;
}

    return(
        <>
        <CenterblockSearch/>
        <h2 className={styles.centerblockH2}>Мои треки</h2>
        <TrackListTitle  tracks={filteredTracks}/>
        </>
        
    )
}