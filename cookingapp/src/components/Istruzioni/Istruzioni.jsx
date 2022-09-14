import styles from "./index.module.scss";
import { useOutletContext } from "react-router-dom";

function Istruzioni() {
  const recipe = useOutletContext();
  const { instructions } = recipe;

  return (
    <div className={styles.Istruzioni}>
      <h3 className={styles.title}>Istruzioni:</h3>
      <p className={styles.content}>{instructions}</p>
    </div>
  );
}

export default Istruzioni;
