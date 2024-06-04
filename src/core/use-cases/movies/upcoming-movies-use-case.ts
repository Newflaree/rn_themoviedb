// Adapters
import { HttpAdapter } from '../../../config/adapters';
// Entities
import type { Movie } from '../../entities';
// Interfaces
import { NowPlayingResponse } from '../../../infrastructure';
// Mappers
import { MovieMapper } from '../../../infrastructure';


export const upcomingMoviesUseCase = async ( fetcher: HttpAdapter ): Promise<Movie[]> => {
  try {
    const upcomingMovies = await fetcher.get<NowPlayingResponse>( '/upcoming' );

    //return nowPlaying.results.map( result => MovieMapper.fromMovieDBResultToEntity( result ) );
    return upcomingMovies.results.map( MovieMapper.fromMovieDBResultToEntity );

  } catch ( error ) {
    console.log( error );
    throw new Error( 'Error fetching movies - Upcoming Movies' )
  }
}
