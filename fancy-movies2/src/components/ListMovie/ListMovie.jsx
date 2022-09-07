import styles from "./index.module.scss";
import MainCard from "../MainCard";

const ListMovie = ({ children }) => {
  // useEffect(() => {
  //   GET("movie", "popular", "&language=en-US&page=1").then((data) =>
  //     setMovieLists((prev) => ({ ...prev, popular: data.results }))
  //   );
  // }, []);

  return (
    <div className={styles.ListMovie}>
      <div className={styles.info}>{children}</div>
      {/* <div className="list">{cardData.map((i, ii) => (
        <MainCard cardData={i} classe={"cardList"} key={ii} />
      ))}</div> */}
    </div>
  );
};

export default ListMovie;
