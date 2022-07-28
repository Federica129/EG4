import Button from "../Button";
import { DELETE } from "../../utils/api";
import "./index.css";

const FriendCard = ({
  content,
  setFilterValue,
  id,
  setIsRenderedList,
  isRenderedList,
}) => {
  return (
    <div className="FriendCard" onClick={() => setFilterValue(content.name)}>
      <div className="box">
        <img src={content.photo} alt="pippo" />
        <p>{content.name}</p>
        <Button
          classe="ButtonDelete"
          textContent="x"
          onClickPippo={() =>
            DELETE("friends/", id).then(() => {
              setFilterValue(""); //senza questo, cancelli l'amico ma ti filtra anche i messaggi e a noi non interessa
              setIsRenderedList(!isRenderedList); //passa a true e riparte la get
            })
          }
        />
      </div>
    </div>
  );
};

export default FriendCard;
