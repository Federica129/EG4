import styles from "./index.module.scss";
import { AiFillStar } from "react-icons/ai";
import { useState, useEffect, memo } from "react";
import Modal from "../Modal";
import { GET } from "../../utils/api";

const MainCard = ({ cardData, type }) => {
  const {
    title,
    vote_average,
    poster_path,
    overview,
    release_date,
    backdrop_path,
    id,
  } = cardData;

  const [visibility, setVisibility] = useState(false);
  const [isActive, setActive] = useState("");

  const [movieData, setMovieData] = useState([
    {
      key: "",
    },
  ]);

  useEffect(() => {
    setActive("");
    setTimeout(() => {
      setActive(styles.active);
    }, 1000);
  }, [visibility]);

  useEffect(() => {
    GET("movie", `${id}/videos`, "&language=en-US").then((dataMovie) => {
      setMovieData(dataMovie.results[0]);
      console.log(dataMovie.results);
    });
  }, []);

  return (
    <div className={styles.MainCard}>
      <div
        className={` ${styles[type]}`}
        onClick={() => {
          setVisibility(true);
        }}
      >
        <img
          className={styles.img}
          src={`https://image.tmdb.org/t/p/w342${poster_path}`}
          alt={title}
        />
        <div className={styles.text}>
          <h3>{title}</h3>
          <div className={styles.text2}>
            <p>{vote_average}</p>
            <span>
              <AiFillStar />
            </span>
          </div>
        </div>
      </div>
      {visibility && (
        <Modal>
          <div className={styles.modalbox}>
            <div
              className={styles.backdrop}
              style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${backdrop_path}")`,
              }}
            ></div>

            <div className={styles.overlay}></div>

            <div className={styles.button}>
              <p onClick={() => setVisibility(false)}>X</p>
            </div>

            <div className={styles.box}>
              <div className={styles.box2}>
                <img
                  src={`https://image.tmdb.org/t/p/w342${poster_path}`}
                  alt="poster_path"
                />
                <div className={styles.vote}>
                  <span>
                    <AiFillStar />
                  </span>
                  <p>{vote_average}</p>
                </div>
              </div>
              <div className={`${styles.text2} ${isActive}`}>
                <h1 className={styles.modalTitle}>{title}</h1>
                <p className={styles.description}>{overview}</p>
                <p>Release date: {release_date}</p>
                {movieData ? (
                  <div className={styles.trailer}>
                    <iframe
                      src={`https://www.youtube.com/embed/${movieData.key}?autoplay=1`}
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
  );
};

export default memo(MainCard);
