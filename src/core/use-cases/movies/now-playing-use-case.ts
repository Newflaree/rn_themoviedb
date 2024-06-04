// Adapters
import { HttpAdapter } from '../../../config/adapters';
// Interfaces
import { NowPlayingResponse } from '../../../infrastructure';
import { Movie } from '../../entities';


export const moviesNowPlayingUseCase = async ( fetcher: HttpAdapter ): Promise<Movie[]> => {
  try {
    const nowPlaying = await fetcher.get<NowPlayingResponse>( '/now-playing' );
    console.log( nowPlaying );

    return [

    ];
  } catch ( error ) {
    console.log( error );
    throw new Error( 'Error fetching movies - NowPlaying' )
  }
}
