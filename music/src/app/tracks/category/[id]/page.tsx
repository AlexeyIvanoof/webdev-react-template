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
import { useEffect, useRef, useState } from "react";
import Tracks from "@/components/tracks/Track";
//import { getCategoryTracks } from "@/store/features/track";
import { fetchCatalogTracks } from "@/api/api";
import { useParams } from "next/navigation";
import { setCategoryArr } from "@/store/features/track";


export default function Category () {
    const dispatch = useAppDispatch();
    const [error, setError] = useState(String);
    const {currentPlaylist} = useAppSelector((state) => state.playlist);
    const category = useAppSelector(
      (state) => state.playlist.categoryArr
    );
    const name = useRef();
    const params = useParams();
    useEffect(() => {
      try {
        fetchCatalogTracks(Number(params.id)).then((res) => {
          console.log(res.items);
          name.current = res.name;
          const items = res.items;
          const tracks = items.map((item: number) => currentPlaylist.find((track) => track._id === item)).filter(Boolean);
          console.log(tracks);
          dispatch(setCategoryArr(tracks));
        })
      } catch (error) {
        if(error instanceof Error)
          setError(error.message);
      }
    }, [dispatch, params.id, currentPlaylist, name]);
    return(
        <>
        <CenterblockSearch/>
        <Tracks tracks={category}  filteredTracks={category} title = {name.current}/>
        </>
        
    )
}