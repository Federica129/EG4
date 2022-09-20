import styles from "./index.module.scss";
import MainCard from "../MainCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { memo } from "react";

const ListMovie = ({ cardData, type, setId, setModalType, reducer }) => {
  return (
    <>
      <>
        <div className={styles.ListMovie}>
          <div className={styles.listTv}>
            {cardData.map((i, ii) => (
              <MainCard
                type={type}
                cardData={i}
                classe={"cardList"}
                key={ii}
                setId={setId}
                setModalType={setModalType}
              />
            ))}
          </div>
        </div>
      </>
      <div className={styles.btn}>
        <div className={styles.prev}>
          <button
            onClick={() => reducer.dispatch({ type: "MINDECREMENT" })}
            disabled={reducer.state.page == "1"}
          >
            <span>
              <MdSkipPrevious />
            </span>
          </button>
          <button
            onClick={() => reducer.dispatch({ type: "DECREMENT" })}
            disabled={reducer.state.page == "1"}
          >
            <span>
              <IoIosArrowBack />
            </span>
          </button>
        </div>
        <p>{reducer.state.page}</p>
        <div className={styles.next}>
          <button
            onClick={() => reducer.dispatch({ type: "INCREMENT" })}
            disabled={reducer.state.page == "20"}
          >
            <span>
              <IoIosArrowForward />
            </span>
          </button>
          <button
            onClick={() => reducer.dispatch({ type: "MAXINCREMENT" })}
            disabled={reducer.state.page == "20"}
          >
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
