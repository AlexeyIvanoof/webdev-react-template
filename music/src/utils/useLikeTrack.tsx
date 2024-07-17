import { dislikeTrack, likeTrack } from "@/api/api";
import { useAppDispatch, useAppSelector } from "@/hooks"
import { setDisLikeTrack, setLikeTrack } from "@/store/features/track";


const useLikeTrack = (trackId: number) =>{

const dispath = useAppDispatch();

const tokens = {
    access: "",
    refresh: "",
}
const likedTracks = useAppSelector(state => state.playlist.favoriteTracksList);

const isLiked = !!likedTracks.find((track) => track.id === trackId);

const handleLike = async (e: React.MouseEvent) =>{
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
           console.error(error);
        }
};

    

return {handleLike, isLiked}
};

export default useLikeTrack