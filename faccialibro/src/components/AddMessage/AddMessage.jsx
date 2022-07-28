import { useState } from "react";
import { POST } from "../../utils/api.js";

import Button from "../Button";
import "./index.css";

const AddMessage = ({ isRenderedList, setIsRenderedList }) => {
  // Controlled component!!! - Forms e input
  const [messageText, setMessageText] = useState("");
  const [sender, setSender] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();

    // if (messageText && sender)
    if (messageText) {
      POST("messages", {
        text: messageText,
        // sender: sender,
        sender: localStorage.getItem("username") || "Generic",
        date: new Date().toLocaleDateString(),
      })
        .then(() => {
          setMessageText("");
          // setSender("");
        })
        .then(() => {
          setIsRenderedList(!isRenderedList);
        });
    }
  };

  return (
    <form className="AddMessage" onSubmit={onFormSubmit}>
      <input
        className="AddMessage__text"
        type="text"
        placeholder="Scrivi il messaggio..."
        value={messageText}
        onChange={(e) => setMessageText(e.target.value)}
        required
      />
      {/* <input
        className="AddMessage__sender"
        type="text"
        placeholder="Autore..."
        value={sender}
        onChange={(e) => setSender(e.target.value)}
        required
      /> */}
      <Button classe="Button" type="submit" textContent="Invia" />
    </form>
  );
};

export default AddMessage;
