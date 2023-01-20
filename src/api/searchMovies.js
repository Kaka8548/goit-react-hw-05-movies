import axios from 'axios';

export default class searchMovies {
  #API_KEY = '65e6f4aac7e3640c780d24b1205717d3';
  #API_URL = `https://api.themoviedb.org/3`;

  constructor() {
    this.searchType = null;
    this.query = null;
  }

  fetchMovies() {
    const searchParams = new URLSearchParams({
      api_key: this.#API_KEY,
      query: this.query,
    });

    return axios.get(`${this.#API_URL}${this.searchType}?${searchParams}`);
  }
}
