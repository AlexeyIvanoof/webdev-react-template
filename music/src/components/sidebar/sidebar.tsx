/*'use client'
import { useAppSelector } from "@/hooks";
import styles from "./sidebar.module.css";
import Image from "next/image";
import Link from "next/link";

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
      <div className={styles.sidebarBlock}>
        <div className={styles.sidebarlist}>
          <div className={styles.sidebarItem}>

            <Link className={styles.sidebarlink} href={"/tracks/category"}> <Image
                className={styles.sidebarImg}
                src="/playlist01.png"
                alt="day's playlist"
                width={250}
                height={150}
              />
            </Link>

          </div>
          <div className={styles.sidebarItem}>
            <a className={styles.sidebarlink} href="#">
              <Image
                className={styles.sidebarImg}
                src="/playlist02.png"
                alt="day's playlist"
                width={250}
                height={150}
              />
            </a>
          </div>
          <div className={styles.sidebarItem}>
            <a className={styles.sidebarlink} href="#">
              <Image
                className={styles.sidebarImg}
                src="/playlist03.png"
                alt="day's playlist"
                width={250}
                height={150}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
*/

'use client'
import { useAppSelector } from "@/hooks";
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