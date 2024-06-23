import classNames from "classnames"
import styles from "./filterItem.module.css";
import { useEffect } from "react";

type Props = {
    title: string;
    list: string[];
    isActive: boolean;
    handleFilter: (filterName: string) => void;
    filterName: string;
    numberSelectedValues: number;
   
}

export function FilterItem ({title, list, isActive,  handleFilter, filterName, numberSelectedValues}: Props) {

    useEffect(() => {
        console.log("numberSelectedValues", numberSelectedValues);
      }, [numberSelectedValues]);

return(
<div>
     <div className={classNames(styles.filterButton, styles.btnText)}  onClick={() =>  handleFilter(filterName)} >
    {title}
    </div>
    {numberSelectedValues > 0 && (
          <div className={styles.selectedFilterCount}>{numberSelectedValues}</div>
        )}
{isActive && (
        <ul className={styles.list}>
          {list.map((item, index) => (
            <li className={styles.listItem} key={index} >
              {item}
            </li>
          ))}
        </ul>
)}
</div>
)

}