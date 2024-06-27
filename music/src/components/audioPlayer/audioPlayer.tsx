/*'use client'
import VolumeBlock from "../volumeBlock/volumeBlock";
import styles from "./AudioPlayer.module.css";
import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import { ProgressBar } from "./progressBar/ProgressBar"
import { TrackType } from "@/types/types";


type Player = {
  tracks: TrackType[];
  currentTrack: TrackType;
  setCurrentTrack: Function;
  currentTrackId: number;
  setCurrentTrackId: Function;
};

export const AudioPlayer : React.FC<Player> = ({tracks, currentTrack, setCurrentTrack, currentTrackId, setCurrentTrackId}) => {
    // Получаем ссылку на DOM-элемент audio
    const audioRef = useRef<HTMLAudioElement>(null);
    const audio = audioRef.current;

    // Состояние для управления воспроизведением
    const [isPlaying, setIsPlaying] = useState(false);
    // Состояние текущего времени
    const [currentTime, setCurrentTime] = useState(0);
    // Состояние повтора
    const [isLoop, setIsLoop] = useState(false);

    const duration: number = audio?.duration || 0;
    audio ? audio.loop = isLoop : null;

    // Функция для переключения следующего трека
  const handleEnded = () => {
    // if (currentTrackId < tracks.length - 1) {
    //   if (!isLoop) {
    //     setCurrentTrackId(currentTrackId + 1);
    //     setCurrentTrack(tracks[currentTrackId])
    //   }
    // } else {
    //   setCurrentTrackId(0);
    // }
  }

    // Функция зацикливания трека
    const toggleLoop = () => {
      setIsLoop(!isLoop);
    }

    // Функция для воспроизведения и паузы
    const togglePlay = () => {
      if (audio) {
        if (isPlaying) {
          audio.pause();
        } else {
          audio.play();
        }
      }
      setIsPlaying(!isPlaying);
    }

     // Функция для воспроизведения следующего трека
    const nextTrack = () => {
      setCurrentTrackId((prevCurrentTrackId : number) => prevCurrentTrackId + 1);
      setCurrentTrack(tracks[currentTrackId]);
      if (isPlaying) {
       audio?.play();
      }
    }

    // Функция для воспроизведения предыдущего трека
    const prevTrack = () => {
      setCurrentTrackId(currentTrackId - 1);
      setCurrentTrack(tracks[currentTrackId]);
      if (isPlaying) {
        audio?.play();
      }
    }

    useEffect(() => {
      audio?.addEventListener("ended", handleEnded);
      isPlaying ? audio?.play() : null;
      return () => audio?.removeEventListener("ended", handleEnded);
    }, [currentTrackId, tracks, audio, isPlaying]) 
    useEffect(() => {
      const audio = audioRef.current;
      setIsPlaying(true);
      audio?.play();
    }, [currentTrack])


    return (
    <div className={styles.bar}>
      <audio
        ref={audioRef}
        src={currentTrack?.track_file}
        onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
      />
      <div className={styles.barContent}>
      <ProgressBar currentTime={currentTime} duration={duration} audioRef={audioRef.current}/>
          <div className={styles.barPlayerBlock}>
            <div className={styles.barPlayer}>
              <div className={styles.playerControls}>
                <div className={styles.playerBtnPrev}>

                <svg onClick={prevTrack} className={classNames(styles.playerBtnPrevSvg, styles.btn)}>
                    <use href="sprite.svg#icon-prev"></use>
                  </svg>
                </div>
                <div className={styles.playerBtnPlay}>
                <svg onClick={togglePlay} className={classNames(styles.playerBtnPlaySvg, styles.btn)}>
                    {isPlaying ? <use href="sprite.svg#icon-pause"></use> : <use href="sprite.svg#icon-play"></use>}
                  </svg>
                </div>
                <div className={styles.playerBtnNext}>
                <svg onClick={nextTrack} className={classNames(styles.playerBtnNextSvg, styles.btn)}>
                    <use href="sprite.svg#icon-next"></use>
                  </svg>
                </div>
                <div className={classNames(styles.playerBtnRepeat, styles.btnIcon)}>
                <svg onClick={toggleLoop} className={classNames(styles.playerBtnRepeatSvg, styles.btn, isLoop ? styles.playerBtnRepeatSvgActive : null)}>
                    <use href="sprite.svg#icon-repeat"></use>
                  </svg>
                </div>
                <div className={classNames(styles.playerBtnShuffle, styles.btnIcon)}>
                  <svg className={styles.playerBtnShuffleSvg}>
                    <use href="sprite.svg#icon-shuffle"></use>
                  </svg>
                </div>
              </div>
              <div className={classNames(styles.playerTrackPlay, styles.trackPlay)}>
                <div className={styles.trackPlayContain}>
                  <div className={styles.trackPlayImage}>
                    <svg className={styles.trackPlaySvg}>
                      <use href="sprite.svg#icon-note"></use>
                    </svg>
                  </div>
                  <div className={styles.trackPlayAuthor}>
                  <a className={styles.trackPlayAuthorLink} href="http://">{currentTrack.name}</a>
                  </div>
                  <div className={styles.trackPlayAlbum}>
                  <a className={styles.trackPlayAlbumLink} href="http://">{currentTrack.author}</a>
                  </div>
                </div>

                <div className={styles.trackPlayLikeDis}>
                  <div className={classNames(styles.trackPlayLike, styles.btnIcon)}>
                    <svg className={styles.trackPlayLikeSvg}>
                      <use href="sprite.svg#icon-like"></use>
                    </svg>
                  </div>
                  <div className={classNames(styles.track_playDislike, styles.btnIcon)}>
                    <svg className={styles.trackPlayDislikeSvg}>
                      <use href="sprite.svg#icon-dislike"></use>
                    </svg>
                  </div>/
                </div>
              </div>
            </div>
            <VolumeBlock/>
          </div>
        </div>
      </div>
    )
}
*/

'use client'
import VolumeBlock from "../volumeBlock/volumeBlock";
import styles from "./AudioPlayer.module.css";
import classNames from "classnames";

type AudioPlayerProps ={
  name: string,
  author: string,
}

export default function AudioPlayer({name, author}: AudioPlayerProps) {
  return (
    <>
          <div className={styles.barPlayer}>
            <div className={styles.playerControls}>
              <div className={styles.playerBtnPrev}>
                <svg className={styles.playerBtnPrevSvg}>
                  <use xlinkHref="/sprite.svg#icon-prev"></use>
                </svg>
              </div>
              <div className={classNames(styles.playerBtnPlay, styles.btn)}>
                <svg className={styles.playerBtnPlaySvg}>
                  <use xlinkHref="/sprite.svg#icon-play"></use>
                </svg>
              </div>
              <div className={styles.playerBtnNext}>
                <svg className={styles.playerBtnNextSvg}>
                  <use xlinkHref="/sprite.svg#icon-next"></use>
                </svg>
              </div>
              <div
                className={classNames(styles.playerBtnRepeat, styles.btnIcon)}
              >
                <svg className={styles.playerBtnRepeatSvg}>
                  <use xlinkHref="/sprite.svg#icon-repeat"></use>
                </svg>
              </div>
              <div
                className={classNames(styles.playerBtnShuffle, styles.btnIcon)}
              >
                <svg className={styles.playerBtnShuffleSvg}>
                  <use xlinkHref="/sprite.svg#icon-shuffle"></use>
                </svg>
              </div>
            </div>

            <div className={styles.playerTrackPlay}>
              <div className={styles.trackPlayContain}>
                <div className={styles.trackPlayImage}>
                  <svg className={styles.trackPlaySvg}>
                    <use xlinkHref="/sprite.svg#icon-note"></use>
                  </svg>
                </div>
                <div className={styles.trackPlayAuthor}>
                  <a className={styles.trackPlayAuthorLink} href="http://">
                   {name}
                  </a>
                </div>
                <div className={styles.trackPlayAlbum}>
                  <a className={styles.trackPlayAlbumLink} href="http://">
                   {author}
                  </a>
                </div>
              </div>

              <div className={styles.trackPlayLikedis}>
                <div
                  className={classNames(styles.trackPlayLike, styles.btnIcon)}
                >
                  <svg className={styles.trackPlayLikeSvg}>
                    <use xlinkHref="/sprite.svg#icon-like"></use>
                  </svg>
                </div>
                <div
                  className={classNames(
                    styles.trackPlayDislike,
                    styles.btnIcon
                  )}
                >
                  <svg className={styles.trackPlayDislikeSvg}>
                    <use xlinkHref="/sprite.svg#icon-dislike"></use>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <VolumeBlock />
    </>
  );
}
