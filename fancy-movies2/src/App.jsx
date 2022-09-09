import MovieEntity from "./components/MovieEntity";
import MainInput from "./components/MainInput";
import MainSection from "./components/MainSection";
import { useState, useRef } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./App.scss";
import ListMovie from "./components/ListMovie";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [movieTitle, setMovieTitle] = useState("moulin");

  const refMovie = useRef(null);
  const refPopular = useRef(null);
  const refContact = useRef(null);

  const allRef = {
    refMovie,
    refPopular,
    refContact,
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();

    setMovieTitle(inputValue);
  };

  return (
    <div className="App">
      <Navbar allRef={allRef}>
        <MainInput
          inputValue={inputValue}
          setInputValue={setInputValue}
          onHandleSubmit={onHandleSubmit}
          setMovieTitle={setMovieTitle}
          movieTitle={movieTitle}
        />
      </Navbar>{" "}
      <MovieEntity movieTitle={movieTitle} />
      <MainSection allRef={allRef} />
      {/* <ListMovie>
        <MainInput
          inputValue={inputValue}
          setInputValue={setInputValue}
          onHandleSubmit={onHandleSubmit}
          setMovieTitle={setMovieTitle}
          movieTitle={movieTitle}
        />
      </ListMovie> */}
      <Footer allRef={allRef} />
    </div>
  );
}

export default App;
