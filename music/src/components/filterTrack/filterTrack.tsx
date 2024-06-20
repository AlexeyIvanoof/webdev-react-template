"use client";

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
