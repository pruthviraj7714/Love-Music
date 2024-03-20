import React, { useState, useEffect } from "react";
import ImageSlider from "../components/ImageSlider";
import axios from "axios";
import AlbumCard from "../components/AlbumCard";
import { Link } from "react-router-dom";

const TopAlbums = ({ token }) => {
  const [searchAlbum, setSearchAlbum] = useState("Ed Sheeran");
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const albumResponse = await axios.get(
          `https://api.spotify.com/v1/search?q=${searchAlbum}&type=album&limit=6`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setAlbums(albumResponse.data.albums.items);
      } catch (error) {
        console.log("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, [searchAlbum]);

  return (
    <div className="w-full h-full bg-pink-50">
      <div className="flex">
        {/* ImageSlider on the left */}
        <div className="hidden lg:block flex-1 p-2">
          <p className="text-2xl font-semibold mb-1 px-4 text-pink-500">
            Trending Hits
          </p>
          <ImageSlider />
        </div>

        {/* Genres on the right */}
        <div className="flex-1 p-4">
          <p className="text-xl font-semibold mb-4 text-pink-500">Genres</p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {/* Each genre as a card */}
            <Link
              to={"genra/pop"}
              className="bg-blue-200 p-4 rounded-md h-[180px] w-[180px] "
            >
              <p className="text-lg font-semibold">Electro Pop</p>
            </Link>

            <Link
              to={"genra/rock"}
              className="bg-green-200 p-4 rounded-md h-[180px] w-[180px] "
            >
              <p className="text-lg font-semibold">Rock</p>
            </Link>

            <Link
              to={"genra/study"}
              className="bg-yellow-200 p-4 rounded-md h-[180px] w-[180px] "
            >
              <p className="text-lg font-semibold">Study</p>
            </Link>

            <Link
              to={"genra/summer"}
              className="bg-purple-200 p-4 rounded-md h-[180px] w-[180px] "
            >
              <p className="text-lg font-semibold">Summer</p>
            </Link>

            <Link
              to={"genra/anime"}
              className="bg-red-200 p-4 rounded-md h-[180px] w-[180px] "
            >
              <p className="text-lg font-semibold">Anime</p>
            </Link>

            <Link
              to={`/genra/rainy-day`}
              className="bg-indigo-200 p-4 rounded-md h-[180px] w-[180px] "
            >
              <p className="text-lg font-semibold">Rainy Day</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="p-3">
        <div className="flex justify-between mb-4">
          <h1 className="text-pink-500 text-2xl mb-2 font-semibold">
            Top Albums
          </h1>
          <input
            type="text"
            className="rounded-full bg-pink-50 w-64 p-2 border border-pink-500 focus:outline-none font-serif mr-4"
            placeholder="Search Albums"
            onChange={(e) => {
              setTimeout(() => {
                setSearchAlbum(e.target.value);
              }, 1300);
            }}
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-2">
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
      </div>
    </div>
  );
};

export default TopAlbums;
