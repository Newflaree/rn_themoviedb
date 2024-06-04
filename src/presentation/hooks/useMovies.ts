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
  const [ nowPaying, setnowPaying ] = useState<Movie[]>([]);

  useEffect( () => {
    initialLoad();
  }, [] );

  const initialLoad = async () => {
    const nowPayingMovies = await UseCases.moviesNowPlayingUseCase( movieDBFetcher )
  }


  return {}
}
