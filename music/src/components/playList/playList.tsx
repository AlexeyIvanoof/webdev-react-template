
'use client'

import styles from "./playList.module.css";
import { TrackType } from "@/types/types";
import { formatTime } from "@/types/types";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setCurrentTrack } from "@/store/features/track";

type PlayListProps = {
  track: TrackType,
  tracks: TrackType[], 
}

export default function PlayList ({track,  tracks}:PlayListProps) {
  const currentTrack = useAppSelector((state) => state.playlist.currentTrack);
  const{id, name, author, album, duration_in_seconds} = track
  const dispatch = useAppDispatch();
  const isPlaying = useAppSelector((state)=> state.playlist.isPlaying);

  const handleTrackClick = () => {
    dispatch(setCurrentTrack({ track, tracks }));
    console.log()
  };
  
  return (
   
      <div onClick={handleTrackClick} className={styles.playlistItem}>
        <div className={styles.playlistTrack}>
          <div className={styles.trackTitle}>
            <div className={styles.trackTitleImage}>
            {currentTrack?.id === id ? (
                isPlaying ? (
                  <svg className={styles.playingDot}></svg>
                ) : (
                  <svg className={styles.pauseDot}></svg>
                )
              ) : (
              <svg className={styles.trackTitleSvg}>
                <use xlinkHref="/sprite.svg#icon-note"></use>
              </svg>
              )}
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
