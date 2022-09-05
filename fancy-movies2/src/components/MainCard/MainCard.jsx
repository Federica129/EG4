import "./index.scss";
import { AiFillStar } from "react-icons/ai";
import { useState, useEffect, memo } from "react";
import Modal from "../Modal";

const MainCard = ({ cardData, classe }) => {
  const { title, vote_average, poster_path, overview, release_date } = cardData;
  const [visibility, setVisibility] = useState(false);
  const [isActive, setActive] = useState("");

  useEffect(() => {
    setActive("");
    setTimeout(() => {
      setActive("active");
    }, 1000);
  }, [visibility]);

  return (
    <>
      <div
        className={classe}
        onClick={() => {
          setVisibility(true);
        }}
      >
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
      {visibility && (
        <Modal>
          <div className="modalbox">
            <div className="button">
              <p onClick={() => setVisibility(false)}>X</p>
            </div>

            <div className="box">
              <div className="box2">
                <img
                  src={`https://image.tmdb.org/t/p/w342${poster_path}`}
                  alt="poster_path"
                />
                <div className="vote">
                  <span>
                    <AiFillStar />
                  </span>
                  <p>{vote_average}</p>
                </div>
              </div>
              <div className="text">
                <h1 className="modal-title">{title}</h1>
                <p className={`description ${isActive}`}>{overview}</p>
                <p>{release_date}</p>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default memo(MainCard);
