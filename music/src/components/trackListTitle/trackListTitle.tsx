import { TrackType } from "@/types/types";
import PlayList from "../playList/playList";
import styles from "./trackListTitle.module.css";
import classNames from "classnames";


export default function TrackListTitle({ tracks, playlist }: { tracks: TrackType[]; playlist: TrackType[]}) {
  return (
    <div className={styles.centerblockContent}>
    <div className={styles.contentTitle}>
      <div className={classNames(styles.playlistTitleCol, styles.col01)}>
        Трек
      </div>
      <div className={classNames(styles.playlistTitleCol, styles.col02)}>
        Исполнитель
      </div>
      <div className={classNames(styles.playlistTitleCol, styles.col03)}>
        Альбом
      </div>
      <div className={classNames(styles.playlistTitleCol, styles.col04)}>
        <svg className={styles.playlistTitleSvg}>
          <use xlinkHref="/sprite.svg#icon-watch"></use>
        </svg>
      </div>
    </div>
    <div className={styles.contentPlaylist}>
    {tracks.map((track)=> <PlayList key={track.id} track={track} tracks={tracks} />)}
    </div>
    </div>
  );
}
