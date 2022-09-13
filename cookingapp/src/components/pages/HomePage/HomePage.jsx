import styles from "./index.module.scss";
import Hero from "../../Hero";
import CategoryList from "../../CategoryList";
import { ENDPOINTS } from "../../../utils/endpoints";
import { useFetch } from "../../../utils/useFetch";

function HomePage() {
  const { data, loading, error } = useFetch(`${ENDPOINTS.CATEGORIES}`);

  return (
    <div className={styles.HomePage}>
      {/* <Hero /> */}
      <h1>Category</h1>
      <CategoryList data={data?.categories} />
    </div>
  );
}

export default HomePage;
