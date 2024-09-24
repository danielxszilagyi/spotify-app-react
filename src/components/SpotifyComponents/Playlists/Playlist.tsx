import React, { useEffect } from "react";
import TrackList from "./TrackList";
import { Playlist as PlaylistModel } from "../../../types/Spotify";
import AOS from "aos";

interface PlaylistProps {
  currentPlaylist: PlaylistModel;
}

const Playlist: React.FC<PlaylistProps> = ({
  currentPlaylist,
}: PlaylistProps) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    currentPlaylist && (
      <>
        <div
          className="card text-white bg-dark border-0 shadow mb-4 "
          data-aos="fade-down"
          data-aos-duration={800}
        >
          <img
            src={currentPlaylist?.images[0].url}
            height={"400px"}
            style={{ objectFit: "cover" }}
            alt={currentPlaylist?.name}
            className="card-img-top opacity-75"
          />
          <div className="card-header h1 ">
            <a
              href={currentPlaylist?.external_urls.spotify}
              target="_blank"
              rel="noreferrer"
              className="text-decoration-none text-light trackLink anim"
            >
              {" "}
              {currentPlaylist?.name}
            </a>
          </div>
          <div className="card-body">
            <p>
              Created by:
              <a
                id="trackLink"
                href={currentPlaylist?.owner.external_urls.spotify}
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none"
              >
                {" " + currentPlaylist?.owner.display_name}
              </a>
            </p>
            <span className="te text-light opacity-75 ">Description:</span>
            <p className="card-text fst-italic opacity-75">{`"${currentPlaylist?.description}"`}</p>
          </div>
        </div>
        <TrackList currentPlaylistTracks={currentPlaylist.tracks} />
      </>
    )
  );
};

export default Playlist;
