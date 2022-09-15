import styles from "./index.module.scss";
import { useOutletContext } from "react-router-dom";

function Ingredienti() {
  const recipe = useOutletContext();
  const { ingredients } = recipe;
  // console.log(recipe);

  return (
    <div className={styles.Ingredienti}>
      <h3>Ingredienti:</h3>
      <ul>
        {ingredients?.map((ingredients, i) => (
          <li key={i}>
            {ingredients.name} - {ingredients.value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Ingredienti;
