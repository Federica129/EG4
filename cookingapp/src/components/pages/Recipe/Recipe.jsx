import styles from "./index.module.scss";
import { ENDPOINTS } from "../../../utils/endpoints";
import { useFetch } from "../../../utils/useFetch";
import {
  useParams,
  Outlet,
  Link,
  NavLink,
  useLoaderData,
} from "react-router-dom";

const formatRecipe = (data) => {
  const initialRecipe = data.meals?.at(0) ?? {};

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const name = initialRecipe[`strIngredient${i}`];
    const value = initialRecipe[`strMeasure${i}`];

    if (!name?.length) {
      continue;
    }

    ingredients.push({ name, value });
  }

  return {
    name: initialRecipe.strMeal,
    id: initialRecipe.idMeal,
    youtubeUrl: initialRecipe.strYoutube,
    thumbnailSrc: initialRecipe.strMealThumb,
    tags: initialRecipe.strTags,
    instructions: initialRecipe.strInstructions,
    ingredients,
  };
};

function Recipe() {
  const params = useParams();
  const { categoryName, recipeName, id } = params;

  const data = useLoaderData();

  // const { data, loading, error } = useFetch(
  //   `${ENDPOINTS.DETEAIL}?i=${id}`,
  //   formatRecipe
  // );

  return (
    data && (
      <div className={styles.Recipe}>
        <h1 className={styles.Title}>
          {categoryName} - {recipeName}
        </h1>
        <ul className={styles.list}>
          <li>
            <NavLink
              to={`istruzioni`}
              className={styles.active}
              style={({ isActive }) => ({
                backgroundColor: isActive && "#4d3f40",
                transition: isActive ? "0.5s" : "0.5s",
              })}
            >
              Instructions
            </NavLink>
          </li>

          <li>
            <NavLink
              to={`ingredients`}
              className={styles.active}
              style={({ isActive }) => ({
                backgroundColor: isActive && "#4d3f40",
                transition: isActive ? "0.5s" : "0.5s",
              })}
            >
              Ingredients
            </NavLink>
          </li>

          <li>
            <NavLink
              to={`youtube`}
              className={styles.active}
              style={({ isActive }) => ({
                backgroundColor: isActive && "#4d3f40",
                transition: isActive ? "0.5s" : "0.5s",
              })}
            >
              Video
            </NavLink>
          </li>
        </ul>
        <Outlet context={formatRecipe(data)} />
      </div>
    )
  );
}

export default Recipe;
