const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "?api_key=0311818904149c6cafd27cd94505d8ab";

const GET = async (type, movieID) => {
  const res = await fetch(BASE_URL + type + "/" + movieID + API_KEY);
  return await res.json();
};

export { GET };
