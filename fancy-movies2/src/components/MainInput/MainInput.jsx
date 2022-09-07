import { useState, useEffect, useRef } from "react";
import { GET } from "../../utils/api";
import styles from "./index.module.scss";
// import "./index.scss";

const MainInput = ({
  inputValue,
  setInputValue,
  onHandleSubmit,
  setMovieTitle,
}) => {
  const inputRef = useRef(null);
  const [active, setActive] = useState("");
  const [filterS, setFilterS] = useState("");
  const [language, setLanguage] = useState("en"); // per checkbox per cambiare lingua - valore standard inglese
  const [queryActive, setQueryActive] = useState(false);
  const checkbox = useRef(null);

  // useEffect(() => {
  //    inputRef.current.focus(); //al riavvio, focus sull'input, pronto a scrivere senza selezionarlo
  // }, [active]);

  const onHandleInput = (e) => {
    setInputValue(e.target.value);

    setQueryActive(true);
  };

  // const handleOnCheck = (e) => {
  //   if (e.target.checked) {
  //     setLanguage(e.target.id);
  //   }
  //   if (!e.target.checked) {
  //     setLanguage("en");
  //   }
  //   console.log(filterS);
  // };

  const onSubmit = (e) => {
    e.preventDefault();

    setActive(styles.active);
    inputRef.current.focus();

    if (active === styles.active) {
      onHandleSubmit(e);
      setInputValue("");
    }
  };

  useEffect(() => {
    if (inputValue) {
      GET(
        "search",
        "movie",
        `&language=${language}`,
        `&query=${inputValue}&page=1`
      ).then((data) => setFilterS(data));
    }
  }, [inputValue, language]);

  useEffect(() => {
    const onEventListener = (e) => {
      setQueryActive(false);
      if (e.target.tagName !== "INPUT" && e.target.className !== "submit_btn") {
        setActive("");
      }
    };

    window.addEventListener("click", (e) => {
      onEventListener(e);
    });

    return window.removeEventListener("click", (e) => {
      onEventListener(e);
    });
    //mettere sempre il remove
  }, []);
  console.log(styles);
  return (
    <div className={styles.MainInput}>
      <form className={`${styles.MainInput} ${active}`} onSubmit={onSubmit}>
        {/* <input
          ref={checkbox}
          onClick={(e) => handleOnCheck(e)}
          type="checkbox"
          id="it"
          value="Italiano"
        />
        <input
          type="checkbox"
          id="fr"
          value="France"
          onClick={(e) => handleOnCheck(e)}
        /> */}

        <input
          placeholder="Search..."
          ref={inputRef}
          value={inputValue}
          onChange={onHandleInput}
          type="text"
        />

        <button className="submit_btn" type="submit">
          Search
        </button>
      </form>
      {inputValue.length > 1 &&
      filterS.results &&
      filterS.results.length > 0 ? (
        <div
          className={`${styles.MainInput__filter} ${
            queryActive && styles.active
          }`}
        >
          <ul>
            {filterS.results.map((movie) => {
              return (
                <li
                  key={movie.id}
                  onClick={() => {
                    setMovieTitle(movie.title);
                    window.scrollTo(0, 0);
                  }}
                >
                  {movie.title}
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <div
          className={`${styles.MainInput__filter} ${
            queryActive && styles.active
          }`}
        >
          <p>Non ci sono risultati..</p>
        </div>
      )}
    </div>
  );
};

export default MainInput;
