import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import  Posters from '../data/posterData';
import { AiFillHeart } from 'react-icons/ai';


const ImageSlider = () => {
  const [imageIndex, setImageIndex] = useState(Math.floor(Math.random() * Posters.length));

  const nextImage = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % Posters.length);
  };

  const prevImage = () => {
    setImageIndex((prevIndex) => (prevIndex - 1 + Posters.length) % Posters.length);
  };

  return (
    <div className="max-w-[840px] h-[400px] w-full py-2 px-4 relative group">
      <div style={{backgroundImage: `url(${Posters[imageIndex]})`}} className='w-full h-full rounded-xl bg-center bg-cover duration-500'>

          <div className='hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactLeft onClick={prevImage} size={30} />
          </div>

          <div className='hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactRight onClick={nextImage} size={30} />
          </div>
          <div className='flex justify-center items-center absolute bottom-7 left-5'>
            <button className='px-4 py-2 text-white rounded-full bg-transparent/80 mr-3'>Listen Now</button>
            <AiFillHeart size={25} className='text-pink-500'/>
          </div>
      </div>
    </div>
  );
};

export default ImageSlider;


