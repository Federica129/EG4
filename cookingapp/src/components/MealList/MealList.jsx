import styles from "./index.module.scss";
import MealListItem from "../MealListItem";

function MealList({ meals }) {
  // console.log(meals && meals);
  return (
    <div className={styles.MealList}>
      <ul>
        {meals?.map((Meal) => (
          <MealListItem key={Meal.idMeal} data={Meal} />
        ))}
      </ul>
    </div>
  );
}

export default MealList;
