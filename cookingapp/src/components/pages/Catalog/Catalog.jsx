import "./index.modules.scss";
import { ENDPOINTS } from "../../../utils/endpoints";
import { useFetch } from "../../../utils/useFetch";
import { useParams, useLoaderData } from "react-router-dom";
import MealList from "../../MealList";

function Catalog() {
  const params = useParams();
  const { categoryName } = params;
  const data = useLoaderData();

  // const { data, loading, error } = useFetch(
  //   `${ENDPOINTS.FILTER}?c=${categoryName}`
  // );

  // console.log(data && data);
  return (
    <div className="Catalog">
      <MealList meals={data?.meals} categoryName={categoryName} />
    </div>
  );
}

export default Catalog;
