import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Album from "./pages/Album";
import Home from "./pages/Home";
import PlayList from "./pages/PlayList";
import Artist from "./pages/Artist";
import Genres from "./pages/Genres";
import GenrasList from "./pages/GenrasList";
import NewRelease from "./pages/NewRelease";

const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;

function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tokenResponse = await axios.post(
          "https://accounts.spotify.com/api/token",
          `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );

        const accessToken = tokenResponse.data.access_token;
        setToken(accessToken);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home token={token} />} />
        <Route path="/album/:id" element={<Album token={token} />} />
        <Route path="/playlist/:id" element={<PlayList token={token} />} />
        <Route path="/artist/:id" element={<Artist token={token} />} />
        <Route path="/genra/:name" element={<Genres token={token} />}/>
        <Route path="/genras" element={<GenrasList token={token} />} />
        <Route path="/new_release" element={<NewRelease token={token} />} />
      </Routes>
    </div>
  );
}

export default App;
