import styles from "./index.module.scss";
import { AiFillStar } from "react-icons/ai";
import { useContext } from "react";
import { ModalContext } from "../../App";

const MainCard = ({ cardData, type, setId, setModalType }) => {
  const { title, vote_average, poster_path, id } = cardData;

  const modalVisib = useContext(ModalContext);
  const { setVisibility } = modalVisib;

  return (
    <div className={styles.MainCard}>
      <div
        className={` ${styles[type]}`}
        onClick={() => {
          type === "popularTv" && setModalType("tv");
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
          <h3>{title}</h3>
          <div className={styles.text2}>
            <span>
              <AiFillStar />
            </span>
            <p>{vote_average}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
