"use client"

import { useAppDispatch, useAppSelector } from "@/hooks";
import CenterblockSearch from "../centerBlockSesrch/centerBlockSearch";
import NawMenu from "../navMenu/navMenu";
import Sidebar from "../sidebar/sidebar";
import TrackListTitle from "../trackListTitle/trackListTitle";
import styles from "./myTrack.module.css";
import { useEffect, useState } from "react";
import { GetAllTracks } from "@/api/api";
import { setDefaultPlaylist } from "@/store/features/track";
import Error from "@/app/error";
import { TrackType } from "@/types/types";

export default function MyTrackPage() {

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
        <main className={styles.main}>
         <NawMenu/>
         <div className={styles.mainCenterblock}>
        <CenterblockSearch/>
        <h2 className={styles.centerblockH2}>Мои треки</h2>
          <TrackListTitle  tracks={filteredTracks} playlist={tracks}/>
       </div>
         <Sidebar/>
        </main>
  );
}
