import { Link } from 'react-router-dom'

const ArtistsCard = (props) => {
  return (
    <Link to={`/artist/${props.id}`} className='w-[230px] h-[270px]  bg-red-200 flex flex-col justify-center items-center hover:scale-90 duration-300 '>
      <div className='w-[180px] h-[180px] mb-2'>
        <img src={props.img} alt="/" className='w-full h-full object-cover rounded-full'/>
      </div>
      <div className='text-center'>
        <h1>{props.name}</h1>
        <p>Artist</p>
      </div>

    </Link>
    
  )
}

export default ArtistsCard