'use client'

import Image from "next/image";
import classNames from "classnames";
import styles from "./navMenu.module.css";
import { useState } from "react";
import Link from "next/link";
import { useAppSelector } from "@/hooks";
import { useRouter } from 'next/navigation'

export default function NawMenu() {
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => setVisible(!visible);
  const tokens =  useAppSelector(state => state.auth.tokens);
  const handleClick = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!tokens.access || !tokens.refresh) {
      router.push('/')
      return alert("Вы не авторизованы!");
    }else{
      router.push('/tracks/myTrack')
    }
  }
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
      <button className={classNames(styles.navBurger, styles.burger)} onClick={toggleVisibility}>
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
      </button>
      {visible &&
      <div className={styles.navMenu}>
        <ul className={styles.menuList}>
          <li className={styles.menuItem}>
          <Link href={"/"} className={styles.menuLink}>
              Главное
              </Link>
          </li>
          <li className={styles.menuItem}>
            <button  onClick={handleClick}  className={styles.menuButton}>
            Мой плейлист
            </button> 
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
