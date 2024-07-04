'use client'
import styles from "./AudioPlayer.module.css";
import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import { ProgressBar } from "./progressBar/ProgressBar"
import { TrackType } from "@/types/types";
import { useCurrentTrack } from "@/context/CurrentTrackProvider";

type AudioPlayerProps ={
  tracks: TrackType[]; 
  name: string,
  author: string,
  currentTrackId: number;
  setCurrentTrackId: Function;
}

export default function AudioPlayer({name, author, setCurrentTrackId, currentTrackId, tracks }: AudioPlayerProps) {
    const {currentTrack} = useCurrentTrack()
    const {setCurrentTrack} = useCurrentTrack()
      
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
     if (currentTrackId < tracks.length - 1) {
       if (!isLoop) {
         setCurrentTrackId(currentTrackId - 1);
         setCurrentTrack(tracks[currentTrackId])
       }
     } else {
       setCurrentTrackId(0);
     }
  }

  /*const handleEnded = () => {
    // Проверяем, не является ли текущий трек последним в плейлисте
    if (currentTrackId < tracks.length - 1) {
        // Переход к следующему треку
        setCurrentTrackId(currentTrackId + 1);
    } else {
        // Или начинаем плейлист с начала
        setCurrentTrackId(0);
    }
}*/

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
    }, [currentTrackId, tracks, audio, isPlaying, handleEnded]) 

    useEffect(() => {
      const audio = audioRef.current;
      setIsPlaying(true);
      audio?.play();
    }, [currentTrack])

// Состояние громкости
const [isVolume, setIsVolume] = useState(0.5);

// Меняем громкость при изменении ползунка громкости
useEffect(() => {
 if (audio) {
   audio.volume = isVolume;
 }
}, [isVolume, audio]); 

    return (
      <div className={styles.barContent}>
         <audio
        ref={audioRef}
        src={currentTrack?.track_file}
        onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
      />
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
                  <a className={styles.trackPlayAuthorLink} href="http://">{name}</a>
                  </div>
                  <div className={styles.trackPlayAlbum}>
                  <a className={styles.trackPlayAlbumLink} href="http://">{author}</a>
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
                  </div>
                </div>
              </div>
            </div>
           
            <div className={styles.barVolumeBlock}>
      <div className={styles.volumeContent}>
        <div className={styles.volumeImage}>
          <svg className={styles.volumeSvg}>
            <use xlinkHref="/volume.svg"></use>
          </svg>
        </div>
        <div className={classNames(styles.volumeProgress, styles.btn)}>
          <input
            className={classNames(styles.volumeProgressLine, styles.btn)}
            type="range"
            name="range"
            min={0}
            max={1}
            step={0.1}
            value={isVolume}
            onChange={(e) => setIsVolume(Number(e.target.value))}
          />
        </div>
      </div>
    </div>

          </div>
        </div>
    )
};