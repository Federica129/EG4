import MainCard from "../MainCard";
import { useRef, useEffect } from "react";
import styles from "./index.module.scss";

const UpComing = ({ cardData, nCards }) => {
  const scrollProva = useRef(null);

  useEffect(() => {
    const pippo = scrollProva.current;
    pippo.addEventListener("wheel", (e) => {
      e.preventDefault();
      pippo.scrollLeft += e.deltaY;
    });

    return pippo.removeEventListener("wheel", (e) => {
      e.preventDefault();
      pippo.scrollLeft += e.deltaY;
    });
  }, []);

  return (
    <div className={styles.UpComing} ref={scrollProva}>
      {[...Array(nCards)].map((i, ii) => (
        <MainCard cardData={cardData[ii]} classe={styles.cardList} key={ii} />
      ))}
    </div>
  );
};

export default UpComing;
