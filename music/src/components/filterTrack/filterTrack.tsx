
'use client'
import styles from "./filterTrack.module.css";
import { getUniqueValues } from "@/utils/getUniqueValues";
import { FilterItem } from "../trackListTitle/filterItem/FilterItem";
import { useState } from "react";
import { useAppSelector } from "@/hooks";

const SORT_OPTIONS = ["По умолчанию", "Сначала новые", "Сначала старые"];

export default function Filter() {

const {defaultPlaylist} = useAppSelector(state => state.playlist)
const getUniqueAuthors = getUniqueValues(defaultPlaylist, "author")
const getUniqueGenres = getUniqueValues(defaultPlaylist, "genre")
const [activeFilter, setActiveFilter] =  useState<string | null>(null);
const handleFilter =(filterName: string) => {
setActiveFilter((prev) => (prev === filterName ? null : filterName))
}
const getActiveFilterCount = (list: string[], filterName: string) => {
  return activeFilter === filterName ? list.length : 0;
};
  return (
    <div className={styles.centerblockFilter}>
      <div className={styles.filterTitle}>Искать по:</div>
      <FilterItem title={"author"}
      list={getUniqueAuthors}
      handleFilter={handleFilter}
      isActive={activeFilter === "исполнителю"}
      filterName={"исполнителю"}
      numberSelectedValues={getActiveFilterCount(getUniqueAuthors, "исполнителю")}/>

      <FilterItem 
       title={"genre"} 
       list={getUniqueGenres} 
       handleFilter = {handleFilter} 
       isActive = {activeFilter === "жанру"} 
       filterName={"жанру"}
       numberSelectedValues={getActiveFilterCount(getUniqueGenres, "жанру")}/>

      <FilterItem 
       title={"году выпуска"} 
       list={SORT_OPTIONS} 
       handleFilter = {handleFilter} 
       isActive = {activeFilter === "году выпуска"} 
       filterName={"году выпуска"}
       numberSelectedValues={getActiveFilterCount(SORT_OPTIONS, "году выпуска")}/>
    </div>
  );
}