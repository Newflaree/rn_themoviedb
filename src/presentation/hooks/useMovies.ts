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

  useEffect( () => {
    initialLoad();
  }, [] );

  const initialLoad = async () => {
    const nowPlayingMovies = await UseCases.moviesNowPlayingUseCase( movieDBFetcher )
  }

  return {
    isLoading,
    nowPlaying
  }
}
