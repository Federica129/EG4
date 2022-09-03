import MainCard from "../MainCard";
import Modal from "../Modal";
import { useState, useRef, useEffect } from "react";
import "./index.css";

const TopRatedList = ({ cardData, nCards }) => {
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
    <div className="TopRatedList" ref={scrollProva}>
      {cardData.map((i, ii) => (
        <MainCard cardData={i} classe={"cardList"} key={ii} />
      ))}
    </div>
  );
};

export default TopRatedList;
