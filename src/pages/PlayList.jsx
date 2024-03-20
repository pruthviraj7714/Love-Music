import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MusicCard from "../components/MusicCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SkeletonMusicCard from "../components/SkeletonMusicCard";

const PlayList = ({ token }) => {
  const { id } = useParams();
  const [playListData, setplayListData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const playListResponse = await axios.get(
          `https://api.spotify.com/v1/playlists/${id}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setplayListData(playListResponse.data.tracks.items);

        setLoading(false);
      } catch (error) {
        console.log("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4 mt-16">
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
      <div className="mt-16">
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-4">
          {playListData.map((play) => {
            return (
              <MusicCard
                key={play.track.id}
                image={play.track.album?.images[0]?.url}
                name={play.track.name}
                audio={play.track.preview_url}
                artistName={play.track.artists[0].name}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PlayList;
