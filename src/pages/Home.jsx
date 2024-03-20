import Main from "../components/Main";
import TopAlbums from "./TopAlbums";
import TopHits from "./TopHits";
import TopArtists from "./TopArtists";
import Footer from "../components/Footer";
import HomeSkeleton from "../components/HomeSkeleton";


const Home = ({token}) => {
    if(!token) {
      return <div>
        <HomeSkeleton />
      </div>
    }


  return (
    <div>
        <Main />
        <TopAlbums token={token}/>
        <TopHits token={token}/>
        <TopArtists />
        <Footer />
    </div>
    

  )
}

export default Home