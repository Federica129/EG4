import styles from "./App.module.scss";
import HomePage from "./components/pages/HomePage";

function App() {
  return (
    <div className={styles.App}>
      <HomePage />
    </div>
  );
}

export default App;
