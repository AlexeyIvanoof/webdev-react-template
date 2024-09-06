
import styles from "./centerBlock.module.css"
import CenterblockSearch from "../centerBlockSesrch/centerBlockSearch"
import Tracks from "../tracks/Track"

export default function Centerblock() {
    return (
        <div className={styles.mainCenterblock}>
        <CenterblockSearch/>
         <Tracks props="Треки"/>
       </div>
    )
}