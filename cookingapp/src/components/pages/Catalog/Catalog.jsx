import "./index.modules.scss";
import { ENDPOINTS } from "../../../utils/endpoints";
import { useFetch } from "../../../utils/useFetch";
import { useParams, useLoaderData, Await } from "react-router-dom";
// import MealList from "../../MealList";
import { lazy, Suspense } from "react";
const MealList = lazy(() => import("../../MealList"));
//1 importare il componente interessante
//2 Aggiungere il componente suspense con prop fallback con all'interno
// quello che stamperà in fase di caricamento
//3 con await, se non arrivano le risposte, stampa quel error
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
      <Suspense fallback={<div>loading!</div>}>
        <Await resolve={data} errorElement={<div>Could not load data 😬</div>}>
          <MealList meals={data?.meals} categoryName={categoryName} />
        </Await>
      </Suspense>
    </div>
  );
}

export default Catalog;
