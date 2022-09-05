import "./index.scss";
import { GET } from "../../utils/api";
import { useState, useEffect, memo } from "react";
import { AiFillStar } from "react-icons/ai";
import Modal from "../Modal";

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
  const [visibility, setVisibility] = useState(false);
  const [isActive, setActive] = useState("");

  useEffect(() => {
    setActive("");
    setTimeout(() => {
      setActive("active");
    }, 1000);
  }, [visibility]);

  useEffect(() => {
    GET("search", "movie", `&query=${movieTitle}&page=1`).then((data) => {
      if (data.results[0] && data.results[0].adult === false) {
        setMovieData(data.results[0]);
        setForbidden(false);
      } else {
        setForbidden(true);
      }
    });
  }, [movieTitle]);

  return forbidden === false ? (
    <div className="MovieEntity">
      <div className="MovieEntity__info">
        <div className="MovieEntity__info--title">
          <p>title</p>
          <h1>{movieData.title}</h1>
        </div>
        <div className="MovieEntity__info--bottom">
          <p>rating</p>
          <p>
            <span>
              <AiFillStar />
            </span>
            {movieData.vote_average || "not found"}
          </p>
        </div>
      </div>
      <img
        className="MovieEntity__poster"
        src={`https://image.tmdb.org/t/p/original${movieData.poster_path}`}
        alt={movieData.original_title}
      />
      <div className="MovieEntity__book">
        <button
          onClick={() => {
            setVisibility(true);
          }}
          className="MovieEntity__book--btn"
        >
          More info
        </button>
      </div>
      {visibility && (
        <Modal>
          <div className="modalbox">
            <div
              className="backdrop"
              style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movieData.backdrop_path}")`,
              }}
            ></div>

            <div className="overlay"></div>

            <div className="button">
              <p onClick={() => setVisibility(false)}>X</p>
            </div>

            <div className="box">
              <div className="box2">
                <img
                  src={`https://image.tmdb.org/t/p/w342${movieData.poster_path}`}
                  alt="poster_path"
                />
                <div className="vote">
                  <span>
                    <AiFillStar />
                  </span>
                  <p>{movieData.vote_average}</p>
                </div>
              </div>
              <div className={`text ${isActive}`}>
                <h1 className="modal-title">{movieData.title}</h1>
                <p className={`description`}>{movieData.overview}</p>
                <p>Release date: {movieData.release_date}</p>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  ) : (
    <div className="MovieEntity__Error">
      {console.log(forbidden)}
      <h1>Nessun risultato o contenuto vietato ai minori.</h1>
    </div>
  );
};

export default memo(MovieEntity);
