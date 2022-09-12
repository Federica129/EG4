import styles from "./index.module.scss";
import MainCard from "../MainCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { memo } from "react";

const ListMovie = ({ cardData, type, numPage, setNumPage }) => {
  return (
    <>
      <>
        <div className={styles.ListMovie}>
          <div className={styles.listTv}>
            {cardData.map((i, ii) => (
              <MainCard
                numPage={numPage}
                setNumPage={setNumPage}
                type={type}
                cardData={i}
                classe={"cardList"}
                key={ii}
              />
            ))}
          </div>
        </div>
      </>
      <div className={styles.btn}>
        <div className={styles.prev}>
          <button onClick={() => setNumPage(1)} disabled={numPage == 1}>
            <span>
              <MdSkipPrevious />
            </span>
          </button>
          <button
            onClick={() => setNumPage(numPage - 1)}
            disabled={numPage == 1}
          >
            <span>
              <IoIosArrowBack />
            </span>
          </button>
        </div>
        <p>{numPage}</p>
        <div className={styles.next}>
          <button
            onClick={() => setNumPage(numPage + 1)}
            disabled={numPage == 20}
          >
            <span>
              <IoIosArrowForward />
            </span>
          </button>
          <button onClick={() => setNumPage(20)} disabled={numPage == 20}>
            <span>
              <MdSkipNext />
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default memo(ListMovie);
