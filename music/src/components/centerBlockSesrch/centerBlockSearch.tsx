import { setFilters } from "@/store/features/track";
import styles from "./centerBlockSearch.module.css";
import { useAppDispatch } from "@/hooks";

export default function CenterblockSearch() {
  const dispatch = useAppDispatch();

  const handleChange = (event: { target: { value: string; }; }) => {
    dispatch(setFilters({
      searchValue: event.target.value,
      isActiveSort: false
    }));
  };

  return (
    <div className={styles.centerblockSearch}>
      <svg className={styles.searchSvg}>
        <use xlinkHref="/sprite.svg#icon-search"></use>
      </svg>
      <input
        className={styles.searchText}
        type="search"
        placeholder="Поиск"
        name="search"
        onChange={handleChange} 
      />
    </div>
  );
}





