import create from 'zustand';
import { Movie } from 'typing';

type MovieStore = {
  movie: Movie[];
  addMovie: (movie: Movie) => void;
};

const useMovieStore = create<MovieStore>(set => ({
  movie: [],

  addMovie: movie => {
    set(state => ({ ...state, newMovie: movie }));
  },
}));

export default useMovieStore;
