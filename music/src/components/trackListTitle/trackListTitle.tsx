import { TrackType } from "@/types/types";
import PlayList from "../playList/playList";
import styles from "./trackListTitle.module.css";
import classNames from "classnames";

type TrackListTitleProps= {
  tracks: TrackType[];
  error: string
}

export default function TrackListTitle({tracks, error}:TrackListTitleProps) {
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
    {error && <div className={styles.Error}>{error}</div>}
    <div className={styles.contentPlaylist}>
    {tracks.map((track)=> <PlayList key={track._id} track={track} tracks={tracks} />)}
    </div>
    </div>
  );
}
