import { Link } from 'react-router-dom'

const AlbumCard = ({img, title, release_date, id}) => {
  return (
    <Link to={`/album/${id}`} className='w-[200px] h-[250px] bg-gradient-to-b from-pink-100 via-pink-500 to-red-300 flex flex-col shadow-md'>
        <img src={img} alt="//" className='w-full h-[200px] object-cover' />
        <h1 className='text-center text-black font-bold'>{title.length > 20 ? title.substring(0,20) + "..." : title}</h1>
        <p className='text-center text-gray-900'>{release_date}</p>
    </Link>
  )
}

export default AlbumCard