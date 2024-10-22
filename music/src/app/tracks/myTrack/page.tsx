'use client'

import CenterblockSearch from "@/components/centerBlockSesrch/centerBlockSearch";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { useEffect } from "react";
import Tracks from "@/components/tracks/Track";
import { getFavoriteTracks} from "@/store/features/track";
import { useRouter } from "next/navigation";

export default function MyTracksPage () {
  const router = useRouter();
const tokens =  useAppSelector(state => state.auth.tokens);
    const dispatch = useAppDispatch();
    const favorite = useAppSelector(
      (state) => state.playlist.favoriteTracksList
    );

    useEffect(() => {
      dispatch(getFavoriteTracks({access: tokens.access, refresh: tokens.refresh}))     
    }, [dispatch, tokens.access, tokens.refresh ])

   
    if (!tokens.access || !tokens.refresh) {
      return   router.push('/')
    }else{
    return(
        <>
        <CenterblockSearch/>
        <Tracks tracks={favorite}  filteredTracks={favorite} title = {'Мои Треки'}/>
        </>
        
    )}
}


