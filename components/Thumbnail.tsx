import { Movie } from 'typing';
import Image from 'next/image';

interface ThumbnailProps {
  movie: Movie;
}

function Thumbnail({ movie }: ThumbnailProps) {
  return (
    <div className='relative h-28 min-w-[180px]  cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105'>
      <Image
        src={`https://image.tmdb.org/t/p/w500/${
          movie.backdrop_path || movie.poster_path
        }`}
        className='rounded-sm object-cover md:rounded group'
        layout='fill'
      />
      <p className='absolute bottom-0 py-2 hidden group-hover:block text-gray-900 text-center bg-white/50 w-full transition duration-200'>
        {movie.title}
      </p>
    </div>
  );
}

export default Thumbnail;
