// Entities
import type { Movie } from '../../core/entities';
// Interfaces
import type { Result } from '../interfaces';


export class MovieMapper {
  static fromMovieDBResultToEntity( result: Result ): Movie {
    return {
      id: result.id,
      title: result.title,
      description: result.overview,
      releaseDate: new Date( result.release_date ),
      rating: result.vote_average,
      poster: `https://image/tmdb.org/t//w500${ result.poster_path }`,
      backdrop: `https://image/tmdb.org/t/p/w500${ result.backdrop_path }`,
    }
  }
}
