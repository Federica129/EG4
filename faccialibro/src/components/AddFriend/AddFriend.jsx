import { useState } from "react";
import { POST } from "../../utils/api.js";

import Button from "../Button";
import "./index.css";

const AddFriend = ({
  isRenderedList,
  setIsRenderedList,
  setIsLoginVisible,
}) => {
  // Controlled component!!! - Forms e input
  const [nameText, setNameText] = useState("");
  const [photo, setPhoto] = useState("");
  const onFormSubmit = (e) => {
    e.preventDefault();

    if (nameText && photo) {
      if (localStorage.getItem("username")) {
        POST("friends", {
          name: nameText,
          photo: photo,
        })
          .then(() => {
            setNameText("");
            setPhoto("");
          })
          .then(() => {
            setIsRenderedList(!isRenderedList);
          });
      } else {
        setIsLoginVisible(true);
      }
    }
  };
  return (
    <div className="AddFriends">
      <form className="AddFriendInput" onSubmit={onFormSubmit}>
        <input
          className="AddFriend__text"
          type="text"
          placeholder="Scrivi il nome..."
          value={nameText}
          onChange={(e) => setNameText(e.target.value)}
          required
        />
        <input
          className="AddFriend__photo"
          type="text"
          placeholder="Url photo.."
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
          required
        />
        <Button classe="Button" type="submit" textContent="Invia" />
      </form>
    </div>
  );
};

export default AddFriend;
