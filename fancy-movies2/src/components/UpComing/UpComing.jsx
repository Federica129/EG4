import MainCard from "../MainCard";
import { useRef, useEffect } from "react";
import styles from "./index.module.scss";

const UpComing = ({ cardData, nCards, type, setId }) => {
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
        <MainCard
          cardData={cardData[ii]}
          type={type}
          classe={styles.cardList}
          key={ii}
          setId={setId}
        />
      ))}
    </div>
  );
};

export default UpComing;
