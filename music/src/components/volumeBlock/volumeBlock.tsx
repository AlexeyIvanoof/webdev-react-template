'use client'

import { useEffect, useRef, useState } from "react";
import styles from "./volumeBlock.module.css";
import classNames from "classnames";

export default function VolumeBlock() {

     // Получаем ссылку на DOM-элемент audio
     const audioRef = useRef<HTMLAudioElement>(null);
     const audio = audioRef.current;

   // Состояние громкости
   const [isVolume, setIsVolume] = useState("0.5");

   // Меняем громкость при изменении ползунка громкости
   useEffect(() => {
    if (audio) {
      audio.volume = parseFloat(isVolume);
    }
  }, [isVolume, audio]); 

  return (
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
            min="0"
            max="1"
            step="0.01"
            value={isVolume}
            onChange={(e) => setIsVolume(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
