export type StaredUserType = {
    id: number;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
  };
  export type TrackType = {
    _id: number;
    name: string;
    author: string;
    release_date: string;
    genre: string;
    duration_in_seconds: number;
    album: string;
    logo: string | null;
    track_file: string;
    stared_user: StaredUserType[];
  };

  export const formatTime = (time: number) => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const formatMinutes =
        minutes < 10 ? `0${minutes}` : `${minutes}`;
      const seconds = Math.floor(time % 60);
      const formatSeconds =
        seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${formatMinutes}:${formatSeconds}`;
    }
    return '00:00';
  };


  export type SinginFormType = {
    email: string;
    password: string;
  };

  export type Tokens={
    access:string | null,
    refresh: string | null,
  }