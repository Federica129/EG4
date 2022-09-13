import "./index.modules.scss";
import { ENDPOINTS } from "../../../utils/endpoints";
import { useFetch } from "../../../utils/useFetch";
import { useParams } from "react-router-dom";
import MealList from "../../MealList";

function Catalog() {
  const params = useParams();
  const { categoryName } = params;

  const { data, loading, error } = useFetch(
    `${ENDPOINTS.FILTER}?c=${categoryName}`
  );
  // console.log(data && data.meals);
  return (
    <div className="Catalog">
      <h1>{categoryName}</h1>
      <MealList meals={data?.meals} />
    </div>
  );
}

export default Catalog;
