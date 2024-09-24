import React from "react";
import { Playlist } from "../../../types/Spotify";
import { motion } from "framer-motion";

interface TrackListProps {
  currentPlaylistTracks: Playlist["tracks"];
}

const TrackList: React.FC<TrackListProps> = ({
  currentPlaylistTracks,
}: TrackListProps) => {
  return (
    <>
      <div
        className="card bg-dark p-1 mt-4 mb-5 shadow border-0 overflow-hidden"
        data-aos="fade-up"
        data-aos-duration={1500}
      >
        <table className="table table-dark table-borderless table-responsive table-striped table-sm table-hover">
          <thead>
            <tr>
              <th scope="col" className="text-center">
                #
              </th>
              <th scope="col">Title</th>
              <th scope="col"></th>
              <th scope="col">Album</th>
              <th scope="col" className="d-none d-sm-table-cell">
                Artist
              </th>
              <th scope="col" className="d-none d-md-table-cell">
                Time
              </th>
            </tr>
          </thead>
          <tbody>
            {currentPlaylistTracks?.items.map((track: any, index: number) => {
              const durationInMinutes = Math.floor(
                track.track.duration_ms / 60000
              );
              const durationInSeconds = Math.floor(
                (track.track.duration_ms % 60000) / 1000
              );
              const formattedDuration = `${durationInMinutes}:${durationInSeconds
                .toString()
                .padStart(2, "0")}`;
              return (
                <motion.tr
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  key={index}
                  className="align-middle"
                >
                  {/* Index */}
                  <th scope="row" className="text-center">
                    <div className="small opacity-75">{index + 1}</div>
                  </th>
                  {/* Image */}
                  <td>
                    <img
                      src={track.track.album.images[2].url}
                      alt={track.track.album.name}
                      width={50}
                    ></img>
                  </td>
                  {/* Title */}
                  <td>
                    <div className="d-flex flex-column ">
                      <div
                        className="d-inline-block text-truncate"
                        style={{ maxWidth: "30vw" }}
                      >
                        <a
                          id="trackLink"
                          className="text-decoration-none text-light "
                          href={track.track.external_urls.spotify}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {track.track.name}
                        </a>
                      </div>
                      {/* Artists */}
                      <div
                        className="small d-inline-block text-truncate"
                        style={{ maxWidth: "30vw" }}
                      >
                        {track.track.artists.map((c: any) => {
                          return (
                            <a
                              id="trackLink"
                              href={c.external_urls.spotify}
                              target="_blank"
                              rel="noreferrer"
                              key={c.id}
                              className="text-light opacity-75 text-decoration-none"
                            >
                              <span className="me-2 small">{c.name}</span>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </td>
                  {/* Album */}
                  <td>
                    <div
                      className="d-inline-block text-truncate"
                      style={{ maxWidth: "20vw" }}
                    >
                      <a
                        id="trackLink"
                        href={track.track.album.external_urls.spotify}
                        target="_blank"
                        rel="noreferrer"
                        className="text-light opacity-75 small text-decoration-none"
                      >
                        {track.track.album.name}
                      </a>
                    </div>
                  </td>
                  {/* Artist */}
                  <td>
                    <a
                      id="trackLink"
                      href={track.track.artists[0].external_urls.spotify}
                      target="_blank"
                      rel="noreferrer"
                      className="text-light small opacity-75 text-decoration-none d-none d-sm-table-cell"
                    >
                      {track.track.artists[0].name}
                    </a>
                  </td>
                  {/* Duration */}
                  <td className="d-none  d-md-table-cell">
                    <div className="opacity-75 small">{formattedDuration}</div>
                  </td>
                </motion.tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TrackList;
