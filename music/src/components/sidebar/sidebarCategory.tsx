'use client'
import { CategoryArr } from "@/utils/categoryes";
import styles from "./sidebar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { TrackType } from "@/types/types";
import { GetAllTracks } from "@/api/api";
import { setCategoryArr } from "@/store/features/track";
import { useDispatch } from "react-redux";

export default function SidebarCategory() {
const [error, setError] = useState(String);
const dispatch = useDispatch();
  const [tracks, setTracks] = useState<TrackType[]>([]);
  useEffect(() => {
    GetAllTracks()
      .then((data) => {
        dispatch(setCategoryArr(data));
        setTracks(data);
      })
      .catch((error) => {
        if(error instanceof Error)
          setError('Ошибка сети, попробуйте позже');
      });
  }, [dispatch]);

    const fullCategory = CategoryArr.map((category) => (
        <li className={styles.sidebarItem} key={category.id}>
        <Link className={styles.sidebarlink} href={`/tracks/category/${category.id}`}> <Image
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
{error && <div className={styles.Error}>{error}</div>}
<ul className={styles.sidebarlist}>
{fullCategory}
</ul>
</div>

  )

}