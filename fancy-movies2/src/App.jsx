import MovieEntity from "./components/MovieEntity";
import MainInput from "./components/MainInput";
import MainSection from "./components/MainSection";
import { useState, useEffect, useLayoutEffect } from "react";

import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [inputValue, setInputValue] = useState("");
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    // console.log(inputValue);

    setMovieID(inputValue);
  };

  const [movieData, setMovieData] = useState({});
  const [movieID, setMovieID] = useState("324668");

  return (
    <div className="App">
      <Navbar />
      <MainSection />
      <MainInput
        inputValue={inputValue}
        setInputValue={setInputValue}
        onHandleSubmit={onHandleSubmit}
      />
      <MovieEntity
        movieData={movieData}
        movieID={movieID}
        setMovieData={setMovieData}
      />
    </div>
  );
}

export default App;
