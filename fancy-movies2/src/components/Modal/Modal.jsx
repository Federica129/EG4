import { useState, useEffect, useContext } from "react";
import { AiFillStar } from "react-icons/ai";
import { GET } from "../../utils/api";
import { ModalContext } from "../../App";
import styles from "./Modal.module.scss";

function Modal({ id }) {
  const [isActive, setActive] = useState("");

  const modalVisib = useContext(ModalContext);
  const { visibility, setVisibility } = modalVisib;

  const [movieData, setMovieData] = useState([
    {
      key: "",
    },
  ]);

  const [modalData, setModalData] = useState({
    title: "",
    vote_average: 0,
    poster_path: "",
    overview: "",
    backdrop_path: "",
    release_date: "",
  });

  // useEffect(() => {
  //   setActive("active");
  // }, []);

  useEffect(() => {
    setActive("");
    setTimeout(() => {
      setActive(styles.active);
    }, 1000);
  }, [visibility]);

  useEffect(() => {
    id &&
      GET("movie", `${id}/videos`, "&language=en-US").then((dataMovie) => {
        dataMovie.results && setMovieData(dataMovie?.results[0]);
        // console.log(dataMovie.results);
      });
  }, [id]);

  useEffect(() => {
    id &&
      GET("tv", `${id}/videos`, "&language=en-US").then((dataMovie) => {
        dataMovie.results && setMovieData(dataMovie?.results[0]);
      });
  }, [id]);

  useEffect(() => {
    GET("movie", `${id}`, "&language=en-US").then((data) => {
      setModalData(data);
    });
  }, [id]);

  return (
    <div
      className={`${styles.Modal}
    `}
    >
      <div className={styles.modalContent}>
        <div className={styles.modalbox}>
          <div
            className={styles.backdrop}
            style={{
              backgroundImage: `url("https://image.tmdb.org/t/p/original/${modalData.backdrop_path}")`,
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
                src={`https://image.tmdb.org/t/p/w342${modalData.poster_path}`}
                alt="poster_path"
              />
              <div className={styles.vote}>
                <span>
                  <AiFillStar />
                </span>
                <p>{Number(modalData.vote_average.toFixed(1))}</p>
              </div>
            </div>
            <div className={`${styles.text2} ${isActive}`}>
              <h1 className={styles.modalTitle}>{modalData.title}</h1>
              <p className={styles.description}>{modalData.overview}</p>
              <p>
                Release date:{" "}
                {modalData.release_date.split("-").reverse().join("-")}
              </p>

              <div className={styles.trailer}>
                <iframe
                  src={`https://www.youtube.com/embed/${movieData?.key}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  // autoPlay
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
