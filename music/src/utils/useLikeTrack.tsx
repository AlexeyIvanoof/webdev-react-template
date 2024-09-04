import { dislikeTrack, likeTrack } from "@/api/api";
import { useAppDispatch, useAppSelector } from "@/hooks"
import { setDisLikeTrack, setLikeTrack } from "@/store/features/track";


const useLikeTrack = (trackId: number) =>{

const dispatch = useAppDispatch();

const tokens = {
    access: "",
    refresh: "",
}
const likedTracks = useAppSelector(state => state.playlist.favoriteTracksList);

const isLiked = !!likedTracks.find((track) => track.id === trackId);

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


/*const handleLike = async (e: React.MouseEvent) =>{
    e.stopPropagation();
    if(!tokens.access || tokens.refresh)
         return alert ("Вы не авторизованны!")

        const action = isLiked ?  dislikeTrack : likeTrack; 

        try { 
            await action({
                trackId: trackId,
                access: tokens.access,
                refresh: tokens.refresh
            })

            if(isLiked){
                dispath(setDisLikeTrack(trackId))
            }else{
                dispath(setLikeTrack(trackId))
            }
            
        } catch (error) {
            //обработать 401 ошибку
            //Нужно обработать ошибки протухшего токена и вызывать его обновление, а после этого выполнить запрос заново с обновленным токеном
           console.error(error);
        }
};

    

return {handleLike, isLiked}
};

export default useLikeTrack*/