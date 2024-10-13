'use client'

import CenterblockSearch from "@/components/centerBlockSesrch/centerBlockSearch";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { useEffect } from "react";
import Tracks from "@/components/tracks/Track";
import { getCategoryTracks } from "@/store/features/track";


export default function Category () {

const tokens =  useAppSelector(state => state.auth.tokens);
    const dispatch = useAppDispatch();
    const category = useAppSelector(
      (state) => state.playlist.categoryArr
    );

    useEffect(() => {
      dispatch(getCategoryTracks({access: tokens.access, refresh: tokens.refresh}))     
    }, [dispatch, tokens.access, tokens.refresh ])
   
    return(
        <>
        <CenterblockSearch/>
        <Tracks tracks={category}  filteredTracks={category} title = {'Плейлист дня'}/>
        </>
        
    )
}