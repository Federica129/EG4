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
      <p className="MessageCard__text">{textContent.text}</p>
      <div className="MessageCard__info">
        <p className="MessageCard__info--sender">{textContent.sender}</p>
        <p className="MessageCard__info--date">{textContent.date}</p>
        <Button textContent="X" onClickPippo={() => setIsModalVisible(true)} />
        <Modal
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
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
