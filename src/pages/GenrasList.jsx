import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { GenraCardSkeleton } from "../components/GenraCardSkeleton";

const GenrasList = ({ token }) => {
  const [genras, setGeneras] = useState([]);
  const [loading, setLoading] = useState(true);

  const colors = ["yellow", "blue", "violet", "indigo", "red", 'green', 'pink'];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://api.spotify.com/v1/recommendations/available-genre-seeds`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setGeneras(res.data.genres);
        setLoading(false);
      } catch (e) {
        console.log(e.message);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-6 gap-4 p-4 mt-16">
        {[...Array(24)].map((_, index) => (
          <GenraCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="grid grid-cols-6 gap-4 p-4 mt-16">
        {genras.map((genra, index) => (
          <Link
            to={`../genra/${genra}`}
            className={`bg-${
              colors[index % colors.length]
            }-200 p-4 rounded-md h-[180px] w-[180px] border border-black`}
            key={genra}
          >
            <p className="text-lg font-semibold">{genra}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GenrasList;
