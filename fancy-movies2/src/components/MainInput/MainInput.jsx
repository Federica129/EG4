import { useState, useEffect, useRef, useCallback } from "react";
import { GET } from "../../utils/api";
import "./index.css";

const MainInput = ({
  inputValue,
  setInputValue,
  onHandleSubmit,
  setMovieTitle,
}) => {
  const inputRef = useRef(null);
  const [active, setActive] = useState("");
  const [filter, setFilter] = useState("");
  const [filterS, setFilterS] = useState("");
  const [queryActive, setQueryActive] = useState("");

  // useEffect(() => {
  //    inputRef.current.focus(); //al riavvio, focus sull'input, pronto a scrivere senza selezionarlo
  // }, [active]);

  const onHandleInput = (e) => {
    setInputValue(e.target.value);
    setFilter(e.target.value);
    if (e.target.value.length > 0) {
      setQueryActive("active");
    } else setQueryActive("");

    // if (inputRef.current.focus() !== inputRef.current) {
    //   setQueryActive("");
    // }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    setActive("active");
    inputRef.current.focus();

    if (active === "active") {
      onHandleSubmit(e);
      setInputValue("");
    }
  };

  useEffect(() => {
    if (filter) {
      GET("search", "movie", `&query=${inputValue}&page=1`).then((data) =>
        setFilterS(data)
      );
    }
  }, [inputValue]);

  //   useEffect(() => {
  //     const onEventListener = () => {
  //             setActive(false);
  //
  //     }

  //     window.addEventListener('click', (e) =>{
  //         if (e.target.className !== 'list-results_button-container' && e.target.tagName !== 'BUTTON') {
  //             onEventListener(e)
  //         }
  //     })

  //     return window.removeEventListener('click', (e)=> {
  //         onEventListener(e)
  //     })
  // }, [])

  return (
    <div className="MainInput">
      <form className={`MainInput ${active}`} onSubmit={onSubmit}>
        <input
          placeholder="Search..."
          ref={inputRef}
          value={inputValue}
          onChange={onHandleInput}
          type="text"
        />
        <button type="submit">Search</button>
      </form>

      {inputValue.length > 1 &&
      filterS.results &&
      filterS.results.length > 0 ? (
        <div className={`MainInput__filter ${queryActive}`}>
          <ul>
            {filterS.results.map((movie) => {
              // console.log(movie);
              return (
                <li key={movie.id} onClick={() => setMovieTitle(movie.title)}>
                  {movie.title}
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <div className={`MainInput__filter ${queryActive}`}>
          <p>Non ci sono risultati..</p>
        </div>
      )}
    </div>
  );
};

export default MainInput;
