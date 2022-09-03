import MovieEntity from "./components/MovieEntity";
import MainInput from "./components/MainInput";
import MainSection from "./components/MainSection";
import { useState, useEffect, useLayoutEffect } from "react";

import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [movieTitle, setMovieTitle] = useState("titanic");
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  const onHandleSubmit = (e) => {
    e.preventDefault();

    setMovieTitle(inputValue);
  };

  return (
    <div className="App">
      <Navbar>
        <MainInput
          inputValue={inputValue}
          setInputValue={setInputValue}
          onHandleSubmit={onHandleSubmit}
          setMovieTitle={setMovieTitle}
          movieTitle={movieTitle}
        />
      </Navbar>{" "}
      <MovieEntity movieTitle={movieTitle} />
      <MainSection />
    </div>
  );
}

export default App;
