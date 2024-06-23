import { GetAllTracks } from "@/api/api";
import { TrackType } from "@/types/types";
import TrackListTitle from "../trackListTitle/trackListTitle";
import Filter from "../filterTrack/filterTrack";
import styles from "./Tracks.module.css"



export default async function Tracks() {

let tracks: TrackType[] = [];
let error ="";
  try {
    tracks = await  GetAllTracks();
  } catch (err: unknown) {
    error = err instanceof Error ? "Ошибка при загрузке треков" + err.message : "Неизвестная ошибка"
  }

    return (
    <>
         <h2 className={styles.centerblockH2}>Треки</h2>
          <Filter  tracks = {tracks}/>
          <TrackListTitle  tracks = {tracks}/>
    </>
    )
}