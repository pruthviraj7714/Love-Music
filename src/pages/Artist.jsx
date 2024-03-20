import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import Artists from "../data/artistdata";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { DotLoaderOverlay } from "react-spinner-overlay";

const Artist = ({ token }) => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [followers, setFollowers] = useState(0);
  const [song, setSong] = useState("");
  const [artistTrackData, setArtistTrackData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const artistResponse = await axios.get(
          `https://api.spotify.com/v1/artists/${id}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setName(artistResponse.data.name);
        setImg(artistResponse.data.images[0].url);
        setFollowers(artistResponse.data.followers.total);

        const artistTrackResponse = await axios.get(
          `https://api.spotify.com/v1/artists/${id}/top-tracks`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setArtistTrackData(artistTrackResponse.data.tracks);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, [id]);

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
    <div className="flex">
      <div className="w-20 bg-gradient-to-t from-pink-200 via-red-200 to-pink-300 h-screen fixed left-0 top-0">
        <div className="flex flex-col items-center justify-center h-full">
          <Link
            to={"/"}
            className="flex flex-col justify-center items-center mb-7"
          >
            <AiFillHome size={30} />
            <span>Home</span>
          </Link>
          <div className="flex flex-col items-center">
            {Artists.map((artist) => (
              <button
                onClick={() => {
                  navigate(`/artist/${artist.id}`);
                }}
                className="w-16 h-16 mb-4"
                key={artist.id}
              >
                <img
                  className="w-full h-full object-cover rounded-full"
                  src={artist.img}
                  alt="Artist"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full ml-20">
        <div className="h-60 bg-gradient-to-r from-pink-50 via-pink-200 to-pink-500 border border-b-black shadow-xl">
          <div className="flex pt-10 pl-10">
            <div className="w-44 h-44">
              <img
                className="w-full h-full rounded-full object-cover"
                src={img}
                alt="//"
              />
            </div>
            <div>
              <h1 className="text-7xl font-bold pl-4 pt-5">{name}</h1>
              <p className="text-black font-lg text-md ml-5 mt-3">
                {followers}
                <span className="ml-1 font-lg font-sans">Followers</span>
              </p>
            </div>
          </div>
        </div>
        <div className="mb-20">
          <h1 className="font-extrabold text-3xl ml-5 my-4">Popular</h1>
          <table className="table-auto w-full">
            <tbody>
              {artistTrackData.map((track, idx) => {
                return (
                  <tr
                    key={track.id}
                    className="cursor-pointer hover:bg-pink-50"
                    onClick={() => {
                      setSong(track.preview_url);
                    }}
                  >
                    <td className="border px-4 py-2">{idx + 1}</td>
                    <td className="border px-4 py-2 flex items-center">
                      <img
                        className="w-20 h-20 object-cover rounded-md mr-2"
                        src={track.album.images[0].url}
                        alt=""
                      />
                      <div className="flex flex-col">
                        <p className="text-lg font-semibold">{track.name}</p>
                        {track.preview_url === null ? (
                          <p className="text-red-400 text-lg">
                            Audio is not available
                          </p>
                        ) : null}
                      </div>
                    </td>
                    <td className="border px-4 py-2">
                      {formatDuration(track.duration_ms)}
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
    </div>
  );
};

export default Artist;
