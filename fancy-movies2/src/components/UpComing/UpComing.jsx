import MainCard from "../MainCard";
import { useRef, useEffect } from "react";
import "./index.css";

const UpComing = ({ cardData, nCards }) => {
  const scrollProva = useRef(null);

  useEffect(() => {
    const pippo = scrollProva.current;
    pippo.addEventListener("wheel", (e) => {
      e.preventDefault();
      pippo.scrollLeft += e.deltaY;
    });
  }, []);

  return (
    <div className="UpComing" ref={scrollProva}>
      {[...Array(nCards)].map((i, ii) => (
        <MainCard cardData={cardData[ii]} classe={"pippo"} key={ii} />
      ))}
    </div>
  );
};

export default UpComing;
