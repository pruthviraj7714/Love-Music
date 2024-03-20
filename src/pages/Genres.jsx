import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MusicCard from "../components/MusicCard";
import Header from "../components/Header";
import SkeletonMusicCard from "../components/SkeletonMusicCard";
import Footer from "../components/Footer";

const Genres = ({ token }) => {
  const { name } = useParams();
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://api.spotify.com/v1/recommendations?seed_genres=${name}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setTracks(res.data.tracks);
        setLoading(false);
      } catch (e) {
        console.log(e.message);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-4">
        <SkeletonMusicCard />
        <SkeletonMusicCard />
        <SkeletonMusicCard />
        <SkeletonMusicCard />
        <SkeletonMusicCard />
        <SkeletonMusicCard />
        <SkeletonMusicCard />
        <SkeletonMusicCard />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="mt-16 h-24 w-full font-bold text-5xl pt-2">
        <h1 className="uppercase px-2 pt-5">{name}</h1>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-4">
        {tracks.map((track) => {
          return (
            <MusicCard
              name={track.name}
              audio={track.preview_url}
              image={track.album.images[0].url}
              artistName={track.artists[0].name}
              key={track.id}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Genres;
