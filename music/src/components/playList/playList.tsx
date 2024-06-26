import styles from "./playList.module.css";
import { TrackType } from "@/types/types";
import { formatTime } from "@/types/types";

type PlayListProps = {
  track: TrackType
  setCurrentTrack: Function;
  setCurrentTrackId: Function;
}

export default function PlayList ({track, setCurrentTrack, setCurrentTrackId}:PlayListProps) {
  const{name, author, album, duration_in_seconds} = track
  
  return (
   
      <div  onClick={() => {setCurrentTrack(track); setCurrentTrackId(track.id)}} className={styles.playlistItem}>
        <div className={styles.playlistTrack}>
          <div className={styles.trackTitle}>
            <div className={styles.trackTitleImage}>
              <svg className={styles.trackTitleSvg}>
                <use xlinkHref="/sprite.svg#icon-note"></use>
              </svg>
            </div>
            <div>
            <a className={styles.trackTitleLink}>
               {name} <span className={styles.trackTitleSpan}></span>
              </a>
            </div>
          </div>
          <div className={styles.trackAuthor}>
            <a className={styles.trackAuthorLink}>
             {author}
            </a>
          </div>
          <div className={styles.trackAlbum}>
            <a className={styles.trackAlbumLink}>
             {album}
            </a>
          </div>
          <div>
            <svg className={styles.trackTimeSvg}>
              <use xlinkHref="/sprite.svg#icon-like"></use>
            </svg>
            <span className={styles.trackTimeText}>{formatTime(duration_in_seconds)}</span>
          </div>
        </div>
      </div>
  );
}
