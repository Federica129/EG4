import Button from "../Button";

import "./index.css";

const Modal = ({ Yes, isModalVisible, setIsModalVisible }) => {
  return (
    isModalVisible && (
      <div className="Modal">
        <h1>R u sure? 😏</h1>
        <div className="box2">
          <Button textContent="Yes" color="green" onClickPippo={Yes} />
          <Button
            textContent="No"
            color="red"
            onClickPippo={() => setIsModalVisible(false)}
          />
        </div>
      </div>
    )
  );
};

export default Modal;
