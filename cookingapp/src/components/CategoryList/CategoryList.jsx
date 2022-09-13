import "./index.modules.scss";
import CategoryListItem from "../CategoryListItem";

function CategoryList({ data }) {
  const categories = data;
  console.log(categories);
  return (
    <div className="CategoryList">
      <ul>
        {categories?.map((category) => (
          <CategoryListItem key={category.idCategory} data={category} />
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;
