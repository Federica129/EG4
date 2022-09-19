import styles from "./index.module.scss";
import { AiFillStar } from "react-icons/ai";
import { useState, useEffect, useContext } from "react";
import Modal from "../Modal";
import { ModalContext } from "../../App";

const MainCard = ({ cardData, type, numPage, setNumPage, setId }) => {
  const {
    title,
    name,
    vote_average,
    poster_path,
    overview,
    release_date,
    backdrop_path,
    id,
    first_air_date,
  } = cardData;

  // const [visibility, setVisibility] = useState(false);

  const modalVisib = useContext(ModalContext);
  const { setVisibility } = modalVisib;

  // console.log(value);

  // const [visibility, setVisibility] = useState(false);
  const [isActive, setActive] = useState("");

  return (
    <div className={styles.MainCard}>
      <div
        className={` ${styles[type]}`}
        onClick={() => {
          setId(id);
          setVisibility(true);
          document.body.style.overflow = "hidden";
        }}
      >
        <img
          className={styles.img}
          src={`https://image.tmdb.org/t/p/w342${poster_path}`}
          alt={title}
        />
        <div className={styles.text}>
          <h3>{title ? title : name}</h3>
          <div className={styles.text2}>
            <span>
              <AiFillStar />
            </span>
            <p>{vote_average}</p>
          </div>
        </div>
      </div>

      {/* {visibility && (
        <ModalContext.Provider value={ModalVisibility}>
          <Modal
            numPage={numPage}
            setNumPage={setNumPage}
            cardData={cardData}
          />
        </ModalContext.Provider>
      )} */}
    </div>
  );
};

export default MainCard;
