// Adapters
import { HttpAdapter } from '../../../config/adapters';
// Entities
import type { Movie } from '../../entities';
// Interfaces
import { NowPlayingResponse } from '../../../infrastructure';
// Mappers
import { MovieMapper } from '../../../infrastructure';


export const moviesNowPlayingUseCase = async ( fetcher: HttpAdapter ): Promise<Movie[]> => {
  try {
    const nowPlaying = await fetcher.get<NowPlayingResponse>( '/now_playing' );

    //return nowPlaying.results.map( result => MovieMapper.fromMovieDBResultToEntity( result ) );
    return nowPlaying.results.map( MovieMapper.fromMovieDBResultToEntity );

  } catch ( error ) {
    console.log( error );
    throw new Error( 'Error fetching movies - NowPlaying' )
  }
}
