// src/services/api.js
const API_KEY = '12bae60f08973cb30c741d0844769d9d'; // ضع مفتاحك هنا أو استخدم متغيرات البيئة
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchTrending = async () => {
  const res = await fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
  return res.json();
};

export const searchMovies = async (query) => {
  const res = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
  return res.json();
};
