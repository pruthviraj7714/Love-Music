import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import { AiOutlineClockCircle } from "react-icons/ai";
import { DotLoaderOverlay } from "react-spinner-overlay";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const Album = ({ token }) => {
  const { id } = useParams();
  const [albumData, setAlbumData] = useState({
    name: "",
    artist: "",
    year: "",
    image: "",
    total_tracks: 0,
  });
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [song, setSong] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const albumResponse = await axios.get(
          `https://api.spotify.com/v1/albums/${id}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setAlbumData((prevData) => ({
          ...prevData,
          name: albumResponse.data.name,
          artist: albumResponse.data.artists[0].name,
          year: albumResponse.data.release_date.split("-")[0],
          image: albumResponse.data.images[0].url,
          total_tracks: albumResponse.data.total_tracks,
        }));
        setTracks(albumResponse.data.tracks.items);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  function formatDuration(milliseconds) {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  }

  const Message = () => {
    return (
      <div className="mt-2">
        <h1 className="text-2xl font-bold">Loading...</h1>
      </div>
    );
  };

  if (loading) {
    return <DotLoaderOverlay color="pink" size={25} message={<Message />} />;
  }

  return (
    <div>
      <Header />
      <div className="w-full mt-16">
        <div className="h-64 bg-gradient-to-r from-pink-50 via-pink-200 to-pink-500 border border-b-black shadow-xl">
          <div className="flex pt-10 pl-10">
            <div className="w-48 h-48">
              <img
                className="w-full h-full rounded-md object-cover"
                src={albumData.image}
                alt="//"
              />
            </div>
            <div>
              <h1 className="text-5xl font-extrabold pl-4 pt-5">
                {albumData.name}
              </h1>
              <div className="flex items-center my-2 ml-4">
                <p className="font-bold text-lg  mr-1">{albumData.artist}</p>
                <p className="text-lg font-sans mr-2">▪ {albumData.year}</p>
                <p className="text-md font-sans">
                  ▪{" "}
                  {albumData.total_tracks === 1
                    ? albumData.total_tracks + " song"
                    : albumData.total_tracks + " songs"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-20">
        <table className="table-auto w-full">
          <tbody>
            <tr>
              <th className="text-left px-4 py-2 border">#</th>
              <th className="text-left px-4 py-2 border">Title</th>
              <th className="text-left px-4 py-2 border">
                <AiOutlineClockCircle size={17} />
              </th>
            </tr>
            {tracks.map((album, idx) => {
              return (
                <tr
                  key={album.id}
                  className="cursor-pointer hover:bg-pink-50"
                  onClick={() => {
                    setSong(album.preview_url);
                  }}
                >
                  <td className="border px-4 py-2">{idx + 1}</td>
                  <td className="border px-4 py-2 flex items-center">
                    <div className="flex flex-col">
                      <p className="text-lg font-semibold">{album.name}</p>
                      {album.preview_url === null ? (
                        <p className="text-red-400 text-lg">
                          Audio is not available
                        </p>
                      ) : null}
                    </div>
                  </td>
                  <td className="border px-4 py-2">
                    {formatDuration(album.duration_ms)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="fixed bottom-0 w-full">
        <AudioPlayer src={song} autoPlay={false} />
      </div>
    </div>
  );
};

export default Album;
