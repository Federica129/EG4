import { Outlet } from "react-router-dom";
import styles from "./App.module.scss";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomePage from "./components/pages/HomePage";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Outlet />
      {/* senza Outlet,HomePage che è dentro il children, non verrà mai 
      montano, e in automatico non gli arrivano i dati della fetch*/}
      <Footer />
    </div>
  );
}

export default App;
