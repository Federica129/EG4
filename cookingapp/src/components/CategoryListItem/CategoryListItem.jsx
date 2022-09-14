import styles from "./index.module.scss";
import { Link } from "react-router-dom";

function CategoryList({ data }) {
  const category = data;
  return (
    <li className={styles.categoryListItem}>
      <div className={styles.thumbnail}>
        <img
          className={styles.thumbnail}
          src={category.strCategoryThumb}
          alt={`preview of ${category.strCategory} category`}
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{category.strCategory}</h3>
        {/* <div className={styles.description}>
          <p>{category.strCategoryDescription}</p>
        </div> */}
      </div>
      <Link
        to={`/catalogo/${category.strCategory}`}
        title={`naviga sul catalogo ${category.strCategory}`}
        className={styles.link}
      >
        {category.strCategory}
      </Link>
    </li>
  );
}

export default CategoryList;
