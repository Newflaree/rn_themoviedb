// React
import {
  useEffect,
  useState
} from 'react';
// Adapters
import { movieDBFetcher } from '../../config/adapters';
// Entites
import type { Movie } from '../../core/entities';
// Use Cases
import * as UseCases from '../../core/use-cases';


export const useMovies = () => {
  const [ isLoading, setIsLoading ] = useState( true );
  const [ nowPlaying, setNowPlaying ] = useState<Movie[]>([]);
  const [ popular, setPopular ] = useState<Movie[]>([]);
  const [ topRated, setTopRated ] = useState<Movie[]>([]);
  const [ upcoming, setUpcoming ] = useState<Movie[]>([]);

  useEffect( () => {
    initialLoad();
  }, [] );

  const initialLoad = async () => {
    const [
      nowPlayingMovies,
      popularMovies,
      topRatedMovies,
      upcomingMovies
    ] = await Promise.all([
      UseCases.moviesNowPlayingUseCase( movieDBFetcher ),
      UseCases.popularMoviesUseCase( movieDBFetcher ),
      UseCases.topRatedMoviesUseCase( movieDBFetcher ),
      UseCases.upcomingMoviesUseCase( movieDBFetcher ),
    ]);

    setNowPlaying( nowPlayingMovies );
    setPopular( popularMovies );
    setTopRated( topRatedMovies );
    setUpcoming( upcomingMovies );

    setIsLoading( false );
  }

  return {
    isLoading,
    nowPlaying,
    popular,
    topRated,
    upcoming
  }
}
