import { useState, useEffect } from "react";
// import listFilm from "../../assets/listFilm";
import Card from "../Card";
import "./index.css";

const CardList = ({ title, BASE_URL, modalVisibility, personalList }) => {
  const [seriesList, setSeriesList] = useState([]);
  const [seriesList1, setSeriesList1] = useState([]);

  const removeBrokenSerie = (list, id) =>
    list.filter((serie) => serie.id !== id);

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) =>
        setSeriesList(
          removeBrokenSerie(data, "7b3b3475-8061-4490-a411-6e8498138dae")
        )
      );
  }, [BASE_URL]);

  useEffect(() => {
    setSeriesList1(personalList);
  }, [personalList]);

  return (
    <div className="CardList">
      <h1 className="CardList__top">{title}</h1>
      <div className="CardList__list">
        {BASE_URL
          ? seriesList.map((serie) => (
              <Card
                data={serie}
                modalVisibility={modalVisibility}
                key={serie.id}
              />
            ))
          : seriesList1.map((serie) => (
              <Card
                data={serie}
                modalVisibility={modalVisibility}
                key={serie.id}
              />
            ))}
        ;
      </div>
      {/* <h1 className="CardList__top">Film miei</h1>
      <div className="CardList__mio">
        {listFilm.map((serie) => (
          <Card key={serie.id} data={serie} />
        ))}
      </div> */}
    </div>
  );
};

export default CardList;
