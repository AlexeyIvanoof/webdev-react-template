import { dislikeTrack, likeTrack } from "@/api/api";
import { useAppDispatch, useAppSelector } from "@/hooks"
import { setDisLikeTrack, setLikeTrack } from "@/store/features/track";


const useLikeTrack = (trackId: number) =>{

const dispatch = useAppDispatch();


const tokens =  useAppSelector(state => state.auth.tokens);

const likedTracks = useAppSelector(state => state.playlist.favoriteTracksList);

const isLiked = !!likedTracks.find((track) => track._id === trackId);
console.log(likedTracks)
const handleLike = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!tokens.access || !tokens.refresh) {
      return alert("Вы не авторизованы!");
    }

    const action = isLiked ? dislikeTrack : likeTrack;

    try {
      await action({
        trackId: trackId,
        access: tokens.access,
        refresh: tokens.refresh,
      });

      if (isLiked) {
        dispatch(setDisLikeTrack(trackId))
      } else {
        dispatch(setLikeTrack(trackId));
      }

    } catch (error) {
      if (error.response && error.response.status === 401) {
        
        console.log("Срок действия токена истек. Обновление токена...");
       
      } else {
        throw new Error("Срок действия токена истек");
      }
    }
  };

  return { handleLike, isLiked };
};

export default useLikeTrack;
