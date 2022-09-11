import styles from "./index.module.scss";
import MainCard from "../MainCard";

const ListMovie = ({cardData, type, numPage, setNumPage}) => {
  return (
    <>
    <>
    <div className={styles.ListMovie}>
      <div className={styles.listTv}>{cardData.map((i, ii) => (
        <MainCard type={type} cardData={i} classe={"cardList"} key={ii} />
      ))}</div>
     </div></>
      <div className={styles.btn}>
      <button onClick={() => setNumPage(numPage - 1)} disabled={numPage == 1}>{'<'}</button>
      <p>{numPage}</p>
      <button onClick={() => setNumPage(numPage + 1)} disabled={numPage == 20} >{'>'}</button></div>
      
     </>
  );
};

export default ListMovie;
