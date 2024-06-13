import styles from "./playList.module.css"

export default function PlayList() {
    return (
        <div className={styles.content__playlist}>
        <div className={styles.playlist__item}>
          <div className={styles.playlist__track}>
            <div className={styles.track__title}>
              <div className={styles.track__titleImage}>
                <svg className={styles.track__titleSvg}>
                  <use xlinkHref="/sprite.svg#icon-note"></use>
                </svg>
              </div>
              <div>
                <a className={styles.track__titleLink} href="http://"
                  >Guilt <span className={styles.track__titleSpan}></span></a>
              </div>
            </div>
            <div className={styles.track__author}>
              <a className={styles.track__authorLink} href="http://">Nero</a>
            </div>
            <div className={styles.track__album}>
              <a className={styles.track__albumLink} href="http://"
                >Welcome Reality</a>
            </div>
            <div>
              <svg className={styles.track__timeSvg}>
                <use xlinkHref="/sprite.svg#icon-like"></use>
              </svg>
              <span className={styles.track__timeText}>4:44</span>
            </div>
          </div>
        </div>

        <div className={styles.playlist__item}>
          <div className={styles.playlist__track}>
            <div className={styles.track__title}>
              <div className={styles.track__titleImage}>
                <svg className={styles.track__titleSvg}>
                  <use xlinkHref="/sprite.svg#icon-note"></use>
                </svg>
              </div>
              <div>
                <a className={styles.track__titleLink} href="http://"
                  >Elektro <span className="track__titleSpan"></span></a>
              </div>
            </div>
            <div className={styles.track__author}>
              <a className={styles.track__authorLink} href="http://"
                >Dynoro, Outwork, Mr. Gee</a>
            </div>
            <div className={styles.track__album}>
              <a className={styles.track__albumLink} href="http://">Elektro</a>
            </div>
            <div className={styles.track__time}>
              <svg className={styles.track__timeSvg}>
                <use xlinkHref="/sprite.svg#icon-like"></use>
              </svg>
              <span className={styles.track__timeText}>2:22</span>
            </div>
          </div>
        </div>

        <div className={styles.playlist__item}>
          <div className={styles.playlist__track}>
            <div className={styles.track__title}>
              <div className={styles.track__titleImage}>
                <svg className={styles.track__titleSvg}>
                  <use xlinkHref="/sprite.svg#icon-note"></use>
                </svg>
              </div>
              <div>
                <a className={styles.track__titleLink} href="http://"
                  >I’m Fire <span className={styles.track__titleSpan}></span></a>
              </div>
            </div>
            <div className={styles.track__author}>
              <a className={styles.track__authorLink} href="http://"
                >Ali Bakgor</a>
            </div>
            <div className={styles.track__album}>
              <a className={styles.track__albumLink} href="http://">I’m Fire</a>
            </div>
            <div className={styles.track__time}>
              <svg className={styles.track__timeSvg}>
                <use xlinkHref="/sprite.svg#icon-like"></use>
              </svg>
              <span className={styles.track__timeText}>2:22</span>
            </div>
          </div>
        </div>

        <div className={styles.playlist__item}>
          <div className={styles.playlist__track}>
            <div className={styles.track__title}>
              <div className={styles.track__titleImage}>
                <svg className={styles.track__titleSvg}>
                  <use xlinkHref="/sprite.svg#icon-note"></use>
                </svg>
              </div>
              <div>
                <a className={styles.track__titleLink} href="http://"
                  >Non Stop
                  <span className={styles.track__titleSpan}>(Remix)</span></a>
              </div>
            </div>
            <div className={styles.track__author}>
              <a className={styles.track__authorLink} href="http://"
                >Стоункат, Psychopath</a>
            </div>
            <div className={styles.track__album}>
              <a className={styles.track__albumLink} href="http://">Non Stop</a>
            </div>
            <div className={styles.track__time}>
              <svg className={styles.track__timeSvg}>
                <use xlinkHref="/sprite.svg#icon-like"></use>
              </svg>
              <span className={styles.track__timeText}>4:12</span>
            </div>
          </div>
        </div>

        <div className={styles.playlist__item}>
          <div className={styles.playlist__track}>
            <div className={styles.track__title}>
              <div className={styles.track__titleImage}>
                <svg className={styles.track__titleSvg}>
                  <use xlinkHref="/sprite.svg#icon-note"></use>
                </svg>
              </div>
              <div>
                <a className={styles.track__titleLink} href="http://"
                  >Run Run
                  <span className={styles.track__titleSpan}
                    >(feat. AR/CO)</span></a>
              </div>
            </div>
            <div className={styles.track__author}>
              <a className={styles.track__authorLink} href="http://"
                >Jaded, Will Clarke, AR/CO</a>
            </div>
            <div className={styles.track__album}>
              <a className={styles.track__albumLink} href="http://">Run Run</a>
            </div>
            <div className={styles.track__time}>
              <svg className={styles.track__timeSvg}>
                <use xlinkHref="/sprite.svg#icon-like"></use>
              </svg>
              <span className={styles.track__timeText}>2:54</span>
            </div>
          </div>
        </div>

        <div className={styles.playlist__item}>
          <div className={styles.playlist__track}>
            <div className={styles.track__title}>
              <div className={styles.track__titleImage}>
                <svg className={styles.track__titleSvg}>
                  <use xlinkHref="/sprite.svg#icon-note"></use>
                </svg>
              </div>
              <div>
                <a className={styles.track__titleLink} href="http://"
                  >Eyes on Fire
                  <span className={styles.track__titleSpan}
                    >(Zeds Dead Remix)</span></a>
              </div>
            </div>
            <div className={styles.track__author}>
              <a className={styles.track__authorLink} href="http://"
                >Blue Foundation, Zeds Dead</a>
            </div>
            <div className={styles.track__album}>
              <a className={styles.track__albumLink} href="http://"
                >Eyes on Fire</a>
            </div>
            <div className={styles.track__time}>
              <svg className={styles.track__timeSvg}>
                <use xlinkHref="/sprite.svg#icon-like"></use>
              </svg>
              <span className={styles.track__timeText}>5:20</span>
            </div>
          </div>
        </div>

        <div className={styles.playlist__item}>
          <div className={styles.playlist__track}>
            <div className={styles.track__title}>
              <div className={styles.track__titleImage}>
                <svg className={styles.track__titleSvg}>
                  <use xlinkHref="/sprite.svg#icon-note"></use>
                </svg>
              </div>
              <div>
                <a className={styles.track__titleLink} href="http://"
                  >Mucho Bien
                  <span className={styles.track__titleSpan}
                    >(Hi Profile Remix)</span></a>
              </div>
            </div>
            <div className={styles.track__author}>
              <a className={styles.track__authorLink} href="http://"
                >HYBIT, Mr. Black, Offer Nissim, Hi Profile</a>
            </div>
            <div className={styles.track__album}>
              <a className={styles.track__albumLink} href="http://">Mucho Bien</a>
            </div>
            <div className={styles.track__time}>
              <svg className={styles.track__timeSvg}>
                <use xlinkHref="/sprite.svg#icon-like"></use>
              </svg>
              <span className={styles.track__timeText}>3:41</span>
            </div>
          </div>
        </div>

        <div className={styles.playlist__item}>
          <div className={styles.playlist__track}>
            <div className={styles.track__title}>
              <div className={styles.track__titleImage}>
                <svg className={styles.track__titleSvg}>
                  <use xlinkHref="/sprite.svg#icon-note"></use>
                </svg>
              </div>
              <div>
                <a className={styles.track__titleLink} href="http://"
                  >Knives n Cherries
                  <span className={styles.track__titleSpan}></span></a>
              </div>
            </div>
            <div className={styles.track__author}>
              <a className={styles.track__authorLink} href="http://">minthaze</a>
            </div>
            <div className={styles.track__album}>
              <a className={styles.track__albumLink} href="http://"
                >Captivating</a>
            </div>
            <div className={styles.track__time}>
              <svg className={styles.track__timeSvg}>
                <use xlinkHref="/sprite.svg#icon-like"></use>
              </svg>
              <span className={styles.track__timeText}>1:48</span>
            </div>
          </div>
        </div>

        <div className={styles.playlist__item}>
          <div className={styles.playlist__track}>
            <div className={styles.track__title}>
              <div className={styles.track__titleImage}>
                <svg className={styles.track__titleSvg}>
                  <use xlinkHref="/sprite.svg#icon-note"></use>
                </svg>
              </div>
              <div>
                <a className={styles.track__titleLink} href="http://"
                  >Knives n Cherries
                  <span className={styles.track__titleSpan}></span></a>
              </div>
            </div>
            <div className={styles.track__author}>
              <a className={styles.track__authorLink} href="http://">minthaze</a>
            </div>
            <div className={styles.track__album}>
              <a className={styles.track__albumLink} href="http://"
                >Captivating</a>
            </div>
            <div className={styles.track__time}>
              <svg className={styles.track__timeSvg}>
                <use xlinkHref="/sprite.svg#icon-like"></use>
              </svg>
              <span className={styles.track__timeText}>1:48</span>
            </div>
          </div>
        </div>
        <div className={styles.playlist__item}>
          <div className={styles.playlist__track}>
            <div className={styles.track__title}>
              <div className={styles.track__titleImage}>
                <svg className={styles.track__titleSvg}>
                  <use xlinkHref="/sprite.svg#icon-note"></use>
                </svg>
              </div>
              <div>
                <a className={styles.track__titleLink} href="http://"
                  >Knives n Cherries
                  <span className={styles.track__titleSpan}></span></a>
              </div>
            </div>
            <div className={styles.track__author}>
              <a className={styles.track__authorLink} href="http://">minthaze</a>
            </div>
            <div className={styles.track__album}>
              <a className={styles.track__albumLink} href="http://"
                >Captivating</a>
            </div>
            <div className={styles.track__time}>
              <svg className={styles.track__timeSvg}>
                <use xlinkHref="/sprite.svg#icon-like"></use>
              </svg>
              <span className={styles.track__timeText}>1:48</span>
            </div>
          </div>
        </div>
        <div className={styles.playlist__item}>
          <div className={styles.playlist__track}>
            <div className={styles.track__title}>
              <div className={styles.track__titleImage}>
                <svg className={styles.track__titleSvg}>
                  <use xlinkHref="/sprite.svg#icon-note"></use>
                </svg>
              </div>
              <div>
                <a className={styles.track__titleLink} href="http://"
                  >Knives n Cherries
                  <span className={styles.track__titleSpan}></span></a>
              </div>
            </div>
            <div className={styles.track__author}>
              <a className={styles.track__authorLink} href="http://">minthaze</a>
            </div>
            <div className={styles.track__album}>
              <a className={styles.track__albumLink} href="http://"
                >Captivating</a>
            </div>
            <div className={styles.track__time}>
              <svg className={styles.track__timeSvg}>
                <use xlinkHref="/sprite.svg#icon-like"></use>
              </svg>
              <span className={styles.track__timeText}>1:48</span>
            </div>
          </div>
        </div>
        <div className={styles.playlist__item}>
          <div className={styles.playlist__track}>
            <div className={styles.track__title}>
              <div className={styles.track__titleImage}>
                <svg className={styles.track__titleSvg}>
                  <use xlinkHref="/sprite.svg#icon-note"></use>
                </svg>
              </div>
              <div>
                <a className={styles.track__titleLink} href="http://"
                  >Knives n Cherries
                  <span className={styles.track__titleSpan}></span></a>
              </div>
            </div>
            <div className={styles.track__author}>
              <a className={styles.track__authorLink} href="http://">minthaze</a>
            </div>
            <div className={styles.track__album}>
              <a className={styles.track__albumLink} href="http://"
                >Captivating</a>
            </div>
            <div className={styles.track__time}>
              <svg className={styles.track__timeSvg}>
                <use xlinkHref="/sprite.svg#icon-like"></use>
              </svg>
              <span className={styles.track__timeText}>1:48</span>
            </div>
          </div>
        </div>
        <div className={styles.playlist__item}>
          <div className={styles.playlist__track}>
            <div className={styles.track__title}>
              <div className={styles.track__titleImage}>
                <svg className={styles.track__titleSvg}>
                  <use xlinkHref="/sprite.svg#icon-note"></use>
                </svg>
              </div>
              <div>
                <a className="track__titleLink" href="http://"
                  >Knives n Cherries
                  <span className={styles.track__titleSpan}></span></a>
              </div>
            </div>
            <div className={styles.track__author}>
              <a className={styles.track__authorLink} href="http://">minthaze</a>
            </div>
            <div className={styles.track__album}>
              <a className={styles.track__albumLink} href="http://"
                >Captivating</a>
            </div>
            <div className={styles.track__time}>
              <svg className={styles.track__timeSvg}>
                <use xlinkHref="/sprite.svg#icon-like"></use>
              </svg>
              <span className={styles.track__timeText}>1:48</span>
            </div>
          </div>
        </div>
        <div className={styles.playlist__item}>
          <div className={styles.playlist__track}>
            <div className={styles.track__title}>
              <div className={styles.track__titleImage}>
                <svg className={styles.track__titleSvg}>
                  <use xlinkHref="/sprite.svg#icon-note"></use>
                </svg>
              </div>
              <div>
                <a className={styles.track__titleLink} href="http://"
                  >Knives n Cherries
                  <span className={styles.track__titleSpan}></span></a>
              </div>
            </div>
            <div className={styles.track__author}>
              <a className={styles.track__authorLink} href="http://">minthaze</a>
            </div>
            <div className={styles.track__album}>
              <a className={styles.track__albumLink} href="http://"
                >Captivating</a>
            </div>
            <div className={styles.track__time}>
              <svg className={styles.track__timeSvg}>
                <use xlinkHref="/sprite.svg#icon-like"></use>
              </svg>
              <span className={styles.track__timeText}>1:48</span>
            </div>
          </div>
        </div>

        <div className={styles.playlist__item}>
          <div className={styles.playlist__track}>
            <div className={styles.track__title}>
              <div className={styles.track__titleImage}>
                <svg className={styles.track__titleSvg}>
                  <use xlinkHref="/sprite.svg#icon-note"></use>
                </svg>
              </div>
              <div>
                <a className={styles.track__titleLink}href="http://"
                  >How Deep Is Your Love
                  <span className={styles.track__titleSpan}></span></a>
              </div>
            </div>
            <div className={styles.track__author}>
              <a className={styles.track__authorLink} href="http://"
                >Calvin Harris, Disciples</a>
            </div>
            <div className={styles.track__album}>
              <a className={styles.track__albumLink} href="http://"
                >How Deep Is Your Love</a>
            </div>
            <div className={styles.track__time}>
              <svg className={styles.track__timeSvg}>
                <use xlinkHref="/sprite.svg#icon-like"></use>
              </svg>
              <span className={styles.track__timeText}>3:32</span>
            </div>
          </div>
        </div>

        <div className={styles.playlist__item}>
          <div className={styles.playlist__track}>
            <div className={styles.track__title}>
              <div className={styles.track__titleImage}>
                <svg className={styles.track__titleSvg}>
                  <use xlinkHref="/sprite.svg#icon-note"></use>
                </svg>
              </div>
              <div>
                <a className={styles.track__titleLink} href="http://"
                  >Morena <span className={styles.track__titleSpan}></span></a>
              </div>
            </div>
            <div className={styles.track__author}>
              <a className={styles.track__authorLink} href="http://">Tom Boxer</a>
            </div>
            <div className={styles.track__album}>
              <a className={styles.track__albumLink} href="http://"
                >Soundz Made in Romania</a>
            </div>
            <div>
              <svg className={styles.track__timeSvg}>
                <use xlinkHref="/sprite.svg#icon-like"></use>
              </svg>
              <span className={styles.track__timeText}>3:36</span>
            </div>
          </div>
        </div>

        <div className={styles.playlist__item}>
          <div className={styles.playlist__track}>
            <div className={styles.track__title}>
              <div className={styles.track__titleImage}>
                <svg className={styles.track__titleSvg}>
                  <use xlinkHref="/sprite.svg#icon-note"></use>
                </svg>
              </div>
              <div>
                <a className={styles.track__titleLink} href="http://">
                  <span className={styles.track__titleSpan}></span></a>
              </div>
            </div>
            <div className={styles.track__author}>
              <a className={styles.track__authorLink} href="http://"></a>
            </div>
            <div className={styles.track__album}>
              <a className={styles.track__albumLink} href="http://"></a>
            </div>
            <div className={styles.track__time}>
              <svg className={styles.track__timeSvg}>
                <use xlinkHref="/sprite.svg#icon-like"></use>
              </svg>
              <span className={styles.track__timeText}></span>
            </div>
          </div>
        </div>
      </div>
    )
}