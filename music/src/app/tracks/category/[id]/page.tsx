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
import { fetchCatalogTracks } from "@/api/api";
import { useParams } from "next/navigation";
import { setDefaultPlaylist } from "@/store/features/track";
import { TrackType } from "@/types/types";


export default function Category () {
  const filteredTracks = useAppSelector(
    (state) => state.playlist.filteredTracks
  );
    const dispatch = useAppDispatch();
    const [error, setError] = useState(String);
    const [categoryTracks, setCategoryTracks] = useState<TrackType[]>([])
    const {categoryArr} = useAppSelector(
      (state) => state.playlist
    );
    const name = useRef();
    const params = useParams();
    useEffect(() => {
      try {
        fetchCatalogTracks(Number(params.id)).then((res) => {
          console.log(res.items);
          name.current = res.name;
          const items = res.items;
          const tracks = categoryArr.filter(track =>items.includes(track._id));
          console.log(tracks);
          dispatch(setDefaultPlaylist(tracks));
          setCategoryTracks(tracks);
        })
      } catch (error) {
        if(error instanceof Error)
          setError(error.message);
      }
    }, [dispatch, categoryArr, params.id]);
    return(
        <>
        <CenterblockSearch/>
        <Tracks tracks={categoryTracks}  filteredTracks={filteredTracks} title = {name.current}/>
        </>
        
    )
}