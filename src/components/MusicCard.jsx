import ReactAudioPlayer from "react-audio-player";

const MusicCard = ({ image, audio, name, artistName }) => {
  return (
    <div className="flex justify-center w-72 h-96 relative my-4">
      {image ? (
        <img className="w-full h-80 object-cover" src={image} alt={name} />
      ) : (
        <p className="text-red-400 text-2xl">Image is not available</p>
      )}

      <div className="absolute bottom-0 w-full p-2 bg-pink-50">
        <h3 className="text-2xl">
          {name.length > 20 ? name.substring(0, 20) + "..." : name}
        </h3>
        <p className="text-lg">{artistName}</p>
        <div className="mt-2 flex items-center">
          {audio ? (
            <ReactAudioPlayer src={audio} controls />
          ) : (
            <p className="text-red-400">Audio is not available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MusicCard;
