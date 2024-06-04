// Adapters
import { HttpAdapter } from '../../../config/adapters';
// Entities
import type { Movie } from '../../entities';
// Interfaces
import { TMDBResponse } from '../../../infrastructure';
// Mappers
import { MovieMapper } from '../../../infrastructure';


export const topRatedMoviesUseCase = async ( fetcher: HttpAdapter ): Promise<Movie[]> => {
  try {
    const topRatedMovies = await fetcher.get<TMDBResponse>( '/top_rated' );

    //return nowPlaying.results.map( result => MovieMapper.fromMovieDBResultToEntity( result ) );
    return topRatedMovies.results.map( MovieMapper.fromMovieDBResultToEntity );

  } catch ( error ) {
    console.log( error );
    throw new Error( 'Error fetching movies - Top Rated Movies' )
  }
}
