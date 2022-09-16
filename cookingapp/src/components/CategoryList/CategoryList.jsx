import "./index.modules.scss";
import CategoryListItem from "../CategoryListItem";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function CategoryList({ data }) {
  const categories = data;
  // console.log(categories);
  // const [searchParams, setSearchParams] = useSearchParams();
  // const [numPage, setNumPage] = useState(1);

  // useEffect(() => {
  //   setSearchParams(numPage);
  //   searchParams.get("page");
  // }, [numPage]);

  // let pagina = numPage;
  // const perPage = 4;
  // const totalPage = Math.ceil(data.length / perPage);

  // const increment = () => {
  //   setNumPage(numPage + 1);
  // };

  // const prev = () => {
  //   setNumPage(numPage - 1);
  // };

  return (
    <>
      {/* <button type="button" onClick={prev} disabled={numPage === 1}>
        Prev
      </button>
      <button
        type="button"
        onClick={increment}
        disabled={numPage === totalPage}
      >
        Next
      </button> */}
      <div className="CategoryList">
        <ul>
          {
            categories?.map((category) => (
              <CategoryListItem key={category.idCategory} data={category} />
            ))
            // .slice((pagina - 1) * perPage, pagina * perPage)
          }
        </ul>
      </div>
    </>
  );
}

export default CategoryList;
