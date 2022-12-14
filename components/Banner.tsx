import { Movie } from 'typing';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { baseUrl } from 'constants/movie';
import { TbInfoCircle, TbPlayerPlay } from 'react-icons/tb';

interface BannerProps {
  netflixOriginals: Movie[];
}

function Banner({ netflixOriginals }: BannerProps) {
  const [movie, setMovie] = useState<Movie | null>();

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, [netflixOriginals]);

  console.log(movie);

  return (
    <div className='flex flex-col space-x-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12'>
      <div className='absolute top-0 left-0 h-[95vh] w-screen -z-10'>
        <Image
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          layout='fill'
          objectFit='cover'
        />
      </div>

      <h1 className='text-2xl lg:text-7xl md:text-4xl font-bold'>
        {movie?.title || movie?.name || movie?.origin_name}
      </h1>
      <p className='max-w-s text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl'>
        {movie?.overview}
      </p>

      <div className='flex space-x-3'>
        <button type='button' className='bannerButton bg-white text-black'>
          <TbPlayerPlay className='md:h-7 md:w-7' />
          Play
        </button>
        <button type='button' className='bannerButton bg-[gray]/70'>
          More Info <TbInfoCircle className='md:h-7 md:w-7' />
        </button>
      </div>
    </div>
  );
}

export default Banner;
