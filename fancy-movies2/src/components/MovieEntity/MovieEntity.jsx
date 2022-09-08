import styles from "./index.module.scss";
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

  const [movieData1, setMovieData1] = useState([
    {
      key: "",
    },
  ]);

  const [forbidden, setForbidden] = useState(false);
  const [visibility, setVisibility] = useState(false);
  const [isActive, setActive] = useState("");
  const [isActiveHero, setActiveHero] = useState("");

  useEffect(() => {
    setActive("");
    setTimeout(() => {
      setActive(styles.active);
    }, 1000);
  }, [visibility]);

  useEffect(() => {
    setActiveHero("");
    setTimeout(() => {
      GET("search", "movie", `&query=${movieTitle}&page=1`).then((data) => {
        if (data.results[0] && data.results[0].adult === false) {
          setMovieData(data.results[0]);
          // console.log(data.results[0].id);
          setForbidden(false);
          GET("movie", `${data.results[0].id}/videos`, "&language=en-US").then(
            (dataMovie) => {
              setMovieData1(dataMovie.results[0]);
            }
          );
        } else {
          setForbidden(true);
        }
      });
    }, 1000);
    setTimeout(() => {
      setActiveHero(styles.activeHero);
    }, 1500);
  }, [movieTitle]);

  return forbidden === false ? (
    <div className={styles.MovieEntity}>
      <div
        className={`${styles.backdrop} ${isActiveHero}`}
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movieData.backdrop_path}")`,
        }}
      ></div>

      <div className={styles.overlay}></div>
      <div className={styles.info}>
        <div className={`${styles.title} ${isActiveHero}`}>
          <p>title</p>
          <h1>{movieData.title}</h1>
        </div>
        <div className={`${styles.bottom} ${isActiveHero}`}>
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
        className={`${styles.poster} ${isActiveHero}`}
        src={`https://image.tmdb.org/t/p/original${movieData.poster_path}`}
        alt={movieData.original_title}
      />
      <div className={styles.book}>
        <button
          onClick={() => {
            setVisibility(true);
            document.body.style.overflow = "hidden";
          }}
          className={styles.btn}
        >
          More info
        </button>
      </div>
      {visibility && (
        <Modal>
          <div className={styles.modalbox}>
            <div
              className={styles.backdrop}
              style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movieData.backdrop_path}")`,
              }}
            ></div>
            <div className={styles.overlay}></div>
            <div className={styles.button}>
              <p
                onClick={() => {
                  setVisibility(false);
                  document.body.style.overflow = "auto";
                }}
              >
                X
              </p>
            </div>
            <div className={styles.box}>
              <div className={styles.box2}>
                <img
                  src={`https://image.tmdb.org/t/p/w342${movieData.poster_path}`}
                  alt="poster_path"
                />
                <div className={styles.vote}>
                  <span>
                    <AiFillStar />
                  </span>
                  <p>{movieData.vote_average}</p>
                </div>
              </div>
              <div className={`${styles.info2} ${isActive}`}>
                <h1 className={styles.modalTitle}>{movieData.title}</h1>
                <p className={styles.description}>{movieData.overview}</p>
                <p>Release date: {movieData.release_date}</p>
                {movieData1 ? (
                  <div className={styles.trailer}>
                    <iframe
                      src={`https://www.youtube.com/embed/${movieData1.key}?autoplay=1`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      autoPlay
                    ></iframe>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  ) : (
    <div className={styles.Error}>
      {console.log(forbidden)}
      <h1>Nessun risultato o contenuto vietato ai minori.</h1>
    </div>
  );
};

export default memo(MovieEntity);
