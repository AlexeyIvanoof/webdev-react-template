
'use client'
import styles from "./filterTrack.module.css";
import { getUniqueValues } from "@/utils/getUniqueValues";
import { FilterItem } from "../filterItem/FilterItem";
import { useState } from "react";
import { useAppSelector } from "@/hooks";
import { useSelector } from "react-redux";

const SORT_OPTIONS = ["По умолчанию", "Сначала новые", "Сначала старые"];

export default function Filter () {
const activeAuthors = useAppSelector(state => state.playlist.filterOptions.author);
const activeGenre = useAppSelector(state => state.playlist.filterOptions.genre);
const activeSort = useAppSelector(state => state.playlist.filterSort.sort);
const {defaultPlaylist} = useAppSelector(state => state.playlist)
const getUniqueAuthors = getUniqueValues(defaultPlaylist, "author")
const getUniqueGenres = getUniqueValues(defaultPlaylist, "genre")
//const getUniqueSort = getUniqueValues(defaultPlaylist, "release_date")
const [activeFilter, setActiveFilter] =  useState<string | null>(null);
const handleFilter =(filterName: string) => {
setActiveFilter((prev) => (prev === filterName ? null : filterName))
}

  return (
    <div className={styles.centerblockFilter}>
      <div className={styles.filterTitle}>Искать по:</div>
      <FilterItem title={"author"}
      list={getUniqueAuthors}
      handleFilter={handleFilter}
      isActive={activeFilter === "исполнителю"}
      filterName={"исполнителю"}
      numberSelectedValues={activeAuthors.length}/>

      <FilterItem 
       title = {"genre"} 
       list={getUniqueGenres} 
       handleFilter = {handleFilter} 
       isActive = {activeFilter === "жанру"} 
       filterName={"жанру"}
       numberSelectedValues={activeGenre.length}/>

      <FilterItem 
       title = {'sort'}
       titleSort = {"sort"} 
       list={SORT_OPTIONS} 
       handleFilter = {handleFilter} 
       isActive = {activeFilter === "году выпуска"} 
       filterName={"году выпуска"}
       numberSelectedValues={activeSort === "По умолчанию" ? 0 : 1}/>
    </div>
  );
}