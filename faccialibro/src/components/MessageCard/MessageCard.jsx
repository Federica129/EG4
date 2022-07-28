import Button from "../Button";
import { DELETE } from "../../utils/api";
import { useState } from "react";
import Modal from "../Modal";
import "./index.css";

const MessageCard = ({
  textContent,
  isRenderedList,
  setIsRenderedList,
  id,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div className="MessageCard">
      <div className="box">
        <p className="MessageCard__text">{textContent.text}</p>
        <Button
          classe="ButtonDelete"
          textContent="X"
          onClickPippo={() => setIsModalVisible(true)}
        />
      </div>
      <div className="MessageCard__info">
        <p className="MessageCard__info--sender">{textContent.sender}</p>
        <p className="MessageCard__info--date">{textContent.date}</p>
        <Modal
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
          textContent="Are you sure? 😏"
          Yes={() =>
            DELETE("messages/", id).then(() => {
              setIsModalVisible(false);
              setIsRenderedList(!isRenderedList);
            })
          }
        />
      </div>
    </div>
  );
};

export default MessageCard;
