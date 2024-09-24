// const { cookies, setCookie, removeCookie, getToken } = useSpotifyService();
import axios from "axios";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { CookieSetOptions } from "universal-cookie";

const TOKEN_SERVER_URL = encodeURI("https://accounts.spotify.com/api/token/");
const headers = {
  "Content-Type": "application/x-www-form-urlencoded",
};
const body = {
  grant_type: "client_credentials",
  client_id: "af6cb0ebd87f4f2e813655237273f06a",
  client_secret: "802707ea3d5a49debc6211db8aa66684",
};

// Service hook for spotify api
export const useSpotifyService = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const [currentPlaylist, setcurrentPlaylist] = useState<any>();

  // Getting Token if there is none
  const getToken = async () => {
    if (cookies.token) return;
    try {
      const { data } = await axios.post(TOKEN_SERVER_URL, body, { headers });
      setCookie("token", data.access_token, {
        path: "/",
        maxAge: data.expires_in - 10,
      } as CookieSetOptions);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const getPlaylists$ = async (spotifyURI: string) => {
    const proxyURL = "https://thingproxy.freeboard.io/fetch/";
    const url = encodeURI(
      `${proxyURL}https://api.spotify.com/v1/playlists/${spotifyURI}`
    );
    const headers = {
      Authorization: `Bearer ${cookies.token}`,
    };

    // Get Token then fetch playlists from spotify api
    const res = await getToken()
      .then(async () => {
        try {
          const response = await axios.get(url, { headers });
          return response;
        } catch (error) {
          console.error(error);
        }
      })
      .then((resp) => resp?.data)
      .finally(() => {});
    console.log(res);
    setcurrentPlaylist(res);
    return res;
  };

  return {
    cookies,
    setCookie,
    removeCookie,
    getToken,
    getPlaylists$,
    currentPlaylist,
    setcurrentPlaylist,
  };
};
