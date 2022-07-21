import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
// import Button from "./components/Button";
import "./App.css";

function App() {
  const [isGalleryVisibile, setGalleryVisibility] = useState(true);

  return (
    <div className="App">
      <Navbar setBtn={setGalleryVisibility} toggle={isGalleryVisibile} />
      <Hero />
      {/* <nav>
        <Button
          btnTextCont="show / hide"
          onHandleClick={() => setGalleryVisibility(!isGalleryVisibile)}
        />
      </nav> */}
      <Gallery visibility={isGalleryVisibile} />
      <hr />
    </div>
  );
}

export default App;
