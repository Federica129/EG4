import styles from "./index.module.scss";
import { GET } from "../../utils/api";
import { useState, useEffect, useContext } from "react";
import { AiFillStar } from "react-icons/ai";
import Modal from "../Modal";
import { ModalContext } from "../../App";

const MovieEntity = ({ movieTitle, setId }) => {
  const [entityData, setEntityData] = useState([
    {
      poster_path: "",
      original_title: "",
      vote_average: 0,
      title: "",
      adult: false,
      id: 0,
    },
  ]);

  const [movieData1, setMovieData1] = useState([
    {
      key: "",
    },
  ]);

  const [forbidden, setForbidden] = useState(false);
  const [isActive, setActive] = useState("");
  const [isActiveHero, setActiveHero] = useState("");

  const modalVisib = useContext(ModalContext);
  const { visibility, setVisibility } = modalVisib;

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
          setEntityData(data.results[0]);
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
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${entityData.backdrop_path}")`,
        }}
      ></div>

      <div className={styles.overlay}></div>
      <div className={styles.info}>
        <div className={`${styles.title} ${isActiveHero}`}>
          <p>title</p>
          <h1>{entityData.title}</h1>
        </div>
        <div className={`${styles.bottom} ${isActiveHero}`}>
          <p>rating</p>
          <p>
            <span>
              <AiFillStar />
            </span>
            {entityData.vote_average || "not found"}
          </p>
        </div>
      </div>
      <img
        className={`${styles.poster} ${isActiveHero}`}
        src={`https://image.tmdb.org/t/p/original${entityData.poster_path}`}
        alt={entityData.original_title}
      />
      <div className={styles.book}>
        <button
          onClick={() => {
            setId(entityData.id);
            setVisibility(true);
            document.body.style.overflow = "hidden";
          }}
          className={styles.btn}
        >
          More info
        </button>
      </div>
    </div>
  ) : (
    <div className={styles.Error}>
      {console.log(forbidden)}
      <h1>Nessun risultato o contenuto vietato ai minori.</h1>
    </div>
  );
};

export default MovieEntity;
