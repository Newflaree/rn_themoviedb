import { AxiosAdapter } from './http';

export const movieDBFetcher = new AxiosAdapter({
  baseUrl: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'b8eadbfb0d89caebec2e778a80e07807',
    language: 'es'
  }
});
