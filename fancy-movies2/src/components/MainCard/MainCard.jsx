import "./index.css";
import { AiFillStar } from "react-icons/ai";

const MainCard = ({ cardData, classe }) => {
  const { title, vote_average, poster_path } = cardData;

  return (
    <div className={classe}>
      <div className="MainCard">
        <img
          className="MainCard--img"
          src={`https://image.tmdb.org/t/p/w342${poster_path}`}
          alt={title}
        />
        <div className="MainCard__text">
          <h3>{title}</h3>
          <div className="MainCard__text2">
            <p>{vote_average}</p>
            <span>
              <AiFillStar />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
