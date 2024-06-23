/*"use client";

import styles from "./filterTrack.module.css";
import TracksFilterCategory from "./filterTrackMenu";
import { useState } from "react";
import { filterData } from "./data";

export default function Filter() {

  const [filterValue, setFilterValue] = useState<string | null>(null);
  const handleFilterValue = (value: string) => {
    setFilterValue((prev) => (prev === value ? null : value));
  };

  return (
    <div className={styles.centerblockFilter}>
      <div className={styles.filterTitle}>Искать по:</div>
      {filterData.map((item, index) => (
          <TracksFilterCategory
            key={index}
            title={item.title}
            list={item.list}
            onClick={handleFilterValue}
            value={item.value}
            isOpen={filterValue === item.value}
          />
        ))}
    </div>
  );
}
*/
'use client'
import { TrackType } from "@/types/types";
import styles from "./filterTrack.module.css";
import classNames from "classnames";
import { getUniqueValues } from "@/utils/getUniqueValues";
import { FilterItem } from "../trackListTitle/filterItem/FilterItem";
import { useState } from "react";

const SORT_OPTIONS = ["По умолчанию", "Сначала новые", "Сначала старые"];
type FilterProps = {
  tracks: TrackType[]
}

export default function Filter({tracks}:FilterProps) {
const getUniqueAuthors = getUniqueValues(tracks, "author")
const [activeFilter, setActiveFilter] =  useState<string | null>(null);
const handleFilter =(filterName: string) => {
setActiveFilter((prev) => (prev === filterName ? null : filterName))
}

  return (
    <div className={styles.centerblockFilter}>
      <div className={styles.filterTitle}>Искать по:</div>
      <FilterItem title={"исполнителю"} list={getUniqueAuthors} handleFilter = {handleFilter} isActive = {true}/>
      <div className={classNames(styles.filterButton, styles.btnText)}>
        исполнителю
      </div>
      <div className={classNames(styles.filterButton, styles.btnText)}>
        году выпуска
      </div>
      <div className={classNames(styles.filterButton, styles.btnText)}>
        жанру
      </div>
    </div>
  );
}