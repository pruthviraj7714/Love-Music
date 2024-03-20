import { useEffect, useState } from "react";
import axios from 'axios'
import Header from "../components/Header";
import AlbumCard from "../components/AlbumCard";
import Footer from "../components/Footer";
import SkeletonMusicCard from "../components/SkeletonMusicCard";

const NewRelease = ({token}) => {
    const [albums, setAlbums] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await axios.get(
              "https://api.spotify.com/v1/browse/new-releases?limit=50",
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`,
                },
              }
            );
            setAlbums(res.data.albums.items);
            setLoading(false);
          } catch (e) {
            console.log(e.message);
          }
        };
    
        fetchData();
      }, []);

      if (loading) {
        return (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 p-4 gap-4 mt-16">
            {[...Array(18)].map((_, index) => (
          <SkeletonMusicCard key={index} />
        ))}
          </div>
        );
      }
    

  return (
    <div>
      <Header />
      <div className="mt-16 h-16 w-full font-bold text-5xl pt-3">
        <h1 className="px-2 pb-2">Browse New Release</h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 p-4 gap-4">
          {albums.map((album) => (
            <AlbumCard
              key={album.id}
              img={album.images[0].url}
              title={album.name}
              release_date={album.release_date}
              id={album.id}
            />
          ))}
        </div>
        <Footer />
    </div>
  )
}

export default NewRelease