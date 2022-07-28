import Button from "../Button";
import { useState } from "react";
import logo from "../../assets/logoipsum-logo-35.svg";

import "./index.css";

const Modal = ({
  Yes,
  isModalVisible,
  setIsModalVisible,
  textContent,
  type,
}) => {
  const [usernameInput, setUsernameInput] = useState("");

  if (type === "login") {
    const onGetUsername = () => {
      // new Promise(
      //   (resolve) => resolve(localStorage.setItem("username", usernameInput)),
      //   setIsModalVisible(false))
      localStorage.setItem("username", usernameInput);
      setIsModalVisible(false);
    };

    return (
      isModalVisible && (
        <div className="Modal__Login">
          <div className="Modal__LoginBox">
            <img src={logo} alt="" />
            <h2>{textContent}</h2>
            <form
              className="Modal__form"
              onSubmit={
                // async () =>
                // await onGetUsername().then(() => setIsModalVisible(false))
                onGetUsername
              }
            >
              <input
                value={usernameInput}
                onChange={(e) => setUsernameInput(e.target.value)}
                className="Modal__form--input"
                type="text"
                placeholder="Nome ..."
                required
              />
              <Button classe="Button" type="submit" textContent="Continua" />
            </form>
          </div>
        </div>
      )
    );
  } else {
    return (
      isModalVisible && (
        <div className="Modal">
          <div className="ModalBox">
            <h1>{textContent}</h1>
            <div className="box2">
              <Button
                classe="ButtonOption"
                textContent="Yes"
                onClickPippo={Yes}
              />
              <Button
                classe="ButtonOption2"
                textContent="No"
                onClickPippo={() => setIsModalVisible(false)}
              />
            </div>
          </div>
        </div>
      )
    );
  }
};

export default Modal;
