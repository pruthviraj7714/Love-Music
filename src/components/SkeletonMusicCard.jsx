const SkeletonMusicCard = () => {
  return (
    <div className="flex p-4">
      <div className="w-72">
        <div className="max-w-sm rounded overflow-hidden shadow-lg animate-pulse">
          <div className="h-48 bg-gray-300"></div>
          <div className="px-6 py-4">
            <div className="h-3 bg-gray-300 mb-2"></div>
            <div className="h-2 bg-gray-300 w-2/3"></div>
          </div>
          <div className="h-4 mx-10 mt-4 bg-gray-300 w-3/4 mb-2"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonMusicCard;
