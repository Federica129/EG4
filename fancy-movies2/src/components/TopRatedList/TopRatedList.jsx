import MainCard from "../MainCard";

import { useRef, useEffect } from "react";
import styles from "./index.module.scss";

const TopRatedList = ({ cardData, nCards, type, setId }) => {
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
    <div className={styles.TopRatedList} ref={scrollProva}>
      {cardData.map((i, ii) => (
        <MainCard
          cardData={i}
          type={type}
          classe={styles.cardList}
          key={ii}
          setId={setId}
        />
      ))}
    </div>
  );
};

export default TopRatedList;
