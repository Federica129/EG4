import styles from "./index.module.scss";
import MainCard from "../MainCard";
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'

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
      <button onClick={() => setNumPage(numPage - 1)} disabled={numPage == 1}><span><IoIosArrowBack /></span></button>
      <p>{numPage}</p>
      <button onClick={() => setNumPage(numPage + 1)} disabled={numPage == 20} ><span><IoIosArrowForward /></span></button></div>
      
     </>
  );
};

export default ListMovie;
