import { useState, useEffect, useContext } from "react";
import { AiFillStar } from "react-icons/ai";
import { GET } from "../../utils/api";
import { ModalContext } from "../../App";
import styles from "./Modal.module.scss";

function Modal({ id, modalType, setModalType }) {
  const [isActive, setActive] = useState("");
  const [isActiveModal, setActiveModal] = useState("");

  const modalVisib = useContext(ModalContext);
  const { modalVisibility } = modalVisib;
  const { visibility, setVisibility } = modalVisibility;

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
    name: "",
    last_air_date: "",
  });

  useEffect(() => {
    setActiveModal(styles.active);
  }, []);

  useEffect(() => {
    setActive("");
    setTimeout(() => {
      setActive(styles.active);
    }, 1000);
  }, [visibility]);

  useEffect(() => {
    id &&
      modalType === "tv" &&
      GET("tv", `${id}/videos`, "&language=en-US").then(dataMovie => {
        dataMovie.results && setMovieData(dataMovie?.results[0]);
      }) &&
      GET("tv", `${id}`, "&language=en-US").then(data => {
        setModalData(data);
      });
  }, [id]);

  useEffect(() => {
    id &&
      modalType === "" &&
      GET("movie", `${id}/videos`, "&language=en-US").then(dataMovie => {
        dataMovie.results && setMovieData(dataMovie?.results[0]);
      }) &&
      GET("movie", `${id}`, "&language=en-US").then(data => {
        setModalData(data);
      });
  }, [id]);

  return (
    <div className={`${styles.Modal}`}>
      <div className={`${styles.modalContent} ${isActiveModal}`}>
        <div className={styles.modalbox}>
          <div
            className={styles.backdrop}
            style={{
              backgroundImage: `url("https://image.tmdb.org/t/p/original/${
                modalData.backdrop_path ?? null
              }")`,
            }}
          ></div>

          <div className={styles.overlay}></div>

          <div className={styles.button}>
            <p
              onClick={() => {
                setVisibility(false);
                setModalType("");
                document.body.style.overflow = "auto";
              }}
            >
              X
            </p>
          </div>
          <div className={styles.box}>
            <div className={styles.box2}>
              <img
                src={`https://image.tmdb.org/t/p/w342${
                  modalData.poster_path ? modalData.poster_path : null
                }`}
                alt="poster_path"
              />
              <div className={styles.vote}>
                <span>
                  <AiFillStar />
                </span>
                <p>
                  {Number(
                    modalData.vote_average
                      ? modalData.vote_average.toFixed(1)
                      : null
                  )}
                </p>
              </div>
            </div>
            <div className={`${styles.text2} ${isActive}`}>
              <h1 className={styles.modalTitle}>
                {modalData.title ? modalData.title : modalData.name}
              </h1>
              <p className={styles.description}>
                {modalData.overview ? modalData.overview : null}
              </p>
              <p>
                Release date:{" "}
                {(modalData.release_date
                  ? modalData.release_date
                  : modalData.last_air_date
                )
                  .split("-")
                  .reverse()
                  .join("-")}
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
