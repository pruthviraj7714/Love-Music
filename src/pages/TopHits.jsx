import React, { useState, useEffect } from "react";
import axios from "axios";
import PlayListCard from "../components/PlayListCard";
import { AiOutlineArrowRight } from "react-icons/ai";

const TopHits = ({ token }) => {
  const [searchPlayList, setSearchPlayList] = useState("BollywoodTopHits");
  const [playLists, setPlayLists] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const playlistResponse = await axios.get(
          `https://api.spotify.com/v1/search?q=${searchPlayList}&type=playlist&limit=10`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setPlayLists(playlistResponse.data.playlists.items);
      } catch (error) {
        console.log("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full h-full bg-pink-50" id="todaytop">
      <div className="p-2">
        <div className="flex flex-row items-center mb-2 p-2">
          <h1 className="font-semibold text-pink-500 text-3xl mr-2">
            Today's Top Hits
          </h1>
          <AiOutlineArrowRight size={30} />
        </div>
        <p className="text-lg px-2 mb-2">
          Here are Today's Top Hit Playlist play according to your mood!
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8 mb-2">
          {playLists && playLists.length > 0
            ? playLists.map((playlist) => (
                <PlayListCard
                  key={playlist.id}
                  img={playlist.images[0].url}
                  title={playlist.name}
                  count={playlist.tracks.total}
                  id={playlist.id}
                />
              ))
            : "Loading"}
        </div>
      </div>
    </div>
  );
};

export default TopHits;
