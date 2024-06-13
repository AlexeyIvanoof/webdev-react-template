import VolumeBlock from "../volumeBlock/volumeBlock";
import styles from "./audioPlayer.module.css";
import classNames from "classnames";


export default function AudioPlayer() {
    return (
        <div className={styles.bar}>
        <div className={styles.bar__content}>
          <div className={styles.bar__playerProgress}></div>
          <div className={styles.bar__playerBlock}>
            <div className={styles.bar__player}>
              <div className={styles.player__controls}>
                <div className={styles.player__btnPrev}>
                  <svg className={styles.player__btnPrevSvg}>
                    <use xlinkHref="/sprite.svg#icon-prev"></use>
                  </svg>
                </div>
                <div className={classNames(styles.player__btnPlay, styles.btn)}>
                  <svg className={styles.player__btnPlaySvg}>
                    <use xlinkHref="/sprite.svg#icon-play"></use>
                  </svg>
                </div>
                <div className={styles.player__btnNext}>
                  <svg className={styles.player__btnNextSvg}>
                    <use xlinkHref="/sprite.svg#icon-next"></use>
                  </svg>
                </div>
                <div className={classNames(styles.player__btnRepeat, styles.btnIcon)}>
                  <svg className={styles.player__btnRepeatSvg}>
                    <use xlinkHref="/sprite.svg#icon-repeat"></use>
                  </svg>
                </div>
                <div className={classNames(styles.player__btnShuffle, styles.btnIcon)}>
                  <svg className={styles.player__btnShuffleSvg}>
                      <use xlinkHref="/sprite.svg#icon-shuffle"></use>
                  </svg>
                </div>
              </div>

              <div className={styles.player__trackPlay}>
                <div className={styles.trackPlay__contain}>
                  <div className={styles.trackPlay__image}>
                    <svg className={styles.trackPlay__svg}>
                      <use xlinkHref="/sprite.svg#icon-note"></use>
                    </svg>
                  </div>
                  <div className={styles.trackPlay__author}>
                    <a className={styles.trackPlay__authorLink} href="http://"
                      >Ты та...</a>
                  </div>
                  <div className={styles.trackPlay__album}>
                    <a className={styles.trackPlay__albumLink} href="http://">Баста</a>
                  </div>
                </div>

                <div className={styles.trackPlay__likedis}>
                  <div className={classNames(styles.trackPlay__like, styles.btnIcon)}>
                    <svg className={styles.trackPlay__likeSvg}>
                      <use xlinkHref="/sprite.svg#icon-like"></use>
                    </svg>
                  </div>
                  <div className={classNames(styles.trackPlay__dislike, styles.btnIcon)}>
                    <svg className={styles.trackPlay__dislikeSvg}>
                      <use
                        xlinkHref="/sprite.svg#icon-dislike"
                      ></use>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <VolumeBlock/>
          </div>
        </div>
      </div>
    )
}