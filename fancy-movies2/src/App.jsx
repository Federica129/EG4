import MovieEntity from "./components/MovieEntity";
import MainInput from "./components/MainInput";
import MainSection from "./components/MainSection";
import { useState, useRef, createContext } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

import "./App.scss";

export const ModalContext = createContext();

function App() {
  const [inputValue, setInputValue] = useState("");
  const [movieTitle, setMovieTitle] = useState("moulin");
  const [visibility, setVisibility] = useState(false);
  const [id, setId] = useState(0);

  const modalVisibility = {
    visibility,
    setVisibility,
  };

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
      <ModalContext.Provider value={modalVisibility}>
        <Navbar allRef={allRef}>
          <MainInput
            inputValue={inputValue}
            setInputValue={setInputValue}
            onHandleSubmit={onHandleSubmit}
            setMovieTitle={setMovieTitle}
            movieTitle={movieTitle}
          />
        </Navbar>{" "}
        <MovieEntity movieTitle={movieTitle} setId={setId} />
        <MainSection allRef={allRef} setId={setId} />
        <Footer allRef={allRef} />
        {visibility && <Modal id={id} />}
      </ModalContext.Provider>
    </div>
  );
}

export default App;
