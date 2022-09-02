import "./index.css";
import { GET } from "../../utils/api";
import { useState, useEffect, memo, useLayoutEffect } from "react";

const MovieEntity = ({ movieTitle }) => {
  const [movieData, setMovieData] = useState([
    {
      poster_path: "",
      original_title: "",
      vote_average: 0,
      title: "",
      adult: false,
    },
  ]);

  const [forbidden, setForbidden] = useState(false);

  useEffect(() => {
    GET("search", "movie", `&query=${movieTitle}&page=1`).then((data) => {
      data.results[0]
        ? data.results[0].adult === false
          ? setMovieData(data.results[0])
          : setForbidden(true)
        : setForbidden(true);
    });

    //  console.log(data);
    // console.log(data.results[0]);

    // return () => setForbidden(false);
  }, [movieTitle]);

  // const { poster_path, original_title, vote_average, title } =
  //   movieData;

  return forbidden === false ? (
    <div className="MovieEntity">
      <div className="MovieEntity__info">
        <div className="MovieEntity__info--title">
          <p>title</p>
          <h1>{movieData.title}</h1>
        </div>
        <div className="MovieEntity__info--bottom">
          <p>rating</p>
          <p>{movieData.vote_average || "not found"}</p>
        </div>
      </div>
      <img
        className="MovieEntity__poster"
        src={`https://image.tmdb.org/t/p/original${movieData.poster_path}`}
        alt={movieData.original_title}
      />
      <div className="MovieEntity__book">
        <button className="MovieEntity__book--btn">Book it!</button>
      </div>
      {/* {movieData ? console.log(movieData) : <p>loading...</p>} */}
    </div>
  ) : (
    <div className="MovieEntity__Error">
      {console.log(forbidden)}
      <h1>Nessun risultato o contenuto vietato ai minori.</h1>
    </div>
  );
};

export default memo(MovieEntity);
