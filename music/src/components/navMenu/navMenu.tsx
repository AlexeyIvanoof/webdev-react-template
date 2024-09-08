'use client'

import Image from "next/image";
import classNames from "classnames";
import styles from "./navMenu.module.css";
import { useState } from "react";
import Link from "next/link";

export default function NawMenu() {
  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => setVisible(!visible);

  return (
    <nav className={classNames(styles.mainNav, styles.nav)}>
      <div className={classNames(styles.navLogo, styles.logo)}>
        <Image
          className={styles.logoImage}
          alt="logoImage"
          src="/logo.png"
          width={113.33}
          height={17}
        />
      </div>
      <div className={classNames(styles.navBurger, styles.burger)} onClick={toggleVisibility}>
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
      </div>
      {visible &&
      <div className={styles.navMenu}>
        <ul className={styles.menuList}>
          <li className={styles.menuItem}>
          <Link href={"/"} className={styles.menuLink}>
              Главное
              </Link>
          </li>
          <li className={styles.menuItem}>
            <Link href={"/myTrack"} className={styles.menuLink}>
            Мой плейлист
            </Link> 
          </li>
          <li className={styles.menuItem}>
          <Link href={"/signin"} className={styles.menuLink}>
              Войти
            </Link> 
          </li>
        </ul>
      </div>
      }
    </nav>
  );
}
