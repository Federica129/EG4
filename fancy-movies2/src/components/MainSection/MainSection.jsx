import { useState, useEffect, createContext, useContext } from "react";
import MainCard from "../MainCard";
import TopRatedList from "../TopRatedList";
import Popular from "../Popular";
import { GET } from "../../utils/api";
import styles from "./index.module.scss";
import UpComing from "../UpComing";
import ListMovie from "../ListMovie";
import { ModalContext } from "../../App";

const MainSection = ({ allRef, setId, setModalType }) => {
  const [movieLists, setMovieLists] = useState({});
  const [movieListsFilt, setMovieListsFilt] = useState([]);
  const [numPage, setNumPage] = useState("1");

  const changePage = useContext(ModalContext);
  const { reducerFn } = changePage;

  useEffect(() => {
    GET("movie", "popular", "&language=en-US&page=1").then((data) => {
      setMovieLists((prev) => ({ ...prev, popular: data?.results }));
    });

    GET("movie", "top_rated", "&language=en-US&page=1").then((data) => {
      setMovieLists((prev) => ({ ...prev, topRated: data?.results }));
    });

    GET("movie", "upcoming", "&language=en-US&page=1").then((data) => {
      setMovieLists((prev) => ({ ...prev, upcoming: data?.results }));
    });
  }, []);

  useEffect(() => {
    reducerFn.state.page &&
      GET(
        "tv",
        "popular",
        `&language=en-US&page=`,
        `${reducerFn.state.page}`
      ).then((data) => {
        setMovieLists((prev) => ({ ...prev, popularTv: data?.results }));
      });
  }, [reducerFn.state.page]);

  useEffect(() => {
    movieLists.topRated &&
      setMovieListsFilt(
        movieLists.topRated.filter((movie) => movie.vote_average >= 8.6)
      );
  }, [movieLists.topRated]);

  return (
    <>
      {" "}
      <div ref={allRef.refMovie} className={styles.MainSection}>
        <div className={styles.topMovie}>
          {movieLists.popular && (
            <MainCard
              type="popular"
              cardData={movieLists.popular[0]}
              setId={setId}
            />
          )}
        </div>

        <div className={styles.list}>
          <h2>Top Rated {">"} 8.6</h2>
          {movieLists.topRated && (
            <TopRatedList
              type="topRated"
              cardData={movieListsFilt}
              nCards={10}
              setId={setId}
            />
          )}

          <h2>UpComing</h2>
          {movieLists.upcoming && (
            <UpComing
              type="upComing"
              cardData={movieLists.upcoming}
              nCards={15}
              setId={setId}
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
            setId={setId}
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
            setId={setId}
            setModalType={setModalType}
            reducer={reducerFn}
          />
        )}
      </div>
    </>
  );
};

export default MainSection;
