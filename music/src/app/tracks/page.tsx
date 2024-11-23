'use client'

import { GetAllTracks } from "@/api/api";
import CenterblockSearch from "@/components/centerBlockSesrch/centerBlockSearch";
import Tracks from "@/components/tracks/Track";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setDefaultPlaylist } from "@/store/features/track";
import { TrackType } from "@/types/types";
import { useEffect, useState } from "react";

export default function TracksPage () {
    const [error, setError] = useState(String);
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
          if(error instanceof Error)
            setError('Ошибка сети, попробуйте позже');
        });
    }, [dispatch, setError]);
  
    return(
        <>
        <CenterblockSearch/>
        <Tracks tracks={tracks} error={error}  filteredTracks={filteredTracks} title = {'Треки'}/>
        </>
        
    )
}