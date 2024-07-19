const API_KEY = '7ccbf33d06e1e0700f1b5fc52e11465b'; // Replace 'YOUR_TMDB_API_KEY_HERE' with your TMDB API key
const YT_API_KEY = 'AIzaSyDX89a1J3KSAKT8sWQerkXbnxpfXdImmJ4'; // Replace 'YOUR_YOUTUBE_API_KEY_HERE' with your YouTube Data API key

const requests = {
  fetchTrending:  `/trending/all/week?api_key=${API_KEY}&region=IN`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=53`, 
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`
  // refer this docs for genre -  https://www.themoviedb.org/talk/5daf6eb0ae36680011d7e6ee 
};

export { YT_API_KEY, requests };