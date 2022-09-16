import styles from "./index.module.scss";
import { Link, useParams, useLocation } from "react-router-dom";

function CategoryList(props) {
  const { meal, categoryName } = props;

  return (
    meal && (
      <li className={styles.MealListItem}>
        <div className={styles.thumbnail}>
          <img
            className={styles.thumbnail}
            src={meal.strMealThumb ? meal.strMealThumb : "Loading..."}
            alt={`preview of ${meal.strCategory} recipe`}
          />
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>{meal.strMeal}</h3>
        </div>
        <Link
          to={`/catalogo/${categoryName}/${meal.strMeal}/${meal.idMeal}`}
          title={`naviga sul catalogo ${meal.strMeal}`}
          className={styles.link}
          state={{ meal, categoryName }}
        >
          {meal.strMeal}
        </Link>
      </li>
    )
  );
}

export default CategoryList;
