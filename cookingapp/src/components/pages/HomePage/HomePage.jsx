import styles from "./index.module.scss";
import Hero from "../../Hero";
import CategoryList from "../../CategoryList";
import { useLoaderData } from "react-router-dom";
import { ENDPOINTS } from "../../../utils/endpoints";
import { useFetch } from "../../../utils/useFetch";

function HomePage() {
  // const { data, loading, error } = useFetch(`${ENDPOINTS.CATEGORIES}`);
  const data = useLoaderData();
  console.log(data);

  if (!data) {
    return "Loading...";
  }

  return (
    <div className={styles.HomePage}>
      <Hero />
      <h1 className={styles.name}>Category</h1>
      <CategoryList data={data?.categories} />
    </div>
  );
}

export default HomePage;
