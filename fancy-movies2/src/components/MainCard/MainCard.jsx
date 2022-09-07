import styles from "./index.module.scss";
import { AiFillStar } from "react-icons/ai";
import { useState, useEffect, memo } from "react";
import Modal from "../Modal";

const MainCard = ({ cardData, classe }) => {
  const {
    title,
    vote_average,
    poster_path,
    overview,
    release_date,
    backdrop_path,
  } = cardData;
  const [visibility, setVisibility] = useState(false);
  const [isActive, setActive] = useState("");

  useEffect(() => {
    setActive("");
    setTimeout(() => {
      setActive(styles.active);
    }, 1000);
  }, [visibility]);

  return (
    <>
      <div
        className={classe}
        onClick={() => {
          setVisibility(true);
        }}
      >
        <div className={styles.MainCard}>
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
              <div className={`${styles.text} ${isActive}`}>
                <h1 className={styles.modalTitle}>{title}</h1>
                <p className={styles.description}>{overview}</p>
                <p>Release date: {release_date}</p>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default memo(MainCard);
