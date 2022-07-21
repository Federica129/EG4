import Button from "../Button";
// import Modal from "../Modal";
import "./index.css";

// const ImageCard = (props) => {
const ImageCard = ({ data, onClickDiPippo }) => {
  return (
    <div className="ImageCard">
      <img className="ImageCard__img" src={data.url} alt={data.name} />
      <p className="ImageCard__par">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <Button btnTextCont={"Zoommami"} onHandleClick={onClickDiPippo} />
    </div>
  );
};

export default ImageCard;

//R13 onHandleClick con Gallery R21
