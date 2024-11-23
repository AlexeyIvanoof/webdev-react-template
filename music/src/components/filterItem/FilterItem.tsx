import React, { useMemo, useCallback } from "react";
import classNames from "classnames";
import styles from "./filterItem.module.css";
import { setFilters } from "@/store/features/track";
import { useAppDispatch, useAppSelector } from "@/hooks";

type Props = {
  title: 'author' | 'genre';
  name: 'авторам' | 'жанру';
  list: string[];
  isActive: boolean;
  handleFilter: (filterName: string) => void;
  filterName: string;
  numberSelectedValues: number;
};

export function FilterItem({ title, list, isActive, handleFilter, filterName, numberSelectedValues, name }: Props) {
  const dispatch = useAppDispatch();
  const selectedOptions = useAppSelector((state) => state.playlist.filterOptions);

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const item = event.target.id;
    const options = selectedOptions[title] || [];

    dispatch(
      setFilters({
        [title]: options.includes(item)
          ? options.filter((el) => el !== item)
          : [...options, item],
        isActiveSort: false
      })
    );
  }, [dispatch, selectedOptions, title]);

  const memoizedListItems = useMemo(() => {
    return list.map((item, index) => (
      <li
        key={index}
        className={classNames(styles.listItem, { [styles.active]: selectedOptions[title]?.includes(item) })}
        id={item}
        onClick={handleChange}
      >
        {item}
      </li>
    ));
  }, [list, selectedOptions, title, handleChange]);

  return (
    <div>
      <div>
        {numberSelectedValues > 0 && (
          <div className={styles.selectedFilterCount}>{numberSelectedValues}</div>
        )}
        <div
          onClick={() => handleFilter(filterName)}
          className={classNames(styles.filterButton, styles.btnText, { [styles.active]: isActive })}
        >
          {name}
        </div>
      </div>
      {isActive &&
        <ul className={styles.list}>
          {memoizedListItems}
        </ul>
      }
    </div>
  );
}

type SortProps = {
  title: 'году выпуска';
  list: string[];
  isActive: boolean;
  handleFilter: (filterName: string) => void;
  filterName: string;
  numberSelectedValues: number;
};

export function FilterSortItem({ title, isActive, handleFilter, filterName, numberSelectedValues }: SortProps) {
  const dispatch = useAppDispatch();
  const selectedSortOptions = useAppSelector((state) => state.playlist.filterSort);

  const memoizedSortItems = useMemo(() => {
    return ["По умолчанию", "Сначала новые", "Сначала старые"].map((item) => (
      <li
        key={item}
        className={classNames(styles.listItem, { [styles.active]: selectedSortOptions.sort === item })}
        onClick={() => {
          dispatch(setFilters({
            sort: item,
            isActiveSort: false
          }));
        }}
      >
        {item}
      </li>
    ));
  }, [dispatch, selectedSortOptions.sort]);

  return (
    <div>
      <div className={styles.filterBlock}>
        {numberSelectedValues > 0 && (
          <div className={styles.selectedFilterCount}>{numberSelectedValues}</div>
        )}
        <div
          onClick={() => handleFilter(filterName)}
          className={classNames(styles.filterButton, styles.btnText, { [styles.active]: isActive })}
        >
          {title}
        </div>
      </div>
      {isActive &&
        <ul className={styles.list}>
          {memoizedSortItems}
        </ul>
      }
    </div>
  );
}