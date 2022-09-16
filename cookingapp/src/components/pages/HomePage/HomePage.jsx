import styles from "./index.module.scss";
import Hero from "../../Hero";
import CategoryList from "../../CategoryList";
import { useLoaderData, useSearchParams } from "react-router-dom";
import { ENDPOINTS } from "../../../utils/endpoints";
import { useFetch } from "../../../utils/useFetch";
import { useState, useMemo } from "react";

function HomePage() {
  // const { data, loading, error } = useFetch(`${ENDPOINTS.CATEGORIES}`);
  const { categories } = useLoaderData();
  // console.log(data);

  // console.log(categories);
  const [searchParams, setSearchParams] = useSearchParams({ page: 1 });
  // const [numPage, setNumPage] = useState(1);
  const page = searchParams?.get("page") ?? 1;

  // let pagina = numPage;
  const perPage = 4;
  const totalPage = Math.ceil(categories.length / perPage);

  const catPaginated = useMemo(() => {
    return categories?.slice((page - 1) * perPage, page * perPage);
  }, [categories, page]);

  const handleOnClick = (variation) => {
    setSearchParams((prev) => {
      return { page: Number(prev.get("page")) + variation };
    });
  };
  if (!categories) {
    return "Loading...";
  }

  return (
    <div className={styles.HomePage}>
      <Hero />
      <h1 className={styles.name}>Category</h1>
      <button
        type="button"
        onClick={handleOnClick.bind(this, -1)}
        //bind gli passi come primo paramento l'argomento, in questo caso si riferisce alla fn
        //handleOnClick, dal secondo paramento in poi, sono i valori che mandi come paramentro alla funzione
        disabled={Number(searchParams?.get("page")) === 1}
      >
        Prev
      </button>
      <button
        type="button"
        onClick={handleOnClick.bind(this, +1)}
        disabled={Number(searchParams?.get("page")) === totalPage}
      >
        Next
      </button>
      <CategoryList data={catPaginated} />
    </div>
  );
}

export default HomePage;
