import { useState, useEffect } from "react";
import MainCard from "../MainCard";
import TopRatedList from "../TopRatedList";
import { GET } from "../../utils/api";
import "./index.css";
import UpComing from "../UpComing";

const MainSection = () => {
  const [movieLists, setMovieLists] = useState({});

  useEffect(() => {
    GET("movie", "popular", "&language=en-US&page=1").then((data) =>
      setMovieLists((prev) => ({ ...prev, popular: data.results }))
    );

    GET("movie", "top_rated", "&language=en-US&page=1").then((data) =>
      setMovieLists((prev) => ({ ...prev, topRated: data.results }))
    );

    GET("movie", "upcoming", "&language=en-US&page=1").then((data) =>
      setMovieLists((prev) => ({ ...prev, upcoming: data.results }))
    );
  }, []);

  return (
    <div className="MainSection">
      {movieLists.popular && <MainCard cardData={movieLists.popular[0]} />}

      <div className="list">
        <h2>Top Rated</h2>
        {movieLists.topRated && (
          <TopRatedList cardData={movieLists.topRated} nCards={10} />
        )}
        <h2>Up coming</h2>
        {movieLists.upcoming && (
          <UpComing cardData={movieLists.upcoming} nCards={10} />
        )}
      </div>
    </div>
  );
};

export default MainSection;
