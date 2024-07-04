import classNames from "classnames"
import styles from "./filterItem.module.css";

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
           <li className={classNames(styles.listItem)}  key={index}>
           {item}
         </li>
          ))}
        </ul>
)}
</div>
)

}