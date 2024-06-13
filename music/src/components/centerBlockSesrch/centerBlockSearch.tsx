import styles from "./centerBlockSearch.module.css"

export default function CenterblockSearch() {
    return (
        <div className={styles.centerblock__search}>
        <svg className={styles.search__svg}>
          <use xlinkHref="/sprite.svg#icon-search"></use>
        </svg>
        <input
          className={styles.search__text}
          type="search"
          placeholder="Поиск"
          name="search"
        />
      </div>
    )
}