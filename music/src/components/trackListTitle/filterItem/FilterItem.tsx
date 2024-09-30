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
import { useAppDispatch } from "@/hooks";

type Props = {
    title: string;
    list: string[];
    isActive: boolean;
    handleFilter: (filterName: string) => void;
    filterName: string;
    numberSelectedValues: number;
}

export function FilterItem ({ title, list, isActive, handleFilter, filterName, numberSelectedValues }: Props) {
  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilters({
      searchValue: event.target.value
    }));
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
            <li key={item} className={classNames(styles.listItem)}>
              <input 
                type="checkbox" 
                id={`filter-item-${index}`} 
                value={item} 
                onChange={handleChange} 
              />
              <label htmlFor={`filter-item-${index}`}>{item}</label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}