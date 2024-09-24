import React, { useEffect } from "react";
import { useSpotifyService } from "../../../services/spotifyService";
import SpotifyInput from "../SpotifyInput";
import Playlist from "./Playlist";
import { motion } from "framer-motion";

interface PlaylistProps {}
const example_uri =
  "https://open.spotify.com/playlist/5IMCUGJ9U4yEt6EGffRu3R?si=34430505f3d74779";

const PlaylistsView: React.FC<PlaylistProps> = (props) => {
  const { getPlaylists$, currentPlaylist, getToken } = useSpotifyService();
  const handleCallParent = (inputVal: string) => {
    const uri: string = getPlaylistIdFromUrl(inputVal);
    getPlaylists$(uri);
  };

  // get token at playlist view init
  useEffect(() => {
    getToken();
  }, []);

  function getPlaylistIdFromUrl(url: string) {
    const regex = /playlist\/([a-zA-Z0-9]+)\?si=/;
    const match = url.match(regex);

    if (match && match[1]) {
      return match[1];
    }
    return url;
  }
  return (
    <>
      <div className="mt-2" data-aos="fade-right">
        <div className="row ">
          <div className="col-12 mt-2 mb-4">
            <SpotifyInput
              callParent={handleCallParent}
              placeholder={"Enter spotify playlist URI"}
            />
            {!currentPlaylist && (
              <p className="text-secondary fst-italic mt-2 ms-2 ">
                Example:{" "}
                <span
                  id="trackLink"
                  className="text-primary text-truncate  "
                  onClick={() => handleCallParent(example_uri)}
                >
                  Need for Speed Unbound Soundtrack
                </span>
              </p>
            )}
          </div>
        </div>
        <motion.div>
          <Playlist currentPlaylist={currentPlaylist} />
        </motion.div>
      </div>
    </>
  );
};

export default PlaylistsView;
