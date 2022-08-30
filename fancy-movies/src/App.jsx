import MovieEntity from "./components/MovieEntity";
import MainInput from "./components/MainInput";
import { useState, useEffect } from "react";
import { GET } from "./utils/api";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [active, setActive] = useState("");

  const onHandleSubmit = (e) => {
    e.preventDefault();
    // console.log(inputValue);

    setMovieID(inputValue);
  };

  const [movieData, setMovieData] = useState({});
  const [movieID, setMovieID] = useState("324668");

  useEffect(() => {
    GET("movie", movieID).then((data) => setMovieData(data));
  }, [movieID]);

  return (
    <div className="App">
      <MainInput
        active={active}
        setActive={setActive}
        inputValue={inputValue}
        setInputValue={setInputValue}
        onHandleSubmit={onHandleSubmit}
      />
      <MovieEntity movieData={movieData} />
    </div>
  );
}

export default App;
