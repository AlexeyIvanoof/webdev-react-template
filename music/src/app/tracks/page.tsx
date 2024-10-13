'use client'

import { GetAllTracks } from "@/api/api";
import CenterblockSearch from "@/components/centerBlockSesrch/centerBlockSearch";
import Tracks from "@/components/tracks/Track";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setDefaultPlaylist } from "@/store/features/track";
import { TrackType } from "@/types/types";
import { useEffect, useState } from "react";
import Error from "@/app/error";
import Sidebar from "@/components/sidebar/sidebar";

export default function TracksPage () {

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
  

    return(
        <>
        <CenterblockSearch/>
        <Tracks tracks={tracks}  filteredTracks={filteredTracks} title = {'Треки'}/>
        <Sidebar/>
        </>
        
    )
}