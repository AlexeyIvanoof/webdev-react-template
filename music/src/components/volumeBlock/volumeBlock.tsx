import styles from "./volumeBlock.module.css";
import classNames from "classnames";


export default function VolumeBlock() {
    return (
<div className={styles.bar__volumeBlock}>
<div className={styles.volume__content}>
  <div className={styles.volume__image}>
    <svg className={styles.volume__svg}>
      <use xlinkHref="/volume.svg"></use>
    </svg>
  </div>
  <div className={classNames(styles.volume__progress, styles.btn)}>
    <input
      className="volume__progress-line _btn"
      type="range"
      name="range"
    />
  </div>
</div>
</div>
    )
}