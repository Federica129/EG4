import styles from "./index.module.scss";
import { Link, useParams } from "react-router-dom";

function CategoryList({ data }) {
  const meal = data;

  return (
    <li className={styles.MealListItem}>
      <div className={styles.thumbnail}>
        <img
          className={styles.thumbnail}
          src={meal.strMealThumb}
          alt={`preview of ${meal.strCategory} recipe`}
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{meal.strMeal}</h3>
      </div>
    </li>
  );
}

export default CategoryList;
