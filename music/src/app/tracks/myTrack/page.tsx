/*'use client'

import { fetchFavoriteTracks } from "@/api/api";
import CenterblockSearch from "@/components/centerBlockSesrch/centerBlockSearch";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setLikeTrack } from "@/store/features/track";
import { TrackType } from "@/types/types";
import { useEffect, useState } from "react";
import Error from "@/app/error";
import Tracks from "@/components/tracks/Track";


export default function MyTracksPage () {
const tokens =  useAppSelector(state => state.auth.tokens);
    const dispatch = useAppDispatch();
    const filteredTracks = useAppSelector(
      (state) => state.playlist.filteredTracks
    );
    const [tracks, setTracks] = useState<TrackType[]>([]);
  
    useEffect(() => {
        fetchFavoriteTracks({access: tokens.access, refresh: tokens.refresh,})
        .then((tracksData) => {
          dispatch( setLikeTrack(tracksData));
          setTracks(tracksData);
        })
        .catch((error) => {
          return <Error error={error} reset={() => {}} />;
        });
    }, [dispatch, tokens.access, tokens.refresh]);
  

    return(
        <>
        <CenterblockSearch/>
        <Tracks tracks={tracks}  filteredTracks={filteredTracks} title = {'Мои Треки'}/>
        </>
        
    )
}*/


'use client'

import CenterblockSearch from "@/components/centerBlockSesrch/centerBlockSearch";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { useEffect, useState } from "react";
import Tracks from "@/components/tracks/Track";
import { getFavoriteTracks, setDefaultPlaylist } from "@/store/features/track";

export default function MyTracksPage () {
const tokens =  useAppSelector(state => state.auth.tokens);
    const dispatch = useAppDispatch();
  
    const favorite = useAppSelector(
      (state) => state.playlist.favoriteTracksList
    );

    const filteredTracks = useAppSelector(
      (state) => state.playlist.filteredTracks
    );
   
   /* useEffect(() => {
      dispatch(getFavoriteTracks({access: tokens.access, refresh: tokens.refresh,}))
      
       dispatch(setDefaultPlaylist(favorite));
       console.log(favorite)
    }, [dispatch, favorite, tokens.access, tokens.refresh ])*/

    useEffect(() => {
      dispatch(getFavoriteTracks({access: tokens.access, refresh: tokens.refresh}))     
    }, [dispatch, tokens.access, tokens.refresh ])

    return(
        <>
        <CenterblockSearch/>
        <Tracks tracks={favorite}  filteredTracks={favorite} title = {'Мои Треки'}/>
        </>
        
    )
}


