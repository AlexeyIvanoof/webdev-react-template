
'use client'
import { TrackType } from "@/types/types";
import styles from "./filterTrack.module.css";
import { getUniqueValues } from "@/utils/getUniqueValues";
import { FilterItem } from "../trackListTitle/filterItem/FilterItem";
import { useState } from "react";

const SORT_OPTIONS = ["По умолчанию", "Сначала новые", "Сначала старые"];
type FilterProps = {
  tracks: TrackType[]
}

export default function Filter({tracks}:FilterProps) {

const onChangeFilterList = (filterList: string[], filterElement: string) => {
  if (filterList.includes(filterElement)) {
    // Если такое название (filterElement) уже существует в массиве, то удаляем его из filterList
    filterList = filterList.filter(item => item !== filterElement);
  } else {
    // Если нет, то пушим название фильтра в нужный массив
    filterList.push(filterElement);
  }
}

const getUniqueAuthors = getUniqueValues(tracks, "author")
const getUniqueGenres = getUniqueValues(tracks, "genre")
const [activeFilter, setActiveFilter] =  useState<string | null>(null);
const handleFilter =(filterName: string) => {
setActiveFilter((prev) => (prev === filterName ? null : filterName))
}

  return (
    <div className={styles.centerblockFilter}>
      <div className={styles.filterTitle}>Искать по:</div>
      <FilterItem title={"исполнителю"}
      list={getUniqueAuthors}
      handleFilter={handleFilter}
      isActive={activeFilter === "исполнителю"}
      filterName={"исполнителю"}
      numberSelectedValues={getUniqueAuthors.length}/>

      <FilterItem 
       title={"жанру"} 
       list={getUniqueGenres} 
       handleFilter = {handleFilter} 
       isActive = {activeFilter === "жанру"} 
       filterName={"жанру"}
       numberSelectedValues={getUniqueGenres.length}/>

      <FilterItem 
       title={"году выпуска"} 
       list={SORT_OPTIONS} 
       handleFilter = {handleFilter} 
       isActive = {activeFilter === "году выпуска"} 
       filterName={"году выпуска"}
       numberSelectedValues={SORT_OPTIONS.length}/>
    </div>
  );
}