import MovieEntity from "./components/MovieEntity";
import MainInput from "./components/MainInput";
import MainSection from "./components/MainSection";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./App.scss";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [movieTitle, setMovieTitle] = useState("titanic");

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
      <Footer />
    </div>
  );
}

export default App;
