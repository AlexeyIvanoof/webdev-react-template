import {fetchCatalogAllTracks, fetchCatalogTracks, fetchFavoriteTracks} from "@/api/api";
import { TrackType } from "@/types/types";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";


export const getFavoriteTracks = createAsyncThunk(
  "playlist/getFavoriteTracks",
  async (Tokens:{
    access: string | null
    refresh: string | null
  }) => {
    const favoriteTracks = await fetchFavoriteTracks(Tokens);
    return favoriteTracks;
  }
);


export const getCatalogTracks = createAsyncThunk(
  "playlist/getCatalogTracks",
  async () => {
    const CatalogTracks = await fetchCatalogAllTracks();
    return CatalogTracks;
  }
);

type PlaylistStateType = {
  defaultPlaylist: TrackType[];
  currentTrack: null | TrackType;
  currentPlaylist: TrackType[];
  favoriteTracksList: TrackType[]; 
  shuffledPlaylist: TrackType[];
  categoryArr: TrackType[];
  isPlaying: boolean;
  isShuffled: boolean;
  filterSort: {
    sort: string,
    isActiveSort: boolean,
  };
  filterOptions: {
    author: string[];
    genre: string[];
    searchValue: string;
  };
  filteredTracks: TrackType[];
};

const initialState: PlaylistStateType = {
  defaultPlaylist: [],
  currentTrack: null,
  currentPlaylist: [],
  shuffledPlaylist: [],
  favoriteTracksList:[],
  categoryArr: [], 
  isPlaying: false,
  isShuffled: false,
  filterSort: {
    sort: "По умолчанию",
    isActiveSort: false,
  },
  filterOptions: {
    author: [],
    genre: [],
    searchValue: ""
  },
  filteredTracks: [],
};


const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    setCurrentTrack: (
      state,
      action: PayloadAction<{ track: TrackType; tracks: TrackType[] }>
    ) => {
      state.currentTrack = action.payload.track;
      state.currentPlaylist = action.payload.tracks;
      state.shuffledPlaylist = [...action.payload.tracks].sort(
        () => 0.5 - Math.random()
      );
      state.isPlaying = true;
      console.log(action.payload)
      console.log( state.shuffledPlaylist);
    },
    setDefaultPlaylist: (state, action: PayloadAction<TrackType[]>) => {
      state.defaultPlaylist = action.payload;
      state.filteredTracks = action.payload;
    },

    setCategoryArr: (state,  action: PayloadAction<TrackType[]>) => {
      state.categoryArr = action.payload;
    },

    setPrevTrack: (state) => {
      const playlist = state.isShuffled
        ? state.shuffledPlaylist
        : state.currentPlaylist;
      const currentTrackIndex = playlist.findIndex(
        (track) => track._id === state.currentTrack?._id
      );
      const newTrack = playlist[currentTrackIndex - 1];
      if (newTrack) {
        state.currentTrack = newTrack;
      }
    },

    setNextTrack: (state) => {
      const playlist = state.isShuffled
        ? state.shuffledPlaylist
        : state.currentPlaylist;
      const currentTrackIndex = playlist.findIndex(
        (track) => track._id === state.currentTrack?._id
      );
      const newTrack = playlist[currentTrackIndex + 1];
      if (newTrack) {
        state.currentTrack = newTrack;
      }
      console.log(currentTrackIndex);
      console.log(newTrack);
    },

    setIsPlaying: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload;
    },
    
    setIsShuffled: (state, action: PayloadAction<boolean>) => {
      state.isShuffled = action.payload;
    },

   //Работа с лайками

   setLikeTrack: (state, action: PayloadAction<number>) => {
    const trackId = action.payload;

    const trackToAdd = state.defaultPlaylist.find((track) => track._id === trackId);
    if (trackToAdd) {
      state.favoriteTracksList.push(trackToAdd);
      //state.filteredTracks.push(trackToAdd);
    }
},
 setDisLikeTrack: (state, action: PayloadAction<number>) => {
  const trackId = action.payload;
  const actuallyFavoriteTrackList = state.favoriteTracksList.filter((track) => track._id !== trackId);
  state.favoriteTracksList = actuallyFavoriteTrackList; 
  //state.filteredTracks = actuallyFavoriteTrackList;
},

setFilters: (
  state,
  action: PayloadAction<{ author?: string[]; genre?: string[]; searchValue?: string; sort?: string, isActiveSort: boolean }>
) => {
  state.filterOptions = {
    author: action.payload.author || state.filterOptions.author,
    genre: action.payload.genre || state.filterOptions.genre,
    searchValue: action.payload.searchValue || state.filterOptions.searchValue,
   
  };

  state.filterSort = {
    sort: action.payload.sort || state.filterSort.sort,
    isActiveSort: action.payload.isActiveSort,
  }

  // Используем фильтры
  state.filteredTracks = state.defaultPlaylist.filter((t) => {
    const hasAuthors = state.filterOptions.author.length !== 0;
    const isAuthors = hasAuthors
      ? state.filterOptions.author.includes(t.author)
      : true;

    const hasGenres = state.filterOptions.genre.length !== 0;
    const isGenres = hasGenres ? state.filterOptions.genre.includes(t.genre[0]) : true;

    const hasSearchValue = t.name
      .toLowerCase()
      .includes(state.filterOptions.searchValue.toLowerCase());

    if (hasAuthors && hasGenres) {
      return isAuthors && hasSearchValue && isGenres;
    } else if (hasAuthors) {
      return isAuthors && hasSearchValue;
    } else {
      return hasSearchValue && isGenres;
    }
  });

  // Используем сортировку
  if (state.filterSort.sort === "Сначала новые") {
    state.filteredTracks.sort(
      (a, b) => new Date(b.release_date).getTime() - new Date(a.release_date).getTime()
    );
  } else if (state.filterSort.sort === "Сначала старые") {
    state.filteredTracks.sort(
      (a, b) => new Date(a.release_date).getTime() - new Date(b.release_date).getTime()
    );
  }
},
  },
  extraReducers(builder) {
    builder.addCase(getFavoriteTracks.fulfilled,(state, action) =>{
      
      state.favoriteTracksList = action.payload.data;
      state.defaultPlaylist = action.payload.data;
      state.filteredTracks = action.payload.data;
    })
  },
});

export const {
  setCurrentTrack,
  setDefaultPlaylist,
  setPrevTrack,
  setNextTrack,
  setIsPlaying,
  setIsShuffled,
  setFilters,
  setLikeTrack,
  setDisLikeTrack,
  setCategoryArr
} = playlistSlice.actions;
export const playlistReducer = playlistSlice.reducer;