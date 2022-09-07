import { useState, useEffect } from "react";
import MainCard from "../MainCard";
import TopRatedList from "../TopRatedList";
import { GET } from "../../utils/api";
import styles from "./index.module.scss";
import UpComing from "../UpComing";

const MainSection = () => {
  const [movieLists, setMovieLists] = useState({});
  const [movieListsFilt, setMovieListsFilt] = useState([]);

  useEffect(() => {
    GET("movie", "popular", "&language=en-US&page=1").then((data) =>
      setMovieLists((prev) => ({ ...prev, popular: data.results }))
    );

    GET("movie", "top_rated", "&language=en-US&page=1").then((data) => {
      setMovieLists((prev) => ({ ...prev, topRated: data.results }));
    });

    GET("movie", "upcoming", "&language=en-US&page=1").then((data) =>
      setMovieLists((prev) => ({ ...prev, upcoming: data.results }))
    );
  }, []);

  useEffect(() => {
    movieLists.topRated &&
      setMovieListsFilt(
        movieLists.topRated.filter((movie) => movie.vote_average >= 8.7)
      );
    // console.log(movieListsFilt);
  }, [movieLists.topRated]); // !!!!!!!!!!!!!

  return (
    <div className={styles.MainSection}>
      <div className={styles.topMovie}>
        {movieLists.popular && (
          <MainCard type="popular" cardData={movieLists.popular[1]} />
        )}
      </div>

      <div className={styles.list}>
        <h2>Top Rated</h2>
        {movieLists.topRated && (
          <TopRatedList type="topRated" cardData={movieListsFilt} nCards={10} />
        )}

        <h2>Up coming</h2>
        {movieLists.upcoming && (
          <UpComing
            type="upComing"
            cardData={movieLists.upcoming}
            nCards={15}
          />
        )}
      </div>
    </div>
  );
};

export default MainSection;
