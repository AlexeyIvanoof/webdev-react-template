import classNames from "classnames"
import styles from "./filterItem.module.css";

type Props = {
    title: string;
    list: string[];
    isActive: boolean;
    handleFilter: (value: string) => void;
   
}

export function FilterItem ({title, list, isActive}: Props) {
return(
<div>
     <div className={classNames(styles.filterButton, styles.btnText)} >
    {title}
    </div>
{isActive && (
        <ul className={styles.list}>
          {list.map((item, index) => (
            <li className={styles.listItem} key={index}>
              {item}
            </li>
          ))}
        </ul>
)}
</div>
)

}