const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "?api_key=0311818904149c6cafd27cd94505d8ab";

const GET = async (type, specific, language, ext = "") => {
  const res = await fetch(
    BASE_URL + type + "/" + specific + API_KEY + language + ext
  );
  return await res.json();
};

export { GET };

// https://api.themoviedb.org/3/  movie /  324668     ?api_key=0311818904149c6cafd27cd94505d8ab  &language=en-US&page=1

// https://api.themoviedb.org/3/  search  /  company  ?api_key=0311818904149c6cafd27cd94505d8ab  &query=titanic&page=1

// https://api.themoviedb.org/3/ search / movie ?api_key=0311818904149c6cafd27cd94505d8ab &query=titanic&page=1

// https://api.themoviedb.org/3/  movie / 354912 / videos ?api_key=0311818904149c6cafd27cd94505d8ab&language=en-US
