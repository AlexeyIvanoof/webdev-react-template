/*'use client'

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
}*/

'use client'

import CenterblockSearch from "@/components/centerBlockSesrch/centerBlockSearch";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { useEffect, useRef } from "react";
import Tracks from "@/components/tracks/Track";
import { getCategoryTracks } from "@/store/features/track";
import { fetchCatalogTracks } from "@/api/api";

type CategoryProps = {
  params: {
    id: number;
  }
};

export default function Category ({ params }: CategoryProps) {
    const dispatch = useAppDispatch();
    const {currentPlaylist} = useAppSelector((state) => state.playlist);
    const category = useAppSelector(
      (state) => state.playlist.categoryArr
    );
    const name = useRef();

    useEffect(() => {
      try {
        fetchCatalogTracks(params.id).then((res) => {
          console.log(res.items);
          name.current = res.name;
          const items = res.items;
          const tracks = items.map((item: number) => currentPlaylist.find((track) => track._id === item)).filter(Boolean);
          console.log(tracks);
          dispatch(getCategoryTracks(tracks));
        })
      } catch (error) {
  
      }
    }, [dispatch, params.id, currentPlaylist, name]);

    /*useEffect(() => {
      dispatch(getCategoryTracks({access: tokens.access, refresh: tokens.refresh}))     
    }, [dispatch, tokens.access, tokens.refresh ])*/
   
    return(
        <>
        <CenterblockSearch/>
        <Tracks tracks={category}  filteredTracks={category} title = {name.current}/>
        </>
        
    )
}