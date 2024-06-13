import styles from "./centerBlock.module.css"
import CenterblockSearch from "../centerBlockSesrch/centerBlockSearch"
import Filter from "../filterTrack/filterTrack"
import TrackListTitle from "../trackListTitle/trackListTitle"
import PlayList from "../playList/playList"

export default function Centerblock() {
    return (
        <div className={styles.main__centerblock}>
        <CenterblockSearch/>
         <h2 className={styles.centerblock__h2}>Треки</h2>
        <Filter/>
         <div className={styles.centerblock__content}>
          <TrackListTitle/>
          <PlayList/>
         </div>
       </div>
    )
}