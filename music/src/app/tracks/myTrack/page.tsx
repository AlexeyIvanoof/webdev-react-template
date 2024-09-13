'use client'

import { fetchFavoriteTracks } from "@/api/api";
import CenterblockSearch from "@/components/centerBlockSesrch/centerBlockSearch";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setLikeTrack } from "@/store/features/track";
import { TrackType } from "@/types/types";
import { useEffect, useState } from "react";
import Error from "@/app/error";
import Tracks from "@/components/tracks/Track";


export default function MyTracksPage () {
    const dispatch = useAppDispatch();
    const filteredTracks = useAppSelector(
      (state) => state.playlist.filteredTracks
    );
    const [tracks, setTracks] = useState<TrackType[]>([]);
  
    useEffect(() => {
        fetchFavoriteTracks({access: 'access', refresh: 'refresh'})
        .then((tracksData) => {
          dispatch( setLikeTrack(tracksData));
          setTracks(tracksData);
        })
        .catch((error) => {
          return <Error error={error} reset={() => {}} />;
        });
    }, [dispatch]);
  

    return(
        <>
        <CenterblockSearch/>
        <Tracks tracks={tracks}  filteredTracks={filteredTracks} title = {'Мои Треки'}/>
        </>
        
    )
}