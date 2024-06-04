// Adapters
import { HttpAdapter } from '../../../config/adapters';
// Entities
import type { Movie } from '../../entities';
// Interfaces
import { TMDBResponse } from '../../../infrastructure';
// Mappers
import { MovieMapper } from '../../../infrastructure';


export const popularMoviesUseCase = async ( fetcher: HttpAdapter ): Promise<Movie[]> => {
  try {
    const popularMovies = await fetcher.get<TMDBResponse>( '/popular' );

    //return nowPlaying.results.map( result => MovieMapper.fromMovieDBResultToEntity( result ) );
    return popularMovies.results.map( MovieMapper.fromMovieDBResultToEntity );

  } catch ( error ) {
    console.log( error );
    throw new Error( 'Error fetching movies - Popular Movies' )
  }
}
