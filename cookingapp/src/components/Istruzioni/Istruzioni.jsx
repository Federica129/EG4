import styles from "./index.module.scss";
import { useOutletContext } from "react-router-dom";

function Istruzioni() {
  const recipe = useOutletContext();
  const { instructions } = recipe;

  return (
    <div className={styles.Istruzioni}>
      <div className={styles.content}>
        <h3 className={styles.title}>Istruzioni:</h3>
        <p className={styles.text}>{instructions}</p>
      </div>
    </div>
  );
}

export default Istruzioni;
