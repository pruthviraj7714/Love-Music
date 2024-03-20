import { AiOutlineArrowRight } from "react-icons/ai";
import Artists from "../data/artistdata";
import ArtistsCard from "../components/ArtistsCard";

const TopArtists = () => {
  return (
    <div className="w-full h-full p-4 bg-pink-50 pb-20" id="topartist">
      <div className="mb-4">
        <div className="flex items-center">
          <h1 className="text-2xl text-pink-500 mb-2 mr-2 font-semibold">
            Artists You May Like
          </h1>
          <AiOutlineArrowRight size={20} />
        </div>
        <p>Hope voice of your fav artist will make your day</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {Artists.map((artist, idx) => (
          <ArtistsCard
            id={artist.id}
            key={idx}
            name={artist.name}
            img={artist.img}
          />
        ))}
      </div>
    </div>
  );
};

export default TopArtists;
