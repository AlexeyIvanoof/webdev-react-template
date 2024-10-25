/*import classNames from "classnames"
import styles from "./filterItem.module.css";
import { setFilters } from "@/store/features/track";
import { useAppDispatch } from "@/hooks";

type Props = {
    title: string;
    list: string[];
    isActive: boolean;
    //changeFilter: (filterElement: string) => void;
    handleFilter: (filterName: string) => void;
    filterName: string;
    numberSelectedValues: number;
    //filterElement: string;
    //filterList: string[];
}

export function FilterItem ({title, list, isActive, handleFilter, filterName, numberSelectedValues}: Props) {
  const dispatch = useAppDispatch();
  const handleChange = (event: { target: { value: any; }; }) => {
    dispatch(setFilters({
      searchValue: event.target.value
    }));
  };

return(
<div>
        <div className={styles.filetrBlock}>{numberSelectedValues > 0 && (
          <div className={styles.selectedFilterCount}>{numberSelectedValues}</div>
        )}
     <div  onClick={() =>  handleFilter(filterName)} className={classNames(styles.filterButton, styles.btnText, {[styles.active]: isActive})}  >
    {title}
    </div>
    </div>
{isActive && (
        <ul className={styles.list}>
          {list.map((item, index) => (
           <li  onChange={handleChange}  className={classNames(styles.listItem)}  key={index}>
           {item}
         </li>
          ))}
        </ul>
)}
</div>
)

}*/

import classNames from "classnames";
import styles from "./filterItem.module.css";
import { setFilters } from "@/store/features/track";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { useState } from "react";

type Props = {
    title: 'author' | 'genre';
    list: string[];
    isActive: boolean;
    handleFilter: (filterName: string) => void;
    filterName: string;
    numberSelectedValues: number;
}

export function FilterItem ({ title, list, isActive, handleFilter, filterName, numberSelectedValues }: Props) {
  const dispatch = useAppDispatch();
  const  selectedOptions = useAppSelector(
    (state) => state.playlist.filterOptions
  )
  const [arrFilters, setArrFilters] = useState([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const item = event.target.id;
    const options = selectedOptions[title];
 
    dispatch(
      setFilters({
        [title]: options && options.includes(item)
          ? options.filter((el) => el !== item)
          : [...options || [], item],
      })
    );
    // Здесь обработчик клика по элементу
    if(arrFilters.includes(item)) {
      return setArrFilters(arrFilters.filter(el => el !== item)) // перебираем массив и оставляем его, но без этого элемента item
    }
    setArrFilters([...arrFilters, item])
  };

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
      {isActive && (
        <ul className={styles.list}>
        {list.map((item, index) => (
   <li key={index} className={classNames(styles.listItem, {[styles.active]: arrFilters.includes(item)})} id={item} onClick={handleChange}>
    {item}
   </li>
 ))}
        </ul>
      )}
    </div>
  );
}