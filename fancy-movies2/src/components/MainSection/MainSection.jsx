import { useState, useEffect } from "react";
import MainCard from "../MainCard";
import TopRatedList from "../TopRatedList";
import Popular from "../Popular";
import { GET } from "../../utils/api";
import styles from "./index.module.scss";
import UpComing from "../UpComing";
import ListMovie from "../ListMovie";

const MainSection = ({ allRef }) => {
  const [movieLists, setMovieLists] = useState({});
  const [movieListsFilt, setMovieListsFilt] = useState([]);
  const [numPage, setNumPage] = useState(1)

  useEffect(() => {
    GET("movie", "popular", "&language=en-US&page=1").then((data) => {
      setMovieLists((prev) => ({ ...prev, popular: data.results }));
    });

    GET("movie", "top_rated", "&language=en-US&page=1").then((data) => {
      setMovieLists((prev) => ({ ...prev, topRated: data.results }));
    });

    GET("movie", "upcoming", "&language=en-US&page=1").then((data) => {
      setMovieLists((prev) => ({ ...prev, upcoming: data.results }));
    });
  }, []);

  useEffect(() => {
    GET("tv", "popular", `&language=en-US&page=`, `${numPage}`).then((data) => {
      setMovieLists((prev) => ({ ...prev, popularTv: data.results }));
    });
  }, [numPage])

  useEffect(() => {
    movieLists.topRated &&
      setMovieListsFilt(
        movieLists.topRated.filter((movie) => movie.vote_average >= 8.6)
      );
    // console.log(movieListsFilt);
  }, [movieLists.topRated]); // !!!!!!!!!!!!!

  return (
    <>
      <div ref={allRef.refMovie} className={styles.MainSection}>
        <div className={styles.topMovie}>
          {movieLists.popular && (
            <MainCard type="popular" cardData={movieLists.popular[1]} />
          )}
        </div>

        <div className={styles.list}>
          <h2>Top Rated {">"} 8.6</h2>
          {movieLists.topRated && (
            <TopRatedList
              type="topRated"
              cardData={movieListsFilt}
              nCards={10}
            />
          )}

          <h2>UpComing</h2>
          {movieLists.upcoming && (
            <UpComing
              type="upComing"
              cardData={movieLists.upcoming}
              nCards={15}
            />
          )}
        </div>
      </div>
      <div ref={allRef.refPopular} className={styles.list}>
        <h2>Popular</h2>
        {movieLists.popular && (
          <Popular
            type="popularList"
            cardData={movieLists.popular}
            nCards={20}
          />
        )}
      </div>
      <div className={styles.listTv}>
        <h2>Popular Tv</h2>
        {movieLists.popularTv && (
          <ListMovie
          numPage={numPage}
          setNumPage={setNumPage}
            type="popularTv"
            cardData={movieLists.popularTv}
          />
        )}
      </div>
    </>
  );
};

export default MainSection;
