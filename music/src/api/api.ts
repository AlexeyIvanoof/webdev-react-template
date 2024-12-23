import { SinginFormType } from "@/types/types";
import { fetchWithAuth } from "@/utils/fetchWithAuth";

const API_URL = "https://webdev-music-003b5b991590.herokuapp.com/"

export async function GetAllTracks() {
    const response = await fetch(
      API_URL + `catalog/track/all/`,
      {
        method: "GET",
      }
    );
    if (!response.ok) {
      throw new Error("Ошибка сервера");
    }
    const data = await response.json();
    return data.data;
  }


  export async function RegistrationApi({email, password}:SinginFormType) {
    return fetch( API_URL+ `user/signup/`, {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
        username: email,
      }),
      headers: {
        "content-type": "application/json",
      },
    }).then(async (response) => {
      if (response.status === 400) {
        const errorResponse = await response.json();
        if (errorResponse.username) {
          throw new Error(errorResponse.username);
        }
        if (errorResponse.email) {
          throw new Error(errorResponse.email);
        }
        if (errorResponse.password) {
          throw new Error(errorResponse.password);
        }
      }
      if (response.status === 500) {
        throw new Error("Сервер сломался");
      }
      return response.json();
    });
  }
  
  
  export async function LoginApi({email, password}:SinginFormType) {
    return fetch( API_URL+ `user/login/`,{
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => {
        if (response.status === 400) {
          return response.json().then((errorResponse) => {
            if (errorResponse.email) {
              throw new Error(errorResponse.email);
            }
            if (errorResponse.password) {
              throw new Error(errorResponse.password);
            }
            throw new Error("Произошла неизвестная ошибка.");
          });
        }
        if (response.status === 401) {
          return response.json().then((errorResponse) => {
            throw new Error(errorResponse.detail);
          });
        }
        return response.json();
      });
  }


  export const fetchTokens = async ({ email, password }: SinginFormType) => {
    try {
      const response = await fetch(
        API_URL+ `user/token/`,
        {
          method: "POST",
          body: JSON.stringify({
            email,
            password,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 401) {
        return response.json().then((errorResponse) => {
          throw new Error(errorResponse.message);
        });
      }

      const responseData = await response.json();
      return responseData;
    } catch (error) {
      throw new Error("Ошибка" + error);
    }
  };

  export const refreshToken = async (refresh: string) => {
    try {
      const response = await fetch(
        API_URL+ `token/refresh/`,
        {
          method: "POST",
          body: JSON.stringify({
            refresh: refresh 
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      throw new Error("Ошибка" + error);
    }
  };


  export async function likeTrack({
    trackId,
    access,
    refresh,
  }: {
    trackId: number;
    access: string;
    refresh: string;
  }) {
    try {
    const res = await fetchWithAuth(
      API_URL + `catalog/track/${trackId}/favorite/`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${access}`,
        },
      },
      refresh
    );
    return res.json();
    } catch (error) {
      throw new Error("Ошибка" + error);
    }
  }


  export async function dislikeTrack({
    trackId,
    access,
    refresh,
  }: {
    trackId: number;
    access: string;
    refresh: string;
  }) {
    try {
    const res = await fetchWithAuth(
      API_URL + `catalog/track/${trackId}/favorite/`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${access}`,
        },
      },
      refresh
    );
    return res.json();
  } catch (error) {
    throw new Error("Ошибка" + error);
  }
  }



  export async function fetchFavoriteTracks({
    access, refresh
  }:{
    access: string | null ; refresh: string;
  }) {
    const res = await fetchWithAuth(
      API_URL + `catalog/track/favorite/all`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${access}`,
        },
      },
      refresh
    );
    return res.json();
  }

  export async function fetchCatalogAllTracks() {
    const response = await fetch(
      API_URL + `catalog/selection/all`,
      {
        method: "GET",
      }
    );
    if (!response.ok) {
      throw new Error("Ошибка сервера");
    }
    const data = await response.json();
    return data.data;
  }
     
  

    export async function fetchCatalogTracks(id: number) {
      const response = await fetch(
        API_URL + `catalog/selection/${id+1}/`,
        {
          method: "GET",
        }
      );
      if (!response.ok) {
        throw new Error("Ошибка сервера");
      }
      const data = await response.json();
      return data.data;
    }
  