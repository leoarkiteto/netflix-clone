import Image from 'next/image';
import { TbBell, TbSearch } from 'react-icons/tb';
import Link from 'next/link';
import { useEffect, useState } from 'react';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  function handleScroll() {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    }
    setIsScrolled(false);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${isScrolled && 'bg-[#141414]'}`}>
      <div className='flex items-center space-x-2 md:space-x-10'>
        <Image
          src='https://rb.gy/ulxxee'
          alt='netflix logo'
          width={100}
          height={50}
          className='cursor-pointer object-contain'
        />

        <ul className='hidden space-x-4 md:flex'>
          <li className='headerLink'>Home</li>
          <li className='headerLink'>TV Shows</li>
          <li className='headerLink'>Movies</li>
          <li className='headerLink'>New & Popular</li>
          <li className='headerLink'>My List</li>
        </ul>
      </div>

      <div className='flex items-center space-x-4 text-sm font-light'>
        <TbSearch size={24} className='hidden sm:inline' />
        <p className='hidden lg:inline'>Kids</p>
        <TbBell size={24} />
        <Link href='/account'>
          <img
            alt='profile'
            src='https://rb.gy/g1pwyx'
            className='cursor-pointer rounded'
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
