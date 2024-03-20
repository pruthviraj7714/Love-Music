const HomeSkeleton = () => {
  return (
    <div className="w-full h-screen flex items-center justify-evenly animate-pulse">
      <div className="flex flex-col justify-center ">
        <div className="bg-gray-300 w-80 h-4 mb-4" />
        <div className="bg-gray-300 w-96 h-2 mb-2"></div>
        <div className="bg-gray-300 w-80 h-2"></div>
        <div className="bg-gray-300 px-5 py-2 rounded-full mt-4 w-44 h-12"></div>
      </div>
      <div className="w-[450px] h-[550px]">
        <div className="w-full h-full rounded-full shadow-lg bg-gray-200" />
      </div>
    </div>
  );
};

export default HomeSkeleton;
