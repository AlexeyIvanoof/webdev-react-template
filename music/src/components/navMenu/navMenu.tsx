import Image from "next/image";
import classNames from "classnames";
import styles from "./navMenu.module.css"

export default function NawMenu() {
    return (
        <nav className={classNames(styles.main__nav, styles.nav)}>
        <div className={classNames(styles.nav__logo, styles.logo)}>
          <Image className="logo__image"
          alt="logo__image"
          src="/logo.png "
          width={113.33}
          height={17}/>
        </div>
        <div className={classNames(styles.nav__burger, styles.burger)}>
          <span className={styles.burger__line}></span>
          <span className={styles.burger__line}></span>
          <span className={styles.burger__line}></span>
        </div>
        <div className={styles.nav__menu}>
          <ul className={styles.menu__list}>
            <li className={styles.menu__item}>
              <a href="#" className={styles.menu__link}>Главное</a>
            </li>
            <li className={styles.menu__item}>
              <a href="#" className={styles.menu__link}>Мой плейлист</a>
            </li>
            <li className={styles.menu__item}>
              <a href="../signin.html" className={styles.menu__link}>Войти</a>
            </li>
          </ul>
        </div>
      </nav>
        )
    }