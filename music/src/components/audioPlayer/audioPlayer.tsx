
'use client'
import styles from "./AudioPlayer.module.css";
import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import { ProgressBar } from "./progressBar/ProgressBar"
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setIsPlaying, setIsShuffled, setNextTrack, setPrevTrack } from "../../store/features/track"
import useLikeTrack from "@/utils/useLikeTrack";

export default function AudioPlayer() {   

   const currentTrack = useAppSelector((state) => state.playlist.currentTrack);
   const isShuffled = useAppSelector((state) => state.playlist.isShuffled);
   const isPlaying = useAppSelector((state) => state.playlist.isPlaying);
   const dispatch = useAppDispatch();
   const {isLiked, handleLike}= useLikeTrack(currentTrack ? currentTrack._id : 1)
  

    // Получаем ссылку на DOM-элемент audio
    const audioRef = useRef<HTMLAudioElement>(null);
    const audio = audioRef.current;

    
    // Состояние текущего времени
    const [currentTime, setCurrentTime] = useState(0);
    // Состояние повтора
    const [isLoop, setIsLoop] = useState(false);

    const duration: number = audio?.duration || 0;
    audio ? audio.loop = isLoop : null;


    // Функция зацикливания трека
    const toggleLoop = () => {
      setIsLoop(!isLoop);
    }

    // Функция для воспроизведения и паузы
    const togglePlay = () => {
      if (audio) {
        dispatch(setIsPlaying(!isPlaying));
      }
    };


    useEffect(()=>{
      if(isPlaying){
       audio?.play();
      } else {audio?.pause()}
    }, [isPlaying, audio ]);
    
    useEffect(() => {
      audio?.addEventListener("ended", () => {
        dispatch(setNextTrack());
      });
        // Воспроизводим новый трек
        audio?.play();
  }, [audio, dispatch]);


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
      <>
      {currentTrack && (
         <div className={styles.bar}>
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

                <svg  onClick={() => {
                      dispatch(setPrevTrack());
                    }} className={classNames(styles.playerBtnPrevSvg, styles.btn)}>
                    <use href="sprite.svg#icon-prev"></use>
                  </svg>
                </div>
                <div className={styles.playerBtnPlay}>
                <svg onClick={togglePlay} className={classNames(styles.playerBtnPlaySvg, styles.btn)}>
                    {isPlaying ? <use href="sprite.svg#icon-pause"></use> : <use href="sprite.svg#icon-play"></use>}
                  </svg>
                </div>
                <div className={styles.playerBtnNext}>
                <svg   onClick={() => {
                      dispatch(setNextTrack());
                    }} className={classNames(styles.playerBtnNextSvg, styles.btn)}>
                    <use href="sprite.svg#icon-next"></use>
                  </svg>
                </div>
                <div className={classNames(styles.playerBtnRepeat, styles.btnIcon)}>
                <svg onClick={toggleLoop} className={classNames(styles.playerBtnRepeatSvg, styles.btn, isLoop ? styles.playerBtnRepeatSvgActive : null)}>
                    <use href="sprite.svg#icon-repeat"></use>
                  </svg>
                </div>
                <div   onClick={() => {
                      dispatch(setIsShuffled(!isShuffled));
                    }} className={classNames(styles.playerBtnShuffle, styles.btnIcon)}>
                  <svg className={classNames(styles.playerBtnShuffleSvg, {
                        [styles.active]: isShuffled,
                      })}>
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
                  <a className={styles.trackPlayAuthorLink} href="http://"> {currentTrack.name}</a>
                  </div>
                  <div className={styles.trackPlayAlbum}>
                  <a className={styles.trackPlayAlbumLink} href="http://"> {currentTrack.author}</a>
                  </div>
                </div>

                <div className={styles.trackPlayLikeDis}>
                  <div  onClick={handleLike}>
           {isLiked ? (
              <svg className={styles.trackTimeSvg}>
              <use className={styles.like} xlinkHref="/sprite.svg#icon-like"></use>
            </svg>
             ):(
              <svg className={styles.trackTimeSvg}>
              <use  xlinkHref="/sprite.svg#icon-like"></use>
            </svg>
             )}
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
        </div>
                    )}
                    </>
    )
};