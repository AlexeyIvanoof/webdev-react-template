'use client'
import { CategoryArr } from "@/utils/categoryes";
import styles from "./sidebar.module.css";
import Image from "next/image";
import Link from "next/link";

export default function SidebarCategory() {
    const fullCategory = CategoryArr.map((category) => (
        <li className={styles.sidebarItem} key={category.id}>
        <Link className={styles.sidebarlink} href={`tracks/category/${category.id}`}> <Image
            className={styles.sidebarImg}
            src={category.img}
            alt={category.alt}
            width={250}
            height={150}
          />
        </Link>
      </li>
    ))
  return (
<div className={styles.sidebarBlock}>
<ul className={styles.sidebarlist}>
{fullCategory}
</ul>
</div>

  )

}