import classNames from "classnames"
import styles from "./filterItem.module.css";

type Props = {
    title: string;
    list: string[];
    isActive: boolean;
    handleFilter: (filterName: string) => void;
    filterName: string;
    numberSelectedValues: number;
    isOpen: boolean;
}

export function FilterItem ({title, list, isActive,  handleFilter, filterName, numberSelectedValues, isOpen}: Props) {

return(
<div>
     <div  onClick={() =>  handleFilter(filterName)} className={classNames(styles.filterButton, styles.btnText)}  >
    {title}
    </div>
    {numberSelectedValues > 0 && (
          <div className={styles.selectedFilterCount}>{numberSelectedValues}</div>
        )}
{isActive && (
        <ul className={styles.list}>
          {list.map((item, index) => (
            <li className={classNames(styles.listItem, {[styles.active]:isOpen})}  key={index}>
              {item}
            </li>
          ))}
        </ul>
)}
</div>
)

}