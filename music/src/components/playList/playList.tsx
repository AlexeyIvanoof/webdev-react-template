/*import styles from "./playList.module.css";
import { TrackType } from "@/types/types";
import { GetAllTracks } from "@/api/api";
import { formatTime } from "@/types/types";

const PlayList = async () => {
  let tracks: TrackType[] = [];
  let error ="";
  try {
    tracks = await  GetAllTracks();
  } catch (err: unknown) {
    error = err instanceof Error ? "Ошибка при загрузке треков" + err.message : "Неизвестная ошибка"
  }
  
  return (
    <ul className={styles.contentPlaylist}>
       {tracks.map((value, index: number) => {
          return (
      <li className={styles.playlistItem} key={index}>
        <div className={styles.playlistTrack}>
          <div className={styles.trackTitle}>
            <div className={styles.trackTitleImage}>
              <svg className={styles.trackTitleSvg}>
                <use xlinkHref="/sprite.svg#icon-note"></use>
              </svg>
            </div>
            <div>
              <a className={styles.trackTitleLink} href="http://">
              {value.name} <span className={styles.trackTitleSpan}></span>
              </a>
            </div>
          </div>
          <div className={styles.trackAuthor}>
            <a className={styles.trackAuthorLink} href="http://">
            {value.author}
            </a>
          </div>
          <div className={styles.trackAlbum}>
            <a className={styles.trackAlbumLink} href="http://">
            {value.album}
            </a>
          </div>
          <div>
            <svg className={styles.trackTimeSvg}>
              <use xlinkHref="/sprite.svg#icon-like"></use>
            </svg>
            <span className={styles.trackTimeText}>{formatTime(value.duration_in_seconds)}</span>
          </div>
        </div>
      </li>
  );
})}
    </ul>
  );
}
export default PlayList*/


import styles from "./playList.module.css";
import { TrackType } from "@/types/types";
import { GetAllTracks } from "@/api/api";
import { formatTime } from "@/types/types";

type PlayListProps = {
  track: TrackType
}

export default function PlayList ({track}:PlayListProps) {
  const{name, author, album, duration_in_seconds} = track
  
  return (
   
      <div className={styles.playlistItem}>
        <div className={styles.playlistTrack}>
          <div className={styles.trackTitle}>
            <div className={styles.trackTitleImage}>
              <svg className={styles.trackTitleSvg}>
                <use xlinkHref="/sprite.svg#icon-note"></use>
              </svg>
            </div>
            <div>
            <a className={styles.trackTitleLink} href="http://">
               {name} <span className={styles.trackTitleSpan}></span>
              </a>
            </div>
          </div>
          <div className={styles.trackAuthor}>
            <a className={styles.trackAuthorLink} href="http://">
             {author}
            </a>
          </div>
          <div className={styles.trackAlbum}>
            <a className={styles.trackAlbumLink} href="http://">
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
