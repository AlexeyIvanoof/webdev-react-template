import styles from "./filterTrack.module.css"
import classNames from "classnames";

export default function Filter() {
    return (
<div className={styles.centerblock__filter}>
<div className={styles.filter__title}>Искать по:</div>
<div className={classNames(styles.filter__button, styles.btnText)}>
  исполнителю
</div> 
<div className={classNames(styles.filter__button, styles.btnText)}>
  году выпуска
</div>
<div className={classNames(styles.filter__button, styles.btnText)}>жанру</div>
</div>
    )
}