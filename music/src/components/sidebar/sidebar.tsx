'use client'
import {useAppSelector } from "@/hooks";
import styles from "./sidebar.module.css";
import Link from "next/link";
import SidebarCategory from "./sidebarCategory";

export default function Sidebar() {
  const user = useAppSelector(state => state.auth.user?.username)
  return (
    <div className={styles.mainSidebar}>
      <div className={styles.sidebarPersonal}>
        <p className={styles.sidebarPersonalName}>{user}</p>
        <Link href={"/signin"}> <div className={styles.sidebarIcon}>
          <svg>
            <use xlinkHref="/sprite.svg#logout"></use>
          </svg>
        </div>
        </Link>
      </div>
     <SidebarCategory/>
    </div>
  );
}