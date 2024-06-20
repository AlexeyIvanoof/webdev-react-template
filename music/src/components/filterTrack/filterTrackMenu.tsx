/*'use client'

import stules from "./filterTrackMenu.module.css"
import { useEffect } from "react";
type Props = {
    nameCategory: string;
    content: string[] | number[];
    onClick: (value: string) => void;
    value: string;
    isActiveCategory:  string;
    setActiveCategory:  any;
    numberSelectedValues:  number;
  };

export function TracksFilterCategory({
    nameCategory,
    content,
    isActiveCategory,
    setActiveCategory,
    numberSelectedValues,
  } :Props) {
    const InstallСategoryFilter = () =>
      setActiveCategory(isActiveCategory === nameCategory ? "" : nameCategory);
  
    useEffect(() => {
      console.log("numberSelectedValues", numberSelectedValues);
    }, [numberSelectedValues]);
  
    return (
      <div className={ stules.filterCategoryName }>
        <button className={stules.filterButton}
          type="button"
          onClick={InstallСategoryFilter}
        >
          {nameCategory}
        </button>
        {numberSelectedValues > 0 && (
          <div className={stules.selectedFilterCount}>{numberSelectedValues}</div>
        )}
  
        {isActiveCategory === nameCategory && (
          <div className={stules.filterCategoryMenu}>
            <ul className={stules.filterList}>{content}</ul>
          </div>
        )}
      </div>
    );
  }*/

    import styles from "./filterTrackMenu.module.css";
type Props = {
  title: string;
  list: string[] | number[];
  onClick: (value: string) => void;
  value: string;
  isOpen: boolean;
};

const TracksFilterCategory = ({ title, list, onClick, value, isOpen }: Props) => {
  return (
    <div>
      <button className={styles.filterBtn} onClick={() => onClick(value)}>
        {title}
      </button>
      {isOpen && (
        <ul className={styles.list}>
          {list.map((item, index) => (
            <li className={styles.listItem} key={index}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TracksFilterCategory;