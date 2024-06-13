import styles from "./sidebar.module.css"
import Image from "next/image";

export default function Sidebar() {
    return (
        <div className={styles.main__sidebar}>
        <div className={styles.sidebar__personal}>
          <p className={styles.sidebar__personalName}>Sergey.Ivanov</p>
          <div className={styles.sidebar__icon}>
            <svg>
              <use xlinkHref="/sprite.svg#logout"></use>
            </svg>
          </div>
        </div>
        <div className={styles.sidebar__block}>
          <div className={styles.sidebar__list}>
            <div className={styles.sidebar__item}>
              <a className={styles.sidebar__link} href="#">
                <Image
                  className="sidebar__img"
                  src="/playlist01.png"
                  alt="day's playlist"
                  width={250}
                  height={150}
                />
              </a>
            </div>
            <div className={styles.sidebar__item}>
              <a className={styles.sidebar__link} href="#">
                <Image
                  className="sidebar__img"
                  src="/playlist02.png"
                  alt="day's playlist"
                  width={250}
                  height={150}
                />
              </a>
            </div>
            <div className={styles.sidebar__item}>
              <a className={styles.sidebar__link} href="#">
                <Image
                  className="sidebar__img"
                  src="/playlist03.png"
                  alt="day's playlist"
                  width={250}
                  height={150}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    )
}