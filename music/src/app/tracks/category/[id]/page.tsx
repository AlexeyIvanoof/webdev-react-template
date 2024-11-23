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
          setError('Ошибка сети');
      }
    }, [dispatch, categoryArr, params.id]);
    return(
        <>
        <CenterblockSearch/>
        <Tracks tracks={categoryTracks}  filteredTracks={filteredTracks} title = {name.current}/>
        </>
        
    )
}