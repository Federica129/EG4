import styles from "./index.module.scss";
import MealListItem from "../MealListItem";

function MealList(props) {
  const { meals, categoryName } = props;
  // console.log(meals);

  return (
    <div className={styles.MealList}>
      <h1 className={styles.title}>{categoryName}</h1>
      <ul>
        {meals?.map((Meal) => (
          <MealListItem
            categoryName={categoryName}
            key={Meal.idMeal}
            meal={Meal}
          />
        ))}
      </ul>
    </div>
  );
}

export default MealList;
