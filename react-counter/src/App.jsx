import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <MainContent />
      <Gallery />
      <Footer />
    </div>
  );
};

export default App;
